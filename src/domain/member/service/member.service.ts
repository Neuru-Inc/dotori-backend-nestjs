import { Injectable } from '@nestjs/common';
import { Member } from '../entities/member.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from '../entities/profile.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}
}
