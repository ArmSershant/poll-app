/* eslint-disable prettier/prettier */
import { Variant } from "src/utils/types";

export class CreatePollDetails {
  id: number;
  question: string;
  options: Variant[];
  active: boolean;
}