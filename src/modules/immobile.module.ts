import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ImmobileController } from "src/controllers/immobile.controller";
import { Immobile } from "src/models/immobile.entity";
import { ImmobileService } from "src/services/immobile.service";

@Module({
    imports: [TypeOrmModule.forFeature([Immobile])],
    controllers: [ImmobileController],
    providers: [ImmobileService]
}) export class ImmobileModule {}