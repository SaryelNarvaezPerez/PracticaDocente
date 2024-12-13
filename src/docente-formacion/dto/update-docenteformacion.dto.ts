import { PartialType } from '@nestjs/mapped-types';
import { CreateDocenteFormacionDto } from './create-docenteformacion.dto';

export class UpdateDocenteFormacionDto extends PartialType(CreateDocenteFormacionDto) {  
 
}