/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollsModule } from './polls/polls.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './typeorm/entities/Poll';
import { Variant } from './typeorm/entities/Variant';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'poll_app_db',
      username: 'root',
      password: '',
      entities: [Poll, Variant],
      synchronize: true,
    }),
    PollsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
