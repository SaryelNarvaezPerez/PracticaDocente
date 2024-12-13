import { Body, Controller, Get, Post } from '@nestjs/common';
import { ActividadService } from './actividad.service';
import { Actividad } from './entities/actividad.entity';
import { ActividadDTO } from './dto/actividad.dto';

@Controller('actividad')
export class ActividadController {
    constructor(
        private readonly actividadService: ActividadService,
    ) { }

    @Get()
    async findAll(): Promise<Actividad[]> {
        return await this.actividadService.findAll();
    }

    @Get(':id')
    async findOne(id: number): Promise<Actividad> {
        return await this.actividadService.findOne(id);
    }

    @Post()
    async create(@Body() actividad: ActividadDTO): Promise<Actividad> {
        return await this.actividadService.create(actividad);
    }
}
