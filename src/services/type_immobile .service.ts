import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeImmobile } from "src/models/type_immobile.entity";
import { Repository } from "typeorm";

export class TypeImmobileService {
    constructor(@InjectRepository(TypeImmobile) private repository: Repository<TypeImmobile>) { }

    async create(body: TypeImmobile) {
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
            const list = await this.repository.find();
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
            const type = await this.repository.findOne({where: {id}});
            return {
                success: true,
                data: type
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
            throw new NotFoundException(`Não foi encontrado nenhum tipo de imóvel com id ${id}`);
        }

        await this.repository.delete(id)

        return {
            success: true,
            data: {
                message: `Tipo de imóvel com id ${id} removido com sucesso`
            }
        }
    }
}