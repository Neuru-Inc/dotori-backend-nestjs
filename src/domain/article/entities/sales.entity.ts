import { Article } from './article.entity';
import { ChildEntity } from 'typeorm';

@ChildEntity('sales')
export class Sales extends Article {}
