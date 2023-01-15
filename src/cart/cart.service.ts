import { Injectable } from '@nestjs/common';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
  ) {}

  /**
   * Create a new cart
   * @param addToCart Item to add to cart
   */
  create(addToCart: AddToCartDto) {
    const cart = this.cartRepository.create({ items: [addToCart] });
    return this.cartRepository.save(cart);
  }

  /**
   * Update an existing cart
   * @param cartId The id of the cart to update
   * @param updateCartItemDto Item to update
   * @returns new cart state
   */
  async update(cartId: string, updateCartItemDto: UpdateCartItemDto) {
    const cart = await this.cartRepository.findOneBy({ id: cartId });
    let updated = false;
    cart.items.map((item) => {
      if (item.product === updateCartItemDto.product) {
        updated = true;
        return updateCartItemDto;
      }
      return item;
    });
    if (!updated) cart.items.push(updateCartItemDto);
    return this.cartRepository.update(cartId, cart);
  }

  addToCart(addToCart: AddToCartDto, cartId?: string) {
    if (cartId) return this.update(cartId, addToCart);
    return this.create(addToCart);
  }

  findAll() {
    return this.cartRepository.find();
  }

  findOne(id: string) {
    return this.cartRepository.findOneBy({ id });
  }

  remove(id: string) {
    return this.cartRepository.delete(id);
  }
}
