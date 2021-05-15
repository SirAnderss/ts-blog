import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Post } from './Post';

@Entity({ name: 'comments' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
  })
  name: string;

  @ManyToOne(() => Post, post => post.comments)
  post: Post;

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;
}
