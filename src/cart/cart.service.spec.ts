import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './cart.service';
import { mockCartProvider, mockUUID } from './utils/cart-repository.mock';

describe('CartService', () => {
  let service: CartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [mockCartProvider, CartService],
    }).compile();

    service = module.get<CartService>(CartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a cart', async () => {
      const mockItem = { product: '1', quantity: 2 };
      const cart = await service.create(mockItem);
      expect(cart).toEqual(
        expect.objectContaining({
          id: mockUUID,
          items: expect.arrayContaining([expect.objectContaining(mockItem)]),
        }),
      );
    });
  });

  describe('update', () => {
    it('should update a cart', async () => {
      const mockItem = { product: '1', quantity: 2 };
      const cart = await service.update(mockUUID, mockItem);
      expect(cart).toEqual(
        expect.objectContaining({
          id: mockUUID,
          items: expect.arrayContaining([expect.objectContaining(mockItem)]),
        }),
      );
    });
  });

  describe('addToCart', () => {
    it('should create a cart if no cartId is provided', async () => {
      const mockItem = { product: '1', quantity: 2 };
      const cart = await service.addToCart(mockItem);
      expect(cart).toEqual(
        expect.objectContaining({
          id: mockUUID,
          items: expect.arrayContaining([expect.objectContaining(mockItem)]),
        }),
      );
    });

    it('should update a cart if a cartId is provided', async () => {
      const mockId = '91ce8c5b-8536-40bc-8f3f-019a0577c648';
      const mockItem = { product: '1', quantity: 2 };
      const cart = await service.addToCart(mockItem, mockId);
      expect(cart).toEqual(
        expect.objectContaining({
          id: mockId,
          items: expect.arrayContaining([expect.objectContaining(mockItem)]),
        }),
      );
    });
  });
});
