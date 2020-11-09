import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstablishmentsModule } from './modules/establishments/establishments.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/user.module';

import ormConfig from '../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    EstablishmentsModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
