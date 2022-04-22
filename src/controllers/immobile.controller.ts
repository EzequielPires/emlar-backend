import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { FindImmobilesQueryDto } from "src/dtos/find-immobiles-query.dto";
import { Immobile } from "src/models/immobile.entity";
import { ImmobileService } from "src/services/immobile.service";

@Controller('immobile')
export class ImmobileController {
    constructor(private readonly service: ImmobileService) {}

    @Post('new')
    create(@Body() body: Immobile) {
        return this.service.create(body);
    }
    @Get()
    findAll() {
        return this.service.findAll();
    }
    @Get('/list')
    findImmobiles(@Query() queryDto: FindImmobilesQueryDto) {
        return this.service.findImmobiles(queryDto);
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