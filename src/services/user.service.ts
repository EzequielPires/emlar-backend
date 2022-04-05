import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/models/user.entity";
import { FindConditions, FindOneOptions, Repository } from "typeorm";

export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

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
    async findAll() {
        try {
            const list = await this.userRepository.find();
            return {
                success: true,
                data: list,
            }
        } catch(error) {
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