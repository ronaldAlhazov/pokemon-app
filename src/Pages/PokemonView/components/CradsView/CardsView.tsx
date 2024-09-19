import React from "react";
import CardsGrid from "../../../../Components/CardsGrid/CardsGrid";
import { CardProps } from "../../../../Components/Card/types";

type CardsViewProps = {
  cards: CardProps[];
};

const CardsView = ({ cards }: CardsViewProps) => {
  return <CardsGrid cards={cards}></CardsGrid>;
};

export default CardsView;
