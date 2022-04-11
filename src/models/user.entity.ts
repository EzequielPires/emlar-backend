import { hashSync } from "bcrypt";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Immobile } from "./immobile.entity";

@Entity()
@Unique(["email"])
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    password: string;

    @OneToMany(() => Immobile, immobile => immobile.user)
    immobiles: Immobile[];

    @BeforeInsert()
    hashPassword() {
      this.password = hashSync(this.password, 10);
    }
}