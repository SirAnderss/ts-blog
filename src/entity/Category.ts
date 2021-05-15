import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from './Post';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 30,
    unique: true,
  })
  name: string;

  @OneToMany(() => Post, posts => posts.category)
  posts: Post[];
}
