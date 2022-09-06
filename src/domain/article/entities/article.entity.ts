import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  TableInheritance,
} from 'typeorm';
import { TimeExtend } from '../../../global/entities/time-extend.entity';
import { Product } from '../../product/entities/product.entity';
import { Member } from '../../member/entities/member.entity';

@Entity('article')
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export abstract class Article extends TimeExtend {
  @PrimaryColumn({ name: 'article_uuid', type: 'uuid', generated: 'uuid' })
  uuid: string;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'sub_title' })
  subTitle: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'content' })
  content: string;

  @JoinColumn({ name: 'editor_member_id' })
  @ManyToOne(() => Member, {})
  editor: Member;

  @JoinColumn({ name: 'product_uuid' })
  @ManyToOne(() => Product, { nullable: true })
  product: Product;
}
