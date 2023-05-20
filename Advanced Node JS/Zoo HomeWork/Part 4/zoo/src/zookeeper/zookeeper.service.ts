import { Injectable, NotFoundException } from '@nestjs/common';
import { Zookeeper } from './zookeeper.entity';
import { MoreThan, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ZookeeperCreateDto } from './dtos/zookeeper.dto';
import { ZookeeperQueryDto } from './dtos/zookeeper-query.dto';

@Injectable()
export class ZookeeperService {
  constructor(
    @InjectRepository(Zookeeper)
    private readonly zookeeperRepository: Repository<Zookeeper>,
  ) {}

  getZookeepers(query: ZookeeperQueryDto) {
    const ageQuery: any = {};

    if (query.age) {
      ageQuery.age = MoreThan(query.age);
    }

    return this.zookeeperRepository.find({
      where: {
        age: ageQuery.age,
        location: query.location,
        isActive: query.isActive,
      },
    });
  }

  createZookeeper(zookeeper: ZookeeperCreateDto) {
    return this.zookeeperRepository.save(zookeeper);
  }

  async updateZookeeper(id: string, updateData: ZookeeperCreateDto) {
    let zookeeper = await this.zookeeperRepository.findOneBy({ id });

    Object.assign(zookeeper, updateData);

    const response = await this.zookeeperRepository.save(zookeeper);

    return response;
  }

  deleteZookeper(id: string) {
    return this.zookeeperRepository.softDelete(id);
  }
}
