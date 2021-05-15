import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Posts } from './Post';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
  })
  name: string;

  @ManyToOne(() => Posts, post => post.comments)
  post: Posts;

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;
}
