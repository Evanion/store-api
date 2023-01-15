import { AddCartItemDto } from './add-cart-item.dto';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCartItemDto extends PartialType(AddCartItemDto) {}
