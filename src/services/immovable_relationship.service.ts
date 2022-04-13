import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ImmovableRelationship } from "src/models/immovable_relationship.entity";
import { Repository } from "typeorm";

export class ImmovableRelationshipSevice {
    constructor(@InjectRepository(ImmovableRelationship) private repository: Repository<ImmovableRelationship>) { }

    async create(body: ImmovableRelationship) {
        try {
            const relation = await this.repository.create(body);
            return {
                success: true,
                data: await this.repository.save(relation)
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
            const relation = await this.repository.findOne({where: {id}});
            return {
                success: true,
                data: relation
            }
        } catch (error) {
            return {
                sucess: false,
                message: error.message
            }
        }
    }

    async update(id: number, body: ImmovableRelationship) {
        const relation = await this.repository.findOne({
            where: { id }
        })

        if (!relation) {
            throw new NotFoundException(`Não foi encontrado nenhuma Relação com id ${id}`);
        }

        await this.repository.update({ id }, body);

        return {
            success: true,
            data: await this.repository.findOne({
                where: { id }
            })
        }
    }

    async delete(id: number) {
        const relation = await this.repository.findOne({
            where: { id }
        })

        if (!relation) {
            throw new NotFoundException(`Não foi encontrado nenhuma Relação com id ${id}`);
        }

        await this.repository.delete(id)

        return {
            success: true,
            data: {
                message: `Relação com id ${id} removido com sucesso`
            }
        }
    }
}