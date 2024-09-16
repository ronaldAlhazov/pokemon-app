import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
import { TableCols } from "./types"; // Import the type if needed

const meta: Meta<typeof Table> = {
  component: Table,
  title: "Table",
};

export default meta;

type Story = StoryObj<typeof meta>;

// Sample options data for the table
const sampleOptions: TableCols[] = [
  {
    name: "Bulbasaur",
    ID: "001",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
    Power: "power lever 1",
    hp: "45",
    avatar:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
  },
  {
    name: "Charmander",
    ID: "002",
    description: "Fire type Pokémon",
    Power: "Flamethrower",
    hp: "39",
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    name: "Bulbasaur",
    ID: "003",
    description: "Grass type Pokémon",
    Power: "Vine Whip",
    hp: "45",
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
];

// Primary Story
export const Primary: Story = {
  args: {
    options: sampleOptions,
  },
};
