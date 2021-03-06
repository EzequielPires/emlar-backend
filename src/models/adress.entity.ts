import { Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Immobile } from "./immobile.entity";

@Entity()
export class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    zipcode: string;

    @Column()
    locale: string;

    @Column({nullable: true})
    number: string;

    @Column()
    complement: string;

    @Column()
    city: string;

    @Column()
    uf: string;

    @OneToOne(() => Immobile, immobile => immobile.address, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn()
    immobile: Immobile;
}