import type { Meta, StoryObj } from "@storybook/react";
import FightScene from "./FightScene";
import { PokemonFightData } from "../../types";

const meta: Meta<typeof FightScene> = {
  component: FightScene,
  title: "FightScene",
};

export default meta;

type Story = StoryObj<typeof meta>;
const sampleRows: PokemonFightData[] = [
  {
    id: 1,
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    stats: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      SpAttack: 65,
      SpDefense: 65,
      Speed: 45,
    },
    currentHP: 45,
    isFainted: false,
    abilities: [
      { name: "Overgrow", hidden: false },
      { name: "Chlorophyll", hidden: true },
    ],
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
  },
  {
    id: 2,
    name: "Ivysaur",
    type: ["Grass", "Poison"],
    stats: {
      HP: 60,
      Attack: 62,
      Defense: 63,
      SpAttack: 80,
      SpDefense: 80,
      Speed: 60,
    },
    currentHP: 60,
    isFainted: false,
    abilities: [
      { name: "Overgrow", hidden: false },
      { name: "Chlorophyll", hidden: true },
    ],
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
  },
  {
    id: 3,
    name: "Venusaur",
    type: ["Grass", "Poison"],
    stats: {
      HP: 80,
      Attack: 82,
      Defense: 83,
      SpAttack: 100,
      SpDefense: 100,
      Speed: 80,
    },
    currentHP: 80,
    isFainted: false,
    abilities: [
      { name: "Overgrow", hidden: false },
      { name: "Chlorophyll", hidden: true },
    ],
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/003.png",
  },
];
export const Primary: Story = {
  args: {
    myPokemon: sampleRows[0],
    opponent: sampleRows[1],
  },
};
