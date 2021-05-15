import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { Post } from './Post';
import { Role } from './Role';
import bcrypt from 'bcryptjs';
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password?: string;

  @Column()
  avatar: string;

  @OneToMany(() => Post, posts => posts.user)
  posts: Post[];

  @ManyToMany(type => Role, role => role.users, {
    cascade: true,
  })
  @JoinTable()
  roles: Role[];

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  // @AfterLoad()
  // private loadPassword() {
  //   console.log(
  //     Object.defineProperty(this, '_loadedPassword', {
  //       value: this.password,
  //       writable: false,
  //       configurable: true,
  //       enumerable: false,
  //     })
  //   );

  //   Object.defineProperty(this, '_loadedPassword', {
  //     value: this.password,
  //     writable: false,
  //     configurable: true,
  //     enumerable: false,
  //   });
  // }

  // @BeforeInsert()
  // @BeforeUpdate()
  // private async hashPassword() {
  //   const loadedPassword = Object.getOwnPropertyDescriptor(
  //     this,
  //     '_loadedPassword'
  //   )?.value;
  //   if (this.password && this.password !== loadedPassword) {
  //     this.password = await bcrypt.hash(this.password, 10);
  //   }
  // }
}
