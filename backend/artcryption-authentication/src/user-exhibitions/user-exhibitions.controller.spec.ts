import { Test, TestingModule } from '@nestjs/testing';
import { UserExhibitionsController } from './user-exhibitions.controller';
import { UserExhibitionsService } from './user-exhibitions.service';

describe('UserExhibitionsController', () => {
  let controller: UserExhibitionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserExhibitionsController],
      providers: [UserExhibitionsService],
    }).compile();

    controller = module.get<UserExhibitionsController>(UserExhibitionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
