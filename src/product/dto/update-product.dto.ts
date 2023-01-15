import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProductDto extends PartialType(CreateProductDto) {
  @Field(() => Int)
  id: number;
}
