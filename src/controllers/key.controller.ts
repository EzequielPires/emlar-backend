import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Key } from "src/models/key.entity";
import { KeyService } from "src/services/key.service";

@Controller('key')
export class KeyController {
    constructor(private readonly service: KeyService) {}

    @Post('new')
    create(@Body() body: Key) {
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
    edit(@Param('id') id: number, @Body() body: Key) {
        return this.service.update(id, body);
    }

    @Delete('remove/:id')
    delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}