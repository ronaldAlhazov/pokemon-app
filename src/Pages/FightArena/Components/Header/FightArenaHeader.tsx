import React, { useEffect, useState } from "react";
import { FightArenaHeaderProps } from "./types";
import Typography from "../../../../Components/Typography/Typography";
import { TypographyTypes } from "../../../../Components/Typography/consts";
import { colors } from "../../../../global-styles";
import DropDown from "../../../../Components/DropDown/DropDown";
import { DropDownType } from "../../../../Components/DropDown/consts";
import { string } from "prop-types";
import { DropdownOption } from "../../../../Components/DropDown/types";
import {
  getDropdownStyle,
  getFooterStyle,
  getHeaderStyle,
  getTypographyStyle,
} from "./styels";
import { Box } from "@mui/material";
import { PokemonFightData } from "../../types";
import { getMyPokemonsFightingData } from "../../../dataUtils";

const FightArenaHeader = ({
  setMyPokemon,
  selectedPokemon,
  isMatchStarted,
}: FightArenaHeaderProps) => {
  const [myPokemons, setMyPokemons] = useState<PokemonFightData[]>([]);

  useEffect(() => {
    const fetchMyPokemons = async () => {
      try {
        const fetchedMyPokemons = await getMyPokemonsFightingData();
        setMyPokemons(fetchedMyPokemons);
        if (selectedPokemon?.name === "") {
          setMyPokemon(fetchedMyPokemons[0]);
        }
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchMyPokemons(); // Call the async function
  }, [selectedPokemon]);

  const onPokemonChange = (val: string) => {
    const selected = myPokemons.find((pokemon) => pokemon.name === val);
    if (selected && !isMatchStarted) {
      setMyPokemon(selected);
    }
  };
  const getDropDownOptions = (): DropdownOption[] => {
    return myPokemons.map((pokemon) => ({
      label: `${pokemon.stats.Attack}px`,
      value: pokemon.name,
      image: pokemon.imgThumbnails,
    }));
  };
  return (
    <Box sx={getHeaderStyle}>
      <Box sx={getTypographyStyle}>
        <Typography
          label="Fighting arena"
          type={TypographyTypes.CUSTOM}
          weight={700}
          size={40}
          line={20}
          color={colors.NEUTRALS._400}
        />
        <Typography
          label="Press fight button until your or your enemy power will end"
          type={TypographyTypes.CUSTOM}
          weight={400}
          size={18}
          line={15}
          color={colors.NEUTRALS._500}
        />

        <Box sx={getFooterStyle}>
          <DropDown
            type={DropDownType.SEARCH}
            options={getDropDownOptions()}
            label={selectedPokemon.name}
            onChange={onPokemonChange}
            value={selectedPokemon.name}
            style={getDropdownStyle(selectedPokemon.name.length)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FightArenaHeader;
