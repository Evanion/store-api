import { InputType, Field, ID, Int } from '@nestjs/graphql';
import { IsDefined, IsInt, IsPositive, IsUUID } from 'class-validator';

@InputType()
export class AddToCartDto {
  @IsUUID()
  @IsDefined()
  @Field(() => ID, { description: 'Product ID' })
  product: string;

  @IsInt()
  @IsPositive()
  @IsDefined()
  @Field(() => Int)
  quantity: number;
}
