import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { get } from "http";
import { AddressService } from "src/services/address.service";

@Controller('address')
export class AddressController {
    constructor(private readonly service: AddressService) {}

    @Post('/new')
    create(@Body() body) {
        return this.service.create(body);
    }

    @Put('/update')
    update(@Body() body) {
        return this.service.create(body);
    }

    @Get(':id')
    findOnde(@Param('id') id) {
        return this.service.findOne(id);
    }
    @Get('/zipcode/:cep')
    findZpicode(@Param('cep') cep) {
        return this.service.findZpicode(cep);
    }
}