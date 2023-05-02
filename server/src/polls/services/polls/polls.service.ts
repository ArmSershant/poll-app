/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Poll } from 'src/typeorm/entities/Poll';
import { Variant } from 'src/typeorm/entities/Variant';
import { CreatePollParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class PollsService {
  constructor(
    @InjectRepository(Poll) private pollRepository: Repository<Poll>,
    @InjectRepository(Variant) private variantsRepository: Repository<Variant>,
  ) {}
  async getPolls() {
    const polls = await this.pollRepository.find({ relations: ['options'] });
    return polls;
  }

  async getActivePolls() {
    const activePolls = await this.pollRepository.find({
      where: { active: true },
      relations: ['options'],
    });
    return activePolls;
  }

  async createPoll(createPollDetails: CreatePollParams) {
    const { question, id, active, options } = createPollDetails;
    const newPoll = this.pollRepository.create({ question, id, active });

    const savedPoll = await this.pollRepository.save(newPoll);
    const pollId = savedPoll.id;

    const variants = [];

    for (const option of options) {
      const newVariant = this.variantsRepository.create({
        poll: { id: pollId },
        option: option.option,
        voteCount: option.voteCount,
      });
      variants.push(newVariant);
    }

    await this.variantsRepository.save(variants);
    return savedPoll;
  }

  async changeStatus(id: number, editPollDetails: any) {
    const poll = await this.pollRepository.findOneBy({ id: id });
    if (!poll)
      throw new HttpException(
        `Poll ${id} does not exist cannot edit`,
        HttpStatus.BAD_REQUEST,
      );
    poll.active = !poll.active;
    await this.pollRepository.save(poll);
    const newPoll = await this.pollRepository.update({ id: id }, { ...poll });
    return newPoll;
  }

  async vote(id: number, optionId: number, editPollDetails: any) {
    const poll = await this.pollRepository.findOneBy({ id: id });
    if (!poll)
      throw new HttpException(
        `Poll ${id} not found you can't vote for the option`,
        HttpStatus.BAD_REQUEST,
      );
    const option = await this.variantsRepository.findOneBy({ id: optionId });
    if (!option)
      throw new HttpException(
        `Option ${optionId} does not exist`,
        HttpStatus.BAD_REQUEST,
      );
    option.voteCount = option.voteCount + 1;
    option.voted = true;
    await this.variantsRepository.save(option);
    return poll;
  }
}
