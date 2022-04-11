import { InjectRepository } from "@nestjs/typeorm";
import { Address } from "src/models/adress.entity";
import { Repository } from "typeorm";

export class AddressService {
    constructor(@InjectRepository(Address) private repository: Repository<Address>) { }

    async create(body) {
        try {
            const address = await this.repository.create(body);
            return {
                success: true,
                data: await this.repository.save(address)
            };
        } catch (error) {
            return {
                sucess: false,
                message: error.message
            }
        }
    }

    async findOne(id) {
        try {
            const address = await this.repository.findOne({relations: ['immobile'],where: {id}});
            return {
                success: true,
                data: address
            }
        } catch (error) {
            return {
                sucess: false,
                message: error.message
            }
        }
    }
}