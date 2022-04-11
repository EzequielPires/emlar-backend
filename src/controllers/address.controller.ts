import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AddressService } from "src/services/address.service";

@Controller('address')
export class AddressController {
    constructor(private readonly service: AddressService) {}

    @Post('/new')
    create(@Body() body) {
        return this.service.create(body);
    }

    @Get(':id')
    findOnde(@Param('id') id) {
        return this.service.findOne(id);
    }
}