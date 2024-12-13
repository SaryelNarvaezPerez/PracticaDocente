import { Module } from '@nestjs/common';
import { DocenteTutorController } from './docente-tutor.controller';
import { DocenteTutorService } from './docente-tutor.service';
import { DocenteTutor } from './entities/docente-tutor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DocenteTutor])],
  controllers: [DocenteTutorController],
  providers: [DocenteTutorService]
})
export class DocenteTutorModule {}
