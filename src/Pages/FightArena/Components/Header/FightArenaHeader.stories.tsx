import type { Meta, StoryObj } from "@storybook/react";
import FightArenaHeader from "./FightArenaHeader";
import { useState } from "react";
import { PokemonFightData } from "../../types";
import { PokemonType } from "../../../PokemonView/Pokemon";

const meta: Meta<typeof FightArenaHeader> = {
  component: FightArenaHeader,
  title: "FightArenaHeader",
};

export default meta;

type Story = StoryObj<typeof meta>;
const sampleRows: PokemonFightData[] = [
  {
    id: 1,
    name: "Bulbasaur",
    type: [PokemonType.GRASS, PokemonType.POISON],
    stats: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      SpAttack: 65,
      SpDefense: 65,
      Speed: 45,
    },

    isFainted: false,
    abilities: [
      { name: "Overgrow", hidden: false },
      { name: "Chlorophyll", hidden: true },
    ],
    imgThumbnails:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/001.png",
    imgHires:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
  },
  {
    id: 2,
    name: "Ivysaur",
    type: [PokemonType.GRASS, PokemonType.POISON],
    stats: {
      HP: 60,
      Attack: 62,
      Defense: 63,
      SpAttack: 80,
      SpDefense: 80,
      Speed: 60,
    },
    isFainted: false,
    abilities: [
      { name: "Overgrow", hidden: false },
      { name: "Chlorophyll", hidden: true },
    ],
    imgThumbnails:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/002.png",
    imgHires:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
  },
  {
    id: 3,
    name: "Venusaur",
    type: [PokemonType.GRASS, PokemonType.POISON],
    stats: {
      HP: 80,
      Attack: 82,
      Defense: 83,
      SpAttack: 100,
      SpDefense: 100,
      Speed: 80,
    },

    isFainted: false,
    abilities: [
      { name: "Overgrow", hidden: false },
      { name: "Chlorophyll", hidden: true },
    ],
    imgThumbnails:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/003.png",
    imgHires:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
  },
];
export const Header: Story = {
  render: (args) => {
    const [myPokemon, setMyPokemon] = useState<PokemonFightData>(sampleRows[0]);

    return (
      <FightArenaHeader
        myPokemons={sampleRows}
        selectedPokemon={myPokemon}
        setMyPokemon={setMyPokemon}
      />
    );
  },
  args: {},
};
