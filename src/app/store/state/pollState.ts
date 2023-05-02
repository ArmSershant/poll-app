import { Poll } from "src/app/poll/models/poll.model";

export interface PollState {
  poll:Poll
  polls: Poll[];
  activePolls:Poll[]
}
