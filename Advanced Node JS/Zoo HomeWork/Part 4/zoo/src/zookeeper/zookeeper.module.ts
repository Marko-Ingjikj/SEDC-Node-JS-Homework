import { Module } from '@nestjs/common';
import { ZookeeperController } from './zookeeper.controller';
import { ZookeeperService } from './zookeeper.service';
import { Zookeeper } from './zookeeper.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Zookeeper])],
  controllers: [ZookeeperController],
  providers: [ZookeeperService],
  exports: [ZookeeperService],
})
export class ZookeeperModule {}
