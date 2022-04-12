import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Concierge } from "src/models/concierge.entity";
import { Repository } from "typeorm";

export class ConciergeService {
    constructor(@InjectRepository(Concierge) private repository: Repository<Concierge>) { }

    async create(body: Concierge) {
        try {
            const concierge = await this.repository.create(body);
            return {
                success: true,
                data: await this.repository.save(concierge)
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
            const concierge = await this.repository.findOne({where: {id}});
            return {
                success: true,
                data: concierge
            }
        } catch (error) {
            return {
                sucess: false,
                message: error.message
            }
        }
    }

    async update(id: number, body: Concierge) {
        const concierge = await this.repository.findOne({
            where: { id }
        })

        if (!concierge) {
            throw new NotFoundException(`Não foi encontrado nenhuma portaria com id ${id}`);
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
        const concierge = await this.repository.findOne({
            where: { id }
        })

        if (!concierge) {
            throw new NotFoundException(`Não foi encontrado nenhuma portaria com id ${id}`);
        }

        await this.repository.delete(id)

        return {
            success: true,
            data: {
                message: `portaria com id ${id} removido com sucesso`
            }
        }
    }

}