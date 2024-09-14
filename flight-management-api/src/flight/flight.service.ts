import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from './flight.entity';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>,
  ) {}

  async createFlight(flightData: Partial<Flight>): Promise<Flight> {
    flightData.code = this.generateRandomCode();
    const flight = this.flightRepository.create(flightData);
    return this.flightRepository.save(flight);
  }

  async findAll(): Promise<Flight[]> {
    return this.flightRepository.find();
  }

  private generateRandomCode(): string {
    return Math.random().toString(36).substr(2, 5).toUpperCase();
  }
}