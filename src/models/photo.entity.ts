import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Immobile } from "./immobile.entity";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    fieldname: string;

    @Column()
    originalname: string;

    @Column()
    mimetype: string;

    @Column()
    destination: string;

    @Column()
    filename: string;

    @Column()
    path: string;

    @Column()
    size: number;

    @ManyToOne(() => Immobile, immobile => immobile.photos, {onDelete: "CASCADE"})
    immobile: Immobile;
}