import { plainToClass } from 'class-transformer';
import { Product } from '../entities/product.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

export const mockUUID = '00000000-0000-0000-0000-000000000000';

export const mockProductRepository = {
  findOne: jest.fn((entity) => entity),
  create: jest.fn((entity) =>
    plainToClass(Product, { id: mockUUID, ...entity }),
  ),
  save: jest.fn((entity) => plainToClass(Product, entity)),
};

export const mockProductProvider = {
  provide: getRepositoryToken(Product),
  useValue: mockProductRepository,
};
