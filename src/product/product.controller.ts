import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Product } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @ApiResponse({
    status: 200,
    description: 'The found Products',
    type: [Product],
  })
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @ApiResponse({ status: 200, description: 'The found Product', type: Product })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'The updated Product',
    type: Product,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @ApiResponse({
    status: 200,
    description: 'The number of removed products',
    type: Number,
  })
  @Delete(':id')
  remove(@Param('id') id: string): number {
    return this.productService.remove(+id);
  }
}
