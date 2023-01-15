import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CartService } from './cart.service';
import { Cart } from './entities/cart.entity';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@Resolver(() => Cart)
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  @Mutation(() => Cart)
  addToCart(
    @Args('addToCartDto') addToCartDto: AddToCartDto,
    @Args('id', { nullable: true }) id?: string,
  ) {
    return this.cartService.addToCart(addToCartDto, id);
  }

  @Query(() => Cart, { name: 'cart' })
  findOne(@Args('id') id: string) {
    return this.cartService.findOne(id);
  }

  @Mutation(() => Cart)
  updateCart(
    @Args('cartId') cartId: string,
    @Args('updateCartInput') updateCartDto: UpdateCartItemDto,
  ) {
    return this.cartService.update(cartId, updateCartDto);
  }

  @Mutation(() => Cart)
  removeCart(@Args('id') id: string) {
    return this.cartService.remove(id);
  }
}
