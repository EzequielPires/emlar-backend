import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Immobile } from "./immobile.entity";

@Entity()
export class ImmovableRelationship {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Immobile, immobile => immobile.immovable_relationship)
    immobiles: Immobile[];
}