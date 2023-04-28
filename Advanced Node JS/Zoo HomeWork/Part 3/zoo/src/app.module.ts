import { Module } from '@nestjs/common';
import { ZookeeperModule } from './zookeeper/zookeeper.module';
import { AnimalModule } from './animal/animal.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule.forRoot(),
    ZookeeperModule,
    AnimalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
