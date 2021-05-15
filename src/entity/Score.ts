import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Post } from './Post';

@Entity({ name: 'scores' })
export class Score {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @ManyToOne(() => Post, post => post.scores)
  post: Post;
}
