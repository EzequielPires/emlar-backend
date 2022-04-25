import { Body, Controller, Delete, Get, Param, Post, Query, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { FindImmobilesQueryDto } from "src/dtos/find-immobiles-query.dto";
import { Immobile } from "src/models/immobile.entity";
import { ImmobileService } from "src/services/immobile.service";

@Controller('immobile')
export class ImmobileController {
    constructor(private readonly service: ImmobileService) {}

    @Post('new')
    @UseGuards(AuthGuard('jwt'))
    create(@Body() body: Immobile, @Req() req: any) {
        return this.service.create(body, req.user);
    }
    @Get('my-immobiles')
    @UseGuards(AuthGuard('jwt'))
    findAllUser(@Req() req: any) {
        return this.service.findAllUser(req.user);
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