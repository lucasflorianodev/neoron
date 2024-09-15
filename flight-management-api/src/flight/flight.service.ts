import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from './flight.entity';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>,
  ) {}
// Realização de CRUD na API //
  async createFlight(flightData: Partial<Flight>): Promise<Flight> {
    const flight = this.flightRepository.create(flightData);
    return this.flightRepository.save(flight);
  }

  async findAll(): Promise<Flight[]> {
    return this.flightRepository.find();
  }

  async findOne(id: number): Promise<Flight> {
    const flight = await this.flightRepository.findOneBy({ id });
    if (!flight) {
      throw new NotFoundException(`Voo de ID ${id} não encontrado, Verifique se o ID está correto e tente novamente.`);
    }
    return flight;
  }

  async update(id: number, flightData: Partial<Flight>): Promise<Flight> {
    await this.flightRepository.update(id, flightData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    const result = await this.flightRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Voo de ID ${id} não encontrado, Verifique se o ID está correto e tente novamente.`);
    }
  }
}