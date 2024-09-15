import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightModule } from './flight/flight.module';
import { AppController } from './app.controller';
import { FlightService } from './flight/flight.service';
import { Flight } from './flight/flight.entity';

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
    TypeOrmModule.forFeature([Flight]), FlightModule,
  ],
  controllers: [AppController],
  providers: [FlightService],
})
export class AppModule {}