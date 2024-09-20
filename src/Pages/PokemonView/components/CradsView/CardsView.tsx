import React, { useEffect, useState } from "react";
import CardsGrid from "../../../../Components/CardsGrid/CardsGrid";
import { CardProps } from "../../../../Components/Card/types";
import { sortType } from "../../../../Components/Table/consts";
import { CardKeys, CardsViewProps } from "./types";

export const sortCards = (
  cards: CardProps[],
  sortBy: { col: string; order: string }
) => {
  return cards.sort((a, b) => {
    const { col, order } = sortBy;
    const key = col.toLowerCase() as keyof CardProps;
    const valueA = a[key];
    const valueB = b[key];

    if (typeof valueA === "string" && typeof valueB === "string") {
      return order === sortType.ASC
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    } else if (typeof valueA === "number" && typeof valueB === "number") {
      return order === sortType.ASC ? valueA - valueB : valueB - valueA;
    }
    return 0;
  });
};
const CardsView = ({ cards }: CardsViewProps) => {
  return <CardsGrid cards={cards}></CardsGrid>;
};

export default CardsView;
