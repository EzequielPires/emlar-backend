import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Immobile } from "./immobile.entity";

@Entity()
export class Key {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Immobile, immobile => immobile.key_type)
    immobiles: Immobile[];
}