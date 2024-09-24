import React from "react";
import { FightArenaHeaderProps } from "./types";
import Typography from "../../../../Components/Typography/Typography";
import { TypographyTypes } from "../../../../Components/Typography/consts";
import { colors } from "../../../../global-styles";
import DropDown from "../../../../Components/DropDown/DropDown";
import { DropDownType } from "../../../../Components/DropDown/consts";
import { string } from "prop-types";
import { DropdownOption } from "../../../../Components/DropDown/types";
import { getDropdownStyle, getFooterStyle, getTypographyStyle } from "./styels";
import { Box } from "@mui/material";

const FightArenaHeader = ({
  setMyPokemon,
  myPokemons,
  selectedPokemon,
}: FightArenaHeaderProps) => {
  const onPokemonChange = (val: string) => {
    const selected = myPokemons.find((pokemon) => pokemon.name === val);

    if (selected) {
      setMyPokemon(selected);
    }
  };
  const getDropDownOptions = (): DropdownOption[] => {
    return myPokemons.map((pokemon) => ({
      label: `${pokemon.stats.Attack}px`,
      value: pokemon.name,
      image: pokemon.img,
    }));
  };
  return (
    <Box sx={getTypographyStyle}>
      <Typography
        label="Fighting arena"
        type={TypographyTypes.CUSTOM}
        weight={700}
        size={40}
        line={43}
        color={colors.NEUTRALS._400}
      />
      <Typography
        label="Press fight button until your or your enemy power will end"
        type={TypographyTypes.CUSTOM}
        weight={400}
        size={18}
        line={22}
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
  );
};

export default FightArenaHeader;
