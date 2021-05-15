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
import { Categories } from './Category';
import { Comments } from './Comment';
import { Scores } from './Score';
import { Tags } from './Tag';
import { Users } from './User';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({
    type: 'text',
  })
  content: string;

  @ManyToOne(() => Users, user => user.posts)
  user: Users;

  @ManyToOne(() => Categories, category => category.posts)
  category: Categories;

  @OneToMany(() => Comments, comments => comments.post)
  comments: Comments[];

  @OneToMany(() => Scores, scores => scores.post)
  scores: Scores[];

  @ManyToMany(() => Tags)
  @JoinTable()
  tags: Tags[];

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;
}
