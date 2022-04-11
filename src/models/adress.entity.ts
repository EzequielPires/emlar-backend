import { Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Immobile } from "./immobile.entity";

@Entity()
export class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    zipcode: string;

    @Column()
    address: string;

    @Column()
    number: string;

    @Column()
    complement: string;

    @Column()
    walk: number;

    @OneToOne(() => Immobile, immobile => immobile.address, {nullable: false})
    @JoinColumn()
    immobile: Immobile;
}