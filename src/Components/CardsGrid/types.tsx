import { CardProps } from "../Card/types";
import { sortType } from "../Table/consts";

export type CardsGridProps = {
  cards: CardProps[];
  onCardClick?: (card: CardProps) => void;
  sortBy?: { col: string; order: sortType };
};
