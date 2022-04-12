import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FurnitureController } from "src/controllers/furniture.controller";
import { Furniture } from "src/models/furniture.entity";
import { FurnitureService } from "src/services/furniture.service";

@Module({
    imports: [TypeOrmModule.forFeature([Furniture])],
    controllers: [FurnitureController],
    providers: [FurnitureService]
}) export class FurnitureModule {}