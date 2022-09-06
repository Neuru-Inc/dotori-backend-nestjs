import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  TableInheritance,
} from 'typeorm';
import { Member } from '../../member/entities/member.entity';
import { Article } from '../../article/entities/article.entity';
import { ProductTag } from '../../tag/entities/product-tag.entity';
import { ProductGenre } from '../../genre/entities/product-genre.entity';

@Entity('product')
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export abstract class Product extends BaseEntity {
  @PrimaryColumn({ name: 'product_id', type: 'uuid', generated: 'uuid' })
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'width' })
  width: number;

  @Column({ name: 'height' })
  height: number;

  @Column({ name: 'price' })
  price: number;

  @ManyToOne(() => Member, {})
  @JoinColumn({ name: 'editor_member_id' })
  editor: Member;

  @ManyToOne(() => Article, {})
  @JoinColumn({ name: 'sell_article_id' })
  sellArticle: Article;

  @OneToMany(() => ProductTag, (productTag) => productTag.product, {
    cascade: true,
  })
  tags: ProductTag[];

  @OneToMany(() => ProductGenre, (productGenre) => productGenre.product, {
    cascade: true,
  })
  genres: ProductGenre[];
}
