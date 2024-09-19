import type { Meta, StoryObj } from "@storybook/react";
import CardsGrid from "./CardsGrid";
import { CardProps } from "../Card/types";
import { sortType } from "../Table/consts";

const meta: Meta<typeof CardsGrid> = {
  component: CardsGrid,
  title: "CardsGrid",
};

export default meta;

type Story = StoryObj<typeof meta>;

const sampleCards: CardProps[] = [
  {
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
    name: "Bulbasaur",
    id: "#001",
    power: 30,
    onCardClick: (val: string) => {
      console.log(val);
    },
  },
  {
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
    name: "Ivysaur",
    id: "#002",
    power: 50,
    onCardClick: (val: string) => {
      console.log(val);
    },
  },
  {
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
    name: "Venusaur",
    id: "#003",
    power: 70,
    onCardClick: (val: string) => {
      console.log(val);
    },
  },
  {
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
    name: "Venusaur",
    id: "#003",
    power: 70,
    onCardClick: (val: string) => {
      console.log(val);
    },
  },
];

// Primary Story
export const Primary: Story = {
  args: {
    cards: sampleCards,
  },
};
