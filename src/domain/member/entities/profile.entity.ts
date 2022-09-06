import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Member } from './member.entity';
import { Sex } from '../enum/sex.enum';
import { TimeExtend } from '../../../global/entities/time-extend.entity';

@Entity('profile')
export class Profile extends TimeExtend {
  @PrimaryGeneratedColumn({ name: 'profile_id', type: 'bigint' })
  id: bigint;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'age', nullable: true })
  age?: number;

  @Column({ name: 'sex', enum: Sex, type: 'enum', nullable: true })
  sex?: Sex;

  @Column({ name: 'address', nullable: true })
  address?: string;

  @OneToOne(() => Member, (member) => member.profile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'member_uuid' })
  member: Member;
}
