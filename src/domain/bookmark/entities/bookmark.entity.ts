import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Member } from '../../member/entities/member.entity';
import { Article } from '../../article/entities/article.entity';

@Entity('bookmark')
export class BookMark {
  @PrimaryGeneratedColumn({ name: 'bookmark_id', type: 'bigint' })
  id: bigint;

  @ManyToOne(() => Member, { onDelete: 'CASCADE' })
  member: Member;

  @ManyToOne(() => Article, { onDelete: 'CASCADE' })
  article: Article;
}
