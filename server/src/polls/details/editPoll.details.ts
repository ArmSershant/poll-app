/* eslint-disable prettier/prettier */
import { Variant } from "src/utils/types";

export class EditPollDetails {
  id: number;
  question: string;
  options: Variant[];
  active: boolean;
}
