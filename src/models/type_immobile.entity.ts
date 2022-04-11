import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Immobile } from "./immobile.entity";

@Entity()
export class TypeImmobile {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Immobile, immobile => immobile.type)
    immobiles: Immobile[];
}