/* eslint-disable prettier/prettier */
export type Variant = {
  id: number;
  option: string;
  pollId: number;
  voteCount: number;
};

export type CreatePollParams = {
  id: number;
  question: string;
  options: Variant[];
  active: boolean;
};