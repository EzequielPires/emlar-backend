import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Furniture {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;
}