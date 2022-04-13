import { InjectRepository } from "@nestjs/typeorm";
import { Photo } from "src/models/photo.entity";
import { Repository } from "typeorm";

export class PhotoService {
    constructor(@InjectRepository(Photo) private photoModel: Repository<Photo>) {}
    async uploadFile(file: Express.Multer.File, id) {
        const image = await this.photoModel.save({
            fieldname: file.fieldname,
            originalname: file.originalname,
            mimetype: file.mimetype,
            destination: file.destination,
            filename: file.filename,
            path: file.path,
            size: file.size,
            immobile: id
        });
        return {data: image}
    }

    async view(path, res) {
        return res.sendFile(path, { root: './storage' }); 
    }

    async delete(id: string) {
        let photo = await this.photoModel.findOne({
            where: {id}
        });
        if(!photo) {
            throw new Error('PhotoId does not exist');
        }
        await this.photoModel.delete({id: id})

        return {data: {message: "removed"}}
    }
}