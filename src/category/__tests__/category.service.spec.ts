import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from '../category.service';
import { CategoryEntity } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { categoryMock } from '../__mocks__/category.mocks';
import { NotFoundException } from '@nestjs/common';
import { createCategoryMock } from '../__mocks__/create-category.mocks';

describe('CategoryService', () => {
  let service: CategoryService;
  let categoryRepository: Repository<CategoryEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryService, {
        provide: getRepositoryToken(CategoryEntity),
        useValue: {
          findOne: jest.fn().mockResolvedValue(categoryMock),
          find: jest.fn().mockResolvedValue([categoryMock]),
          save: jest.fn().mockResolvedValue(categoryMock),
        },
      }],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
    categoryRepository = module.get<Repository<CategoryEntity>>(getRepositoryToken(CategoryEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(categoryRepository).toBeDefined();
  });

  it('should return list category', async () => {
    const categories = await service.findAllCategories();
    expect(categories).toEqual([categoryMock]);
  });
  
  it('should return error in list category empty', async () => {
    jest.spyOn(categoryRepository, 'find').mockResolvedValueOnce([]);
    expect(service.findAllCategories()).rejects.toThrow();
  });
  
  it('should return error in list category exception', async () => {
    jest.spyOn(categoryRepository, 'find').mockRejectedValueOnce(new Error());
    expect(service.findAllCategories()).rejects.toThrow();
  });
  
  it('should return error if exist category name', async () => {
    expect(service.createCategory(createCategoryMock)).rejects.toThrow();
  });

  it('should return category after save', async () => {
    jest.spyOn(categoryRepository, 'findOne').mockRejectedValueOnce(null);

    const categories = await service.createCategory(createCategoryMock);
    expect(categories).toEqual(categoryMock);
  });
  
  it('should return error in exception', async () => {
    jest.spyOn(categoryRepository, 'save').mockRejectedValueOnce(new Error());
    expect(service.createCategory(createCategoryMock)).rejects.toThrow();
  });

  it('should return category in find By Name', async () => {
    const categories = await service.findCategoryByName(categoryMock.name);
    expect(categories).toEqual(categoryMock);
  });
  
  it('should return error if category find By Name empty', async () => {
    jest.spyOn(categoryRepository, 'findOne').mockResolvedValueOnce(null);
    expect(service.findCategoryByName(categoryMock.name)).rejects.toThrow();
  });


});
