import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DocenteFormacionService } from './docente-formacion.service';
import { CreateDocenteFormacionDto } from './dto/create-docenteformacion.dto';
import { UpdateDocenteFormacionDto } from './dto/update-docenteformacion.dto';

@Controller('docente-formacion')
export class DocenteFormacionController {
    constructor(private readonly docenteformacionService: DocenteFormacionService) {}

    @Post()
    async create(@Body() createDocenteformacionDto: CreateDocenteFormacionDto) {
        return this.docenteformacionService.create(createDocenteformacionDto);
    }

    @Get()
    findAll() {
        return this.docenteformacionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.docenteformacionService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateDocenteformacionDto: UpdateDocenteFormacionDto) {
        return this.docenteformacionService.update(+id, updateDocenteformacionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.docenteformacionService.remove(+id);
    }
}
