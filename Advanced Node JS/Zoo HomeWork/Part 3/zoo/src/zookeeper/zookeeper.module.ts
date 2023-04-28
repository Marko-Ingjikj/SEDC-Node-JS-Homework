import { Module } from '@nestjs/common';
import { ZookeeperController } from './zookeeper.controller';
import { ZookeeperService } from './zookeeper.service';
import { DatabaseModule } from 'src/database/database.module';
import { zookeeperProviders } from './zookeeper.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ZookeeperController],
  providers: [ZookeeperService, ...zookeeperProviders],
})
export class ZookeeperModule {}
