import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { mockProductProvider } from './utils/product-repository.mock';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [mockProductProvider, ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
