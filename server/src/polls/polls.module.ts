/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from 'src/typeorm/entities/Poll';
import { PollsController } from './controllers/polls/polls.controller';
import { PollsService } from './services/polls/polls.service';
import { Variant } from 'src/typeorm/entities/Variant';

@Module({
  imports: [TypeOrmModule.forFeature([Poll, Variant])],
  controllers: [PollsController],
  providers: [PollsService],
})
export class PollsModule {}
