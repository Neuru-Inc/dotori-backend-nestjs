import { Module } from '@nestjs/common';
import { MemberService } from '../service/member.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from '../entities/member.entity';
import { Profile } from '../entities/profile.entity';
import { MemberController } from '../controller/member.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Member, Profile])],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
