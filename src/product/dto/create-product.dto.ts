import { InputType, Int, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateProductDto {
  @ApiProperty({ example: 'Product 1', description: 'The name of the product' })
  @Field(() => String, { description: 'The name of the product' })
  name: string;

  @ApiProperty({ example: 10, description: 'The price of the product' })
  @Field(() => Int, { description: 'The price of the product in cents' })
  price: number;

  @ApiProperty({
    example: 'This is a product',
    description: 'The description of the product',
    required: false,
    nullable: true,
  })
  @Field(() => String, {
    description: 'The description of the product',
    nullable: true,
  })
  description?: string;

  @ApiProperty({
    example: 'https://example.com/image.png',
    description: 'The image of the product',
    required: false,
    nullable: true,
  })
  @Field(() => String, {
    description: 'The image of the product',
    nullable: true,
  })
  image?: string;
}
