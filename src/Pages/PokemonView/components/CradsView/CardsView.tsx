import React, { useEffect, useState } from "react";
import CardsGrid from "../../../../Components/CardsGrid/CardsGrid";
import { CardProps } from "../../../../Components/Card/types";
import { sortType } from "../../../../Components/Table/consts";

type CardsViewProps = {
  cards: CardProps[];
};
type CardKeys = "id" | "name" | "power";
export const sortCards = (
  cards: CardProps[],
  sortBy: { col: string; order: sortType }
) => {
  if (!sortBy) return cards;

  const { col, order } = sortBy;
  const normalizedCol = col.toLocaleLowerCase();
  if (!["id", "name", "power"].includes(normalizedCol)) return cards;

  return [...cards].sort((a, b) => {
    const valueA = a[normalizedCol as CardKeys];
    const valueB = b[normalizedCol as CardKeys];

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
