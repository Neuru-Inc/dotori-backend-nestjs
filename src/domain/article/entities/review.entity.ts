import { Article } from './article.entity';
import { ChildEntity } from 'typeorm';

@ChildEntity('review')
export class Review extends Article {}
