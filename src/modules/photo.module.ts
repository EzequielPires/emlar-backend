import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PhotoController } from "src/controllers/photo.controller";
import { Photo } from "src/models/photo.entity";
import { PhotoService } from "src/services/photo.service";

@Module({
    imports: [TypeOrmModule.forFeature([Photo])],
    controllers: [PhotoController],
    providers: [PhotoService],
})
export class PhotoModule {}