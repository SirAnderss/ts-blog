import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Posts } from './Post';

@Entity()
export class Scores {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @ManyToOne(() => Posts, post => post.scores)
  post: Posts;
}
