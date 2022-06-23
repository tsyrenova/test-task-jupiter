import { Filter } from "@/constants/constants";

export type Card = {
  id: number;
  image: string;
  type: Filter;
  title: string;
};
