import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Furniture } from "src/models/furniture.entity";
import { Repository } from "typeorm";

export class FurnitureService {
    constructor(@InjectRepository(Furniture) private repository: Repository<Furniture>) { }

    async create(body: Furniture) {
        try {
            const mobile = await this.repository.create(body);
            return {
                success: true,
                data: await this.repository.save(mobile)
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
            const mobile = await this.repository.findOne({where: {id}});
            return {
                success: true,
                data: mobile
            }
        } catch (error) {
            return {
                sucess: false,
                message: error.message
            }
        }
    }

    async update(id: number, body: Furniture) {
        const mobile = await this.repository.findOne({
            where: { id }
        })

        if (!mobile) {
            throw new NotFoundException(`Não foi encontrado nenhum móvel com id ${id}`);
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
        const mobile = await this.repository.findOne({
            where: { id }
        })

        if (!mobile) {
            throw new NotFoundException(`Não foi encontrado nenhum móvel com id ${id}`);
        }

        await this.repository.delete(id)

        return {
            success: true,
            data: {
                message: `Móvel com id ${id} removido com sucesso`
            }
        }
    }
}