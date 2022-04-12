import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StateImmobileController } from "src/controllers/state_immobile.controller";
import { StateImmobile } from "src/models/state_immobile.entity";
import { StateImmobileService } from "src/services/state_immobile.service";

@Module({
    imports: [TypeOrmModule.forFeature([StateImmobile])],
    controllers: [StateImmobileController],
    providers: [StateImmobileService]
}) export class StateImmobileModule {}