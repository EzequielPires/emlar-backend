import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Concierge } from "src/models/concierge.entity";
import { ConciergeService } from "src/services/concierge.service";

@Controller('concierge')
export class ConciergeController {
    constructor(private readonly service: ConciergeService) {}

    @Post('new')
    create(@Body() body: Concierge) {
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
    edit(@Param('id') id: number, @Body() body: Concierge) {
        return this.service.update(id, body);
    }

    @Delete('remove/:id')
    delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}