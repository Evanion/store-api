import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @ApiProperty({
    example: '2046ef2a-eb16-4eb8-bd0c-06cd45cb12b8',
    description: 'The id of the product',
  })
  @Field(() => String, { description: 'The id of the product' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Product 1', description: 'The name of the product' })
  @Field(() => String, { description: 'The name of the product' })
  @Column()
  name: string;

  @ApiProperty({ example: 10, description: 'The price of the product' })
  @Field(() => Int, { description: 'The price of the product in cents' })
  @Column({ type: 'int' })
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
  @Column({ nullable: true })
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
  @Column({ nullable: true })
  image?: string;
}
