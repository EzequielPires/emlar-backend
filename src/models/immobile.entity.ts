import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./adress.entity";
import { TypeImmobile } from "./type_immobile.entity";
import { User } from "./user.entity";

@Entity()
export class Immobile {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => User, user => user.immobiles)
    user: User;

    @ManyToOne(() => TypeImmobile, type => type.immobiles)
    type: TypeImmobile;

    @Column()
    number_rooms: number;

    @Column()
    number_suites: number;
    
    @Column()
    number_bathrooms: number;
   
    @Column()
    number_garages: number;
    
    @Column()
    area: number;

    @Column()
    roof: boolean;

    @Column()
    pet: boolean;

    @Column()
    pool: boolean;

    @Column()
    concierge_operation: string;

    @Column()
    immobile_state: string;

    @Column()
    key_type: string;

    @Column()
    immovable_relationship: string;

    @Column()
    price: string;

    @Column({
        nullable: true,
    })
    iptu: boolean;

    @Column({
        nullable: true,
    })
    iptu_paid: boolean;

    @Column({
        nullable: true,
    })
    iptu_price: string;

    @OneToOne(() => Address, address => address.immobile)
    address: Address;
}