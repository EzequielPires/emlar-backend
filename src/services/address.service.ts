import cep from 'cep-promise'
import { InjectRepository } from "@nestjs/typeorm";
import { Address } from "src/models/adress.entity";
import { Repository } from "typeorm";
import axios from 'axios';

export class AddressService {
    constructor(@InjectRepository(Address) private repository: Repository<Address>) { }

    async create(body) {
        try {
            const address = this.repository.create(body);
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

    async update(body) {
        try {
            const address = await this.repository.findOne({where: {immobile: body.immobile}});
            if(!address) {
                return {
                    sucess: false,
                    message: "Imvóvel não encontrado"
                }
            } else {
                await this.repository.update({immobile: body.immobile}, body);
            }
            return {
                success: true,
                data: await this.repository.findOne({where: {immobile: body.immobile}})
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

    async findZpicode(data) {
        try {
            const address = await axios.get(`https://viacep.com.br/ws/${data}/json/`).then(res => res.data);
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