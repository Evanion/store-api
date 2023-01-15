import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';

@ApiTags('product')
@Controller('products')
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
  @ApiQuery({
    name: 'limit',
    type: Number,
    description: 'The number of products to return',
    example: 5,
    required: false,
  })
  @ApiQuery({
    name: 'offset',
    type: Number,
    description: 'The number of products to skip (allows you to paginate)',
    example: 0,
    required: false,
  })
  @Get()
  findAll(@Query('limit') limit = 5, @Query('offset') offset = 0) {
    return this.productService.findAll(limit, offset);
  }

  @ApiResponse({ status: 200, description: 'The found Product', type: Product })
  @ApiParam({
    name: 'id',
    type: String,
    example: '515aa04a-9913-494e-a16d-cd2340a0042d',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @ApiResponse({
    status: 200,
    description: 'The updated Product',
    type: Product,
  })
  @ApiParam({
    name: 'id',
    type: String,
    example: '515aa04a-9913-494e-a16d-cd2340a0042d',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @ApiResponse({
    status: 200,
    description: 'The number of removed products',
    type: Number,
  })
  @ApiParam({
    name: 'id',
    type: String,
    example: '515aa04a-9913-494e-a16d-cd2340a0042d',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
