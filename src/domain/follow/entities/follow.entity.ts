import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Member } from '../../member/entities/member.entity';

@Entity('follow')
export class Follow {
  @PrimaryGeneratedColumn({
    name: 'follow_id',
    type: 'bigint',
  })
  id: bigint;

  @ManyToOne(() => Member, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'prev_member_id' })
  prevMember: Member;

  @ManyToOne(() => Member, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'next_member_id' })
  nextMember: Member;
}
