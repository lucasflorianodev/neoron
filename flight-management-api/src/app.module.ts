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
export class AppModule {}