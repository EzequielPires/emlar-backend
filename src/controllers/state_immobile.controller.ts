import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Key } from "src/models/key.entity";
import { KeyService } from "src/services/key.service";
import { StateImmobileService } from "src/services/state_immobile.service";

@Controller('state-immobile')
export class StateImmobileController {
    constructor(private readonly service: StateImmobileService) {}

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