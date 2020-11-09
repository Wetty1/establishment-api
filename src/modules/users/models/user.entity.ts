import { IsDefined } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsDefined()
  login: string;

  @Column()
  @IsDefined()
  name: string;

  @Column({ select: false })
  @IsDefined()
  password: string;

  @Column()
  @IsDefined()
  level: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
