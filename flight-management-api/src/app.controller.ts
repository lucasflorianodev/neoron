import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FlightService } from './flight/flight.service';
import { Flight } from './flight/flight.entity';

@Controller('flights')
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly flightService: FlightService) {}

  @Post()
  async create(@Body() flightData: Partial<Flight>): Promise<Flight> {
    return this.flightService.createFlight(flightData);
  }

  @Get()
  async findAll(): Promise<Flight[]> {
    return this.flightService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Flight> {
    return this.flightService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() flightData: Partial<Flight>,
  ): Promise<Flight> {
    return this.flightService.update(id, flightData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.flightService.delete(id);
  }
}