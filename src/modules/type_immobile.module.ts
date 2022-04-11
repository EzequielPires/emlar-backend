import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeImmobileController } from "src/controllers/type_immobile.controller";
import { TypeImmobile } from "src/models/type_immobile.entity";
import { TypeImmobileService } from "src/services/type_immobile .service";

@Module({
    imports: [TypeOrmModule.forFeature([TypeImmobile])],
    controllers: [TypeImmobileController],
    providers: [TypeImmobileService],
    exports: [],
}) export class TypeImmobileModule {}