import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StateImmobile {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;
}