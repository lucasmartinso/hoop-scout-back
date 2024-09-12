import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  number: string;

  @Column()
  password: string;

  @Column()
  createdAt: Date;
}