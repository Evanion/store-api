import { InputType, Field, ID, Int } from '@nestjs/graphql';

@InputType()
export class AddCartItemDto {
  @Field(() => ID, { description: 'Product ID' })
  product: string;

  @Field(() => Int)
  quantity: number;
}
