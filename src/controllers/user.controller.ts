import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post } from "@nestjs/common";
import { User } from "src/models/user.entity";
import { UserService } from "src/services/user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() body: User) {
        return this.userService.create(body);
    }
    @Get()
    findAll() {
        return this.userService.findAll();
    }
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return id
    }
    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe) id: string) {
        return id
    }
}