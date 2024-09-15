import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from './flight/flight.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
  ) {}

  // Create
  async createFlight(flightData: Partial<Flight>): Promise<Flight> {
    const flight = this.flightRepository.create(flightData);
    return this.flightRepository.save(flight);
  }

  // Read all
  async findAllFlights(): Promise<Flight[]> {
    return this.flightRepository.find();
  }

  // Read one
  async findFlightById(id: number): Promise<Flight> {
    const flight = await this.flightRepository.findOne({ where: { id } });
    if (!flight) {
      throw new NotFoundException(`O voo de ID ${id} não foi encontrado, tente novamente.`);
    }
    return flight;
  }

  // Update
  async updateFlight(id: number, flightData: Partial<Flight>): Promise<Flight> {
    await this.flightRepository.update(id, flightData);
    return this.findFlightById(id);
  }

  // Delete
  async deleteFlight(id: number): Promise<void> {
    const result = await this.flightRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Voo com o ID ${id} não foi encontrado, tente novamente.`);
    }
  }
}
