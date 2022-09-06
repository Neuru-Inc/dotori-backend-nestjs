import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Member } from '../../member/entities/member.entity';
import { Article } from '../../article/entities/article.entity';

@Entity('heart')
export class Heart {
  @PrimaryGeneratedColumn({ name: 'heart_id' })
  id: bigint;

  @ManyToOne(() => Member, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'member_uuid' })
  member: Member;

  @ManyToOne(() => Article, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'article_id' })
  article: Article;
}
