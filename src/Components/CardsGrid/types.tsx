import { CardProps } from "../Card/types";
import { sortType } from "../Table/consts";

export type CardsGridProps = {
  cards: CardProps[];
  sortBy?: { col: string; order: sortType };
};
