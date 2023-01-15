import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cart } from './entities/cart.entity';

@ApiTags('cart')
@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  /**
   * Add an item to the cart, or update the quantity of an existing item
   * @param addItemDto The item to add or update
   * @param id If provided, update an existing cart
   * @returns
   */
  @ApiBody({
    type: AddToCartDto,
    examples: {
      'Add a new item to the cart': {
        value: {
          product: '515aa04a-9913-494e-a16d-cd2340a0042d',
          quantity: 1,
        },
      },
    },
  })
  @Post()
  create(@Body() addItemDto: AddToCartDto) {
    return this.cartService.addToCart(addItemDto);
  }

  @ApiResponse({
    status: 200,
    description: 'A specific cart',
    type: Cart,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(id);
  }

  @ApiResponse({
    status: 200,
    description: 'The updated Cart',
    type: Cart,
  })
  @ApiParam({
    name: 'id',
    type: String,
    example: '515aa04a-9913-494e-a16d-cd2340a0042d',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartItemDto) {
    return this.cartService.addToCart(updateCartDto, id);
  }

  @ApiResponse({
    status: 200,
    description: 'The number of removed carts',
    type: Number,
  })
  @ApiParam({
    name: 'id',
    type: String,
    example: '515aa04a-9913-494e-a16d-cd2340a0042d',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(id);
  }
}
