import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindUsersQueryDto } from "src/dtos/find-users-query.dto";
import { User } from "src/models/user.entity";
import { FindConditions, FindOneOptions, Repository } from "typeorm";

export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async create(body: User) {
        try {
            const user = await this.userRepository.create(body);
            return {
                success: true,
                data: await this.userRepository.save(user)
            };
        } catch (error) {
            return {
                sucess: false,
                message: error.message
            }
        }
    }
    async findUsers(queryDto: FindUsersQueryDto): Promise<{ users: User[]; total: number }> {
        queryDto.page = queryDto.page < 1 ? 1 : queryDto.page;
        queryDto.limit = queryDto.limit > 100 ? 100 : queryDto.limit;

        const { email, name } = queryDto;
        const query = this.userRepository.createQueryBuilder('user');
        if (email) {
            query.where('user.email = :email', { email });
        }
        if (name) {
            query.andWhere('user.name LIKE :name', { name: `%${name}%` });
        }
        const [users, total] = await query.getManyAndCount();
        return {
            users: users,
            total: total
        }
    }
    async findAll() {
        try {
            const list = await this.userRepository.find();
            return {
                success: true,
                data: list,
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }
    async findOneOrFail(
        conditions: FindConditions<User>,
        options?: FindOneOptions<User>,
    ) {
        console.log('email');
        try {
            return await this.userRepository.findOneOrFail(conditions, options);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
}