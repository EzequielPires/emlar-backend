import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TypeImmobile } from "src/models/type_immobile.entity";
import { TypeImmobileService } from "src/services/type_immobile .service";

@Controller('type-immobile')
export class TypeImmobileController {
    constructor(private readonly service: TypeImmobileService) {}

    @Post('new')
    create(@Body() body: TypeImmobile) {
        return this.service.create(body);
    }
    @Get('list')
    findAll() {
        return this.service.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.service.findOne(id);
    }
    @Delete('remove/:id')
    delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}