import { Variant } from './variant.model';

export class Poll {
  constructor(
    public id: number,
    public question: string,
    public options: Variant[],
    public active: boolean,
    public voted: boolean
    ) {}
}
