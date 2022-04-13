import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Immobile } from "./immobile.entity";

@Entity()
export class Concierge {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;
    @OneToMany(() => Immobile, immobile => immobile.concierge_operation)
    immobiles: Immobile[];
}