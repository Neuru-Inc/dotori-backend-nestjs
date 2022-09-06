import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { MemberRole } from '../enum/member-role.enum';
import { Profile } from './profile.entity';

@Entity('member')
export class Member {
  @PrimaryColumn({ name: 'member_uuid', generated: 'uuid', type: 'uuid' })
  uuid: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password', nullable: true })
  password?: string;

  @Column({
    name: 'role',
    type: 'enum',
    enum: MemberRole,
    default: MemberRole.COLLECTOR,
  })
  role: MemberRole;

  @Column({ name: 'is_verified', default: false })
  isVerified: boolean;

  @OneToOne(() => Profile, (profile) => profile.member, { cascade: true })
  profile: Profile;
}
