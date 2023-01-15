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
import { AddCartItemDto } from './dto/add-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cart } from './entities/cart.entity';

@ApiTags('cart')
@Controller({ version: '1', path: 'carts' })
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @Post(':id')
  create(@Body() addItemDto: AddCartItemDto, @Param('id') id?: string) {
    if (id) return this.cartService.update(id, addItemDto);

    return this.cartService.create(addItemDto);
  }

  @ApiResponse({
    status: 200,
    description: 'The found Carts',
    type: [Cart],
  })
  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @ApiResponse({ status: 200, description: 'The found Cart', type: Cart })
  @ApiParam({
    name: 'id',
    type: String,
    example: '515aa04a-9913-494e-a16d-cd2340a0042d',
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
    return this.cartService.update(id, updateCartDto);
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
