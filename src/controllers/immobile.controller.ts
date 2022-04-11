import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Immobile } from "src/models/immobile.entity";
import { ImmobileService } from "src/services/immobile.service";

@Controller('immobile')
export class ImmobileController {
    constructor(private readonly service: ImmobileService) {}

    @Post('new')
    create(@Body() body: Immobile) {
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