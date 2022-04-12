import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './modules/address.module';
import { AuthModule } from './modules/auth.module';
import { ConciergeModule } from './modules/concierge.module';
import { FurnitureModule } from './modules/furniture.module';
import { ImmobileModule } from './modules/immobile.module';
import { KeyModule } from './modules/key.module';
import { StateImmobileModule } from './modules/state_immobile.module';
import { TypeImmobileModule } from './modules/type_immobile.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    UserModule, AuthModule, 
    TypeImmobileModule, 
    ImmobileModule, 
    AddressModule, 
    FurnitureModule, 
    ConciergeModule, 
    KeyModule, 
    StateImmobileModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
