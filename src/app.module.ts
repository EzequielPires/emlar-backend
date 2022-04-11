import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth.module';
import { ImmobileModule } from './modules/immobile.module';
import { TypeImmobileModule } from './modules/type_immobile.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, AuthModule, TypeImmobileModule, ImmobileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
