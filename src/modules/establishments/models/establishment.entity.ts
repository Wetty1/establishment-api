import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { User } from 'modules/users/models/user.entity';

@Entity('establishments')
export class Establishments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userid: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'userid' })
  user: User;

  @Column()
  address: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  type: string;

  @Column({ nullable: true })
  coordinates: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
