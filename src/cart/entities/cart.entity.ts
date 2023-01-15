import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CartItem } from './cart-item.entity';

@ObjectType()
@Entity()
export class Cart {
  @Field({ description: 'The id of the chart' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => [CartItem], { description: 'The items in the cart' })
  @Column({ type: 'simple-json' })
  items: CartItem[];
}
