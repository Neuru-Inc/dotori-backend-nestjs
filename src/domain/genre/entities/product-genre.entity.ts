import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { Genre } from './genre.entity';

@Entity('product_genre')
export class ProductGenre {
  @PrimaryGeneratedColumn({ name: 'product_genre_id', type: 'bigint' })
  id: bigint;

  @JoinColumn({ name: 'product_id' })
  @ManyToOne(() => Product, (product) => product.genres, {
    onDelete: 'CASCADE',
  })
  product: Product;

  @JoinColumn({ name: 'genre_id' })
  @ManyToOne(() => Genre, {
    onDelete: 'CASCADE',
  })
  genre: Genre;
}
