import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Immobile } from "./immobile.entity";

@Entity()
export class Furniture {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Immobile, immobiles => immobiles.furnitures)
    @JoinTable()
    immobiles: Immobile[];
}