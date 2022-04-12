import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { KeyController } from "src/controllers/key.controller";
import { Key } from "src/models/key.entity";
import { KeyService } from "src/services/key.service";

@Module({
    imports: [TypeOrmModule.forFeature([Key])],
    controllers: [KeyController],
    providers: [KeyService]
}) export class KeyModule {}