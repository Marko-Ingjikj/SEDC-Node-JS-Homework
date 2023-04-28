import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Zookeeper } from './interfaces/zookeeper';
import { PinoLogger } from 'nestjs-pino';
import { ZookeeperQueryDto } from './dtos/zookeeper-query.dto';
import {
  ZookeeperCreateDto,
  ZookeeperResponseDto,
  ZookeeperUpdateDto,
} from './dtos/zookeeper.dto';
import { AnimalUpdateDto } from 'src/animal/dtos/animal.dto';

@Injectable()
export class ZookeeperService {
  constructor(
    @Inject('ZOOKEEPER_MODEL') private zookeeperModel: Model<Zookeeper>,
    private readonly logger: PinoLogger,
  ) {}

  getZookeepers(query: ZookeeperQueryDto): Promise<ZookeeperResponseDto[]> {
    this.logger.info('getZookeepers called');

    return this.zookeeperModel
      .find({
        location: { $regex: query?.location ?? '', $options: 'i' },
      })
      .limit(query.age);
  }

  getZookeeperById(id: string): Promise<ZookeeperResponseDto> {
    return this.zookeeperModel.findById(id);
  }

  createZookeeper(
    zookeeper: ZookeeperCreateDto,
  ): Promise<ZookeeperResponseDto> {
    return this.zookeeperModel.create(zookeeper);
  }

  async updateZookeeper(id: string, updateData: ZookeeperUpdateDto) {
    const zookeeper = await this.getZookeeperById(id);

    if (!zookeeper) {
      this.logger.error(`Zookeeper with id: ${id} not found`);
      throw new NotFoundException(`Zookeeper with id: ${id} not found`);
    }

    return this.zookeeperModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
  }
}
