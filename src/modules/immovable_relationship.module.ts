import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ImmovableRelationshipController } from "src/controllers/immovable_relationship.controller";
import { ImmovableRelationship } from "src/models/immovable_relationship.entity";
import { ImmovableRelationshipSevice } from "src/services/immovable_relationship.service";

@Module({
    imports: [TypeOrmModule.forFeature([ImmovableRelationship])],
    controllers: [ImmovableRelationshipController],
    providers: [ImmovableRelationshipSevice]
})
export class ImmovableRelationshipModule {}