import { Injectable } from '@nestjs/common';
import { CreateGradoDto } from './dto/create-grado.dto';
import { UpdateGradoDto } from './dto/update-grado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Grado } from './entities/grado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GradoService {
  constructor(
    @InjectRepository(Grado)
    private gradoRepository: Repository<Grado>,
  ) {}

  async create(createGradoDto: CreateGradoDto) {
    return await this.gradoRepository.save(createGradoDto)
  }

  findAll() {
    return `This action returns all grado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grado`;
  }

  update(id: number, updateGradoDto: UpdateGradoDto) {
    return `This action updates a #${id} grado`;
  }

  remove(id: number) {
    return `This action removes a #${id} grado`;
  }
}
