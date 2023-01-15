import { Injectable } from '@nestjs/common';
import { AddCartItemDto } from './dto/add-cart-item.dto';
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
  async create(addItemDto: AddCartItemDto) {
    const cart = await this.cartRepository.create({ items: [addItemDto] });
    return this.cartRepository.save(cart);
  }

  findAll() {
    return this.cartRepository.find();
  }

  findOne(id: string) {
    return this.cartRepository.findOneBy({ id });
  }

  async update(cartId: string, updateCartItemDto: UpdateCartItemDto) {
    const cart = await this.cartRepository.findOneBy({ id: cartId });
    cart.items.map((item) =>
      item.product === updateCartItemDto.product ? updateCartItemDto : item,
    );
    return this.cartRepository.update(cartId, cart);
  }

  remove(id: string) {
    return this.cartRepository.delete(id);
  }
}
