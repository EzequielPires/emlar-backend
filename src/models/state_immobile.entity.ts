import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Immobile } from "./immobile.entity";

@Entity()
export class StateImmobile {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Immobile, immobile => immobile.immobile_state)
    immobiles: Immobile[];
}