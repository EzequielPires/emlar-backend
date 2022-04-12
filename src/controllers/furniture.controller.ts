import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Furniture } from "src/models/furniture.entity";
import { FurnitureService } from "src/services/furniture.service";

@Controller('furniture')
export class FurnitureController {
    constructor(private readonly service: FurnitureService) {}

    @Post('new')
    create(@Body() body: Furniture) {
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
    edit(@Param('id') id: number, @Body() body: Furniture) {
        return this.service.update(id, body);
    }

    @Delete('remove/:id')
    delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}