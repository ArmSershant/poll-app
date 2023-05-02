/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Variant } from './Variant';
@Entity({ name: 'polls' })
export class Poll {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column({ default: false })
  active: boolean;

  @OneToMany(() => Variant, (variant) => variant.poll)
  options: Variant[];
}
