import { Test, TestingModule } from '@nestjs/testing';
import { UserExhibitionsService } from './user-exhibitions.service';

describe('UserExhibitionsService', () => {
  let service: UserExhibitionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserExhibitionsService],
    }).compile();

    service = module.get<UserExhibitionsService>(UserExhibitionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
