import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  code: string;

  @Column()
  origin: string;

  @Column()
  destination: string;

  @Column('timestamp')
  date: Date;
}