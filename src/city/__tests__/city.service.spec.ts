import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CityService } from '../city.service';
import { CityEntity } from '../entities/city.entity';
import { CacheService } from '../../cache/cache.service';
import { cityMock } from '../__mock__/city.mock';

describe('CityService', () => {
  let service: CityService;
  let cityRepository: Repository<CityEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CityService,
        {
          provide: CacheService,
          useValue: {
            getCache: jest.fn().mockResolvedValue([cityMock])
          },
        },
        {
          provide: getRepositoryToken(CityEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(cityMock),
          },
        },
      ],
    }).compile();

    service = module.get<CityService>(CityService);
    cityRepository = module.get<Repository<CityEntity>>(
      getRepositoryToken(CityEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(cityRepository).toBeDefined();
  });

  it('should return city in findCityById', async () => {
    const city = await service.findCityById(cityMock.id);
    expect(city).toEqual(cityMock);
  });
  
  it('should return error in findCityById', async () => {
    jest.spyOn(cityRepository, 'findOne').mockResolvedValueOnce(null);
    expect(
      service.findCityById(cityMock.id)
    ).rejects.toThrow()
  });
  
  it('should return cities in getAllCitiesByStateId', async () => {
    const cities = await service.getAllCitiesByStateId(cityMock.stateId);
    expect(cities).toEqual([cityMock]);
  });

});
