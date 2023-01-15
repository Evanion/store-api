import { AddToCartDto } from './add-to-cart.dto';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateCartItemDto extends AddToCartDto {}
