import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Key } from "src/models/key.entity";
import { Repository } from "typeorm";

export class KeyService {
    constructor(@InjectRepository(Key) private repository: Repository<Key>) { }

    async create(body: Key) {
        try {
            const key = await this.repository.create(body);
            return {
                success: true,
                data: await this.repository.save(key)
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
            const key = await this.repository.findOne({where: {id}});
            return {
                success: true,
                data: key
            }
        } catch (error) {
            return {
                sucess: false,
                message: error.message
            }
        }
    }

    async update(id: number, body: Key) {
        const key = await this.repository.findOne({
            where: { id }
        })

        if (!key) {
            throw new NotFoundException(`Não foi encontrado nenhum tipo de chave com id ${id}`);
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
        const key = await this.repository.findOne({
            where: { id }
        })

        if (!key) {
            throw new NotFoundException(`Não foi encontrado nenhum tipo de chave com id ${id}`);
        }

        await this.repository.delete(id)

        return {
            success: true,
            data: {
                message: `chave com id ${id} removido com sucesso`
            }
        }
    }
}