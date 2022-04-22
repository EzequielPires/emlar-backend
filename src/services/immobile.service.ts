import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Immobile } from "src/models/immobile.entity";
import { Repository } from "typeorm";

export class ImmobileService {
    constructor(@InjectRepository(Immobile) private repository: Repository<Immobile>) {}
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

    async findAll() {
        try {
            const list = await this.repository.find({relations: ['user', 'type', 'concierge_operation', 'immobile_state', 'key_type', 'immovable_relationship', 'photos', 'address']});
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
            const immobile = await this.repository.findOne({relations: ['user', 'type'], where: {id}});
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