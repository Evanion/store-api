import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartResolver } from './cart.resolver';
import { CartController } from './cart.controller';

@Module({
  providers: [CartResolver, CartService],
  controllers: [CartController]
})
export class CartModule {}
