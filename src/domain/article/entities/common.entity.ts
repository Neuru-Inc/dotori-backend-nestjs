import { Article } from './article.entity';
import { ChildEntity } from 'typeorm';

@ChildEntity('common')
export class Common extends Article {}
