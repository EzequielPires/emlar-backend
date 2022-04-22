import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./adress.entity";
import { Concierge } from "./concierge.entity";
import { Furniture } from "./furniture.entity";
import { ImmovableRelationship } from "./immovable_relationship.entity";
import { Key } from "./key.entity";
import { Photo } from "./photo.entity";
import { StateImmobile } from "./state_immobile.entity";
import { TypeImmobile } from "./type_immobile.entity";
import { User } from "./user.entity";

@Entity()
export class Immobile {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => User, user => user.immobiles, {eager: true})
    user: User;

    @ManyToOne(() => TypeImmobile, type => type.immobiles, {eager: true})
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

    @ManyToMany(() => Furniture, furnitures => furnitures.immobiles, {eager: true})
    furnitures: Furniture[];

    @ManyToOne(() => Concierge, concierge_operation => concierge_operation.immobiles)
    concierge_operation: Concierge;

    @ManyToOne(() => StateImmobile, immobile_state => immobile_state.immobiles)
    immobile_state: StateImmobile;

    @ManyToOne(() => Key, key => key.immobiles)
    key_type: Key;

    @ManyToOne(() => ImmovableRelationship, immovable_relationship => immovable_relationship.immobiles)
    immovable_relationship: ImmovableRelationship;

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

    @OneToMany(() => Photo, photo => photo.immobile)
    photos: Photo[];
}