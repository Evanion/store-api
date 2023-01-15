import { plainToClass } from 'class-transformer';
import { Cart } from '../entities/cart.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

export const mockUUID = '00000000-0000-0000-0000-000000000000';

export const mockCartRepository = {
  findOne: jest.fn((entity) => entity),
  findOneBy: jest.fn(({ id }) =>
    plainToClass(Cart, {
      id,
      items: [
        {
          product: '00000000-0000-0000-0000-000000000000',
          quantity: 42,
        },
      ],
    }),
  ),
  create: jest.fn((entity) => plainToClass(Cart, { id: mockUUID, ...entity })),
  save: jest.fn((entity) => plainToClass(Cart, entity)),
  update: jest.fn((id, entity) => plainToClass(Cart, { ...entity, id })),
};

export const mockCartProvider = {
  provide: getRepositoryToken(Cart),
  useValue: mockCartRepository,
};
