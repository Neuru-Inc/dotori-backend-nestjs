import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { ProcessStep } from '../enum/process-step.enum';
import { TimeExtend } from '../../../global/entities/time-extend.entity';
import { Product } from '../../product/entities/product.entity';
import { Member } from '../../member/entities/member.entity';

@Entity('orders')
export class Order extends TimeExtend {
  @PrimaryColumn({ name: 'order_uuid', type: 'uuid', generated: 'uuid' })
  uuid: bigint;

  @Column({
    name: 'process',
    type: 'enum',
    enum: ProcessStep,
    default: ProcessStep.ONGOING,
  })
  precess: ProcessStep;

  @JoinColumn({ name: 'product_id' })
  @ManyToOne(() => Product, {})
  product: Product;

  @JoinColumn({ name: 'buyer_member_id' })
  @ManyToOne(() => Member, {})
  buyer: Member;

  @JoinColumn({ name: 'seller_member_id' })
  @ManyToOne(() => Member, {})
  seller: Member;
}
