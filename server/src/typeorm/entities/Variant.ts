/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Poll } from './Poll';

@Entity({ name: 'variants' })
export class Variant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  option: string;

  @Column({ default: 0 })
  voteCount: number;

  @Column({ default: false })
  voted: boolean;

  @ManyToOne(() => Poll, (poll) => poll.options)
  poll: Poll;
}
