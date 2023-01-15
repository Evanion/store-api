import { plainToClass } from 'class-transformer';
import { Cart } from '../entities/cart.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

export const mockUUID = '00000000-0000-0000-0000-000000000000';

export const mockCartRepository = {
  findOne: jest.fn((entity) => entity),
  create: jest.fn((entity) => plainToClass(Cart, { id: mockUUID, ...entity })),
  save: jest.fn((entity) => plainToClass(Cart, entity)),
};

export const mockCartProvider = {
  provide: getRepositoryToken(Cart),
  useValue: mockCartRepository,
};
