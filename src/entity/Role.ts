import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './User';

@Entity({ name: 'roles' })
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 30,
    unique: true,
  })
  name: string;

  @ManyToMany(type => User, user => user.roles)
  users: User[];
  // , {
  //   cascade: false,
  // })
}
