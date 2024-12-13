import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocenteFormacionController } from './docente-formacion.controller';
import { DocenteFormacionService } from './docente-formacion.service';
import { DocenteFormacion } from './entities/docente-formacion.entity';

@Module({
    imports: [TypeOrmModule.forFeature([DocenteFormacion])],
    controllers: [DocenteFormacionController],
    providers: [DocenteFormacionService],
})
export class DocenteFormacionModule {}
