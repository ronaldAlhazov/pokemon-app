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
    name: "Pikachu",
    ID: "001",
    description: "Electric type Pokémon",
    Power: "Thunderbolt",
    hp: "35",
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
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
