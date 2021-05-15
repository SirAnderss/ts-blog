import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tags' })
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 30,
    unique: true,
  })
  name: string;
}
