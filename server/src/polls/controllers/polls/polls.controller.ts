/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePollDetails } from 'src/polls/details/createPoll.details';
import { EditPollDetails } from 'src/polls/details/editPoll.details';
import { PollsService } from 'src/polls/services/polls/polls.service';

@Controller('polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) {}
  @Get()
  getPolls() {
    return this.pollsService.getPolls();
  }

  @Get('/activepolls')
  getActivePolls() {
    return this.pollsService.getActivePolls();
  }

  @Post('/create')
  createPoll(@Body() createPollDetails: CreatePollDetails) {
    return this.pollsService.createPoll(createPollDetails);
  }

  @Put('change/:id')
  changeStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() poll: EditPollDetails,
  ) {
    const changeStatus = this.pollsService.changeStatus(id, poll);
    return changeStatus;
  }

  @Put('change/:id/vote/:optionId')
  vote(
    @Param('id', ParseIntPipe) id: number,
    @Param('optionId', ParseIntPipe) optionId: number,
    @Body() poll:EditPollDetails,
  ) {
    const vote = this.pollsService.vote(id, optionId, poll)
    return vote
  }
}
