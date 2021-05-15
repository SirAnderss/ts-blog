import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Posts } from './Post';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 30,
    unique: true,
  })
  name: string;

  @OneToMany(() => Posts, posts => posts.category)
  posts: Posts[];
}
