import { Module } from '@nestjs/common';
import { ZookeeperModule } from './zookeeper/zookeeper.module';
import { AnimalModule } from './animal/animal.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ZookeeperModule,
    AnimalModule,
    AuthModule,
    UserModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
