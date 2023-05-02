export class Variant {
  constructor(
    public id: number,
    public option: string,
    public pollId: number,
    public voteCount: number,
  ) {}
}
