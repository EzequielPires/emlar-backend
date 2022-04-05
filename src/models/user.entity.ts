import { hashSync } from "bcrypt";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

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

    @BeforeInsert()
    hashPassword() {
      this.password = hashSync(this.password, 10);
    }
}