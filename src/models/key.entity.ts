import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Key {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;
}