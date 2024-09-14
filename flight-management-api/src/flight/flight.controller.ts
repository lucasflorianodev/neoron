import { Controller, Post, Body, Get } from '@nestjs/common';
import { FlightService } from './flight.service';
import { Flight } from './flight.entity';

@Controller('flights')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post()
  createFlight(@Body() flightData: Partial<Flight>) {
    return this.flightService.createFlight(flightData);
  }

  @Get()
  findAll() {
    return this.flightService.findAll();
  }
}