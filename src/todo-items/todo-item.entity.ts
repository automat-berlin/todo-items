import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todo_items')
export class TodoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: false })
  isDone: boolean;
}