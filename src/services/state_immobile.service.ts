import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StateImmobile } from "src/models/state_immobile.entity";
import { Repository } from "typeorm";

export class StateImmobileService {
    constructor(@InjectRepository(StateImmobile) private repository: Repository<StateImmobile>) { }

    async create(body: StateImmobile) {
        try {
            const state = await this.repository.create(body);
            return {
                success: true,
                data: await this.repository.save(state)
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
            const state = await this.repository.findOne({where: {id}});
            return {
                success: true,
                data: state
            }
        } catch (error) {
            return {
                sucess: false,
                message: error.message
            }
        }
    }

    async update(id: number, body: StateImmobile) {
        const state = await this.repository.findOne({
            where: { id }
        })

        if (!state) {
            throw new NotFoundException(`Não foi encontrado nenhum estado de imóvel com id ${id}`);
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
        const state = await this.repository.findOne({
            where: { id }
        })

        if (!state) {
            throw new NotFoundException(`Não foi encontrado nenhum estado de imóvel com id ${id}`);
        }

        await this.repository.delete(id)

        return {
            success: true,
            data: {
                message: `Estado de imóvel com id ${id} removido com sucesso`
            }
        }
    }
}