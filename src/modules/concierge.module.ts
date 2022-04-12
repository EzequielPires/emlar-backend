import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConciergeController } from "src/controllers/concierge.controller";
import { Concierge } from "src/models/concierge.entity";
import { ConciergeService } from "src/services/concierge.service";

@Module({
    imports: [TypeOrmModule.forFeature([Concierge])],
    controllers: [ConciergeController],
    providers: [ConciergeService]
}) export class ConciergeModule {}