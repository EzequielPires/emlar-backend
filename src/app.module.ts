import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
