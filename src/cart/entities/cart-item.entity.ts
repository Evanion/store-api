import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CartItem {
  @Field(() => ID, { description: 'Product ID' })
  product: string;

  @Field(() => Int)
  quantity: number;
}
