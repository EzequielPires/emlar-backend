import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindImmobilesQueryDto } from "src/dtos/find-immobiles-query.dto";
import { Immobile } from "src/models/immobile.entity";
import { Repository } from "typeorm";

export class ImmobileService {
    constructor(@InjectRepository(Immobile) private repository: Repository<Immobile>) { }
    async create(body: Immobile) {
        try {
            const type = await this.repository.create(body);
            return {
                success: true,
                data: await this.repository.save(type)
            };
        } catch (error) {
            return {
                sucess: false,
                message: error.message
            }
        }
    }

    async findImmobiles(queryDto: FindImmobilesQueryDto) {
        queryDto.page = queryDto.page < 1 ? 1 : queryDto.page;
        queryDto.limit = queryDto.limit > 100 ? 100 : queryDto.limit;
        const { type, key_type, pet } = queryDto;
        const query = this.repository.createQueryBuilder('immobile');
        query.leftJoinAndSelect("immobile.type", "type");
        query.leftJoinAndSelect("immobile.key_type", "key");
        query.leftJoinAndSelect("immobile.photos", "photos");
        query.leftJoinAndSelect("immobile.address", "address");

        type ? query.andWhere('immobile.type.id = :id', { id: `${type}` }) : null;
        key_type ? query.andWhere('immobile.key_type.id = :id', { id: `${key_type}` }) : null;
        pet ? query.andWhere('immobile.pet = :pet', {pet: pet}) : null;
        
        const [immobiles, total] = await query.getManyAndCount();
        return {
            success: true,
            data: immobiles,
            total: total
        }
    }

    async findAll() {
        try {
            const list = await this.repository.find({ relations: ['user', 'type', 'concierge_operation', 'immobile_state', 'key_type', 'immovable_relationship', 'photos', 'address'] });
            return {
                success: true,
                data: list
            }
        } catch (error) {
            return {
                sucess: false,
                message: error.message
            }
        }
    }

    async findOne(id: number) {
        try {
            const immobile = await this.repository.findOne({ relations: ['user', 'type'], where: { id } });
            return {
                success: true,
                data: immobile
            }
        } catch (error) {
            return {
                sucess: false,
                message: error.message
            }
        }
    }

    async delete(id: number) {
        const type = await this.repository.findOne({
            where: { id }
        })

        if (!type) {
            throw new NotFoundException(`Não foi encontrado nenhum imóvel com id ${id}`);
        }

        await this.repository.delete(id)

        return {
            success: true,
            data: {
                message: `Imóvel com id ${id} removido com sucesso`
            }
        }
    }
}