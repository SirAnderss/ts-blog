import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from './Category';
import { Comment } from './Comment';
import { Score } from './Score';
import { Tag } from './Tag';
import { User } from './User';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({
    type: 'text',
  })
  content: string;

  @ManyToOne(() => User, user => user.posts)
  user: User;

  @ManyToOne(() => Category, category => category.posts)
  category: Category;

  @OneToMany(() => Comment, comments => comments.post)
  comments: Comment[];

  @OneToMany(() => Score, scores => scores.post)
  scores: Score[];

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;
}
