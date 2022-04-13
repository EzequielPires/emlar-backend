import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ImmovableRelationship } from "src/models/immovable_relationship.entity";
import { ImmovableRelationshipSevice } from "src/services/immovable_relationship.service";

@Controller('immovable-relationship')
export class ImmovableRelationshipController {
    constructor(private readonly service: ImmovableRelationshipSevice) {}

    @Post('new')
    create(@Body() body: ImmovableRelationship) {
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
    @Put('edit/:id')
    edit(@Param('id') id: number, @Body() body: ImmovableRelationship) {
        return this.service.update(id, body);
    }

    @Delete('remove/:id')
    delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}