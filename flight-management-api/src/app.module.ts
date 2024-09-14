<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightModule } from './flight/flight.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'flight_user',
      password: '1502',
      database: 'flight_management',
      autoLoadEntities: true,
      synchronize: false,
    }),
    FlightModule,
  ],
})
=======
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightModule } from './flight/flight.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'flight_user',
      password: '1502',
      database: 'flight_management',
      autoLoadEntities: true,
      synchronize: false,
    }),
    FlightModule,
  ],
})
>>>>>>> c0087c5a82e10a2246e8190c9e93827421a2a0fe
export class AppModule {}