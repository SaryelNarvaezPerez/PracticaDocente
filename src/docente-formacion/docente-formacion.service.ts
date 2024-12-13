import { Injectable } from '@nestjs/common';
import { DocenteFormacion } from './entities/docente-formacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocenteFormacionDto } from './dto/create-docenteformacion.dto';
import { UpdateDocenteFormacionDto } from './dto/update-docenteformacion.dto';

@Injectable()
export class DocenteFormacionService {
    constructor(
        @InjectRepository(DocenteFormacion)
        private docenteRepository: Repository<DocenteFormacion>,
    ) {}
    
    async create(createDocenteformacionDto: CreateDocenteFormacionDto) {
        return await this.docenteRepository.save(createDocenteformacionDto)
    }
    
    async  findAll() {
        return await  this.docenteRepository.find()
    }
    
    async findOne(id: number) {
        return await this.docenteRepository.findOneBy({ id });
    }
    
    async update(id: number, updateDocenteformacionDto: UpdateDocenteFormacionDto) {
        const docente = await this.findOne(id); 
        Object.assign(docente, updateDocenteformacionDto);
        if (docente) {
            return this.docenteRepository.save(docente);
        }
    }  
    
    async remove(id: number) {
        await this.docenteRepository.delete(id);
    }
}
