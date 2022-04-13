import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AddressModule } from './modules/address.module';
import { AuthModule } from './modules/auth.module';
import { ConciergeModule } from './modules/concierge.module';
import { FurnitureModule } from './modules/furniture.module';
import { ImmobileModule } from './modules/immobile.module';
import { ImmovableRelationshipModule } from './modules/immovable_relationship.module';
import { KeyModule } from './modules/key.module';
import { PhotoModule } from './modules/photo.module';
import { StateImmobileModule } from './modules/state_immobile.module';
import { TypeImmobileModule } from './modules/type_immobile.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    UserModule, AuthModule,
    TypeImmobileModule,
    ImmobileModule,
    AddressModule,
    FurnitureModule,
    ConciergeModule,
    KeyModule,
    StateImmobileModule,
    ImmovableRelationshipModule,
    PhotoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
