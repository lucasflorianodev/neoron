import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightService } from './flight/flight.service';
import { FlightController } from './flight/flight.controller';
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
      synchronize: true,
    }),
    FlightModule,
  ],
})
export class AppModule {}