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
});
