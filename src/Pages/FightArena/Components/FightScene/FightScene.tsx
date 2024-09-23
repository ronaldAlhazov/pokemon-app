import React, { useEffect, useState } from "react";
import { FightingData, FightSceneProps } from "./types";
import { Box } from "@mui/material";
import { FightCardProps } from "../../../../Components/FightCard/types";
import { FightType } from "../../../../Components/FightCard/consts";
import FightCard from "../../../../Components/FightCard/FightCard";
import { getMainStyle } from "./styles";
import Buttons from "./Buttons/Buttons";
import { initialCard, initialFightingData } from "./consts";

const FightScene = ({ myPokemon, opponent }: FightSceneProps) => {
  const [myPokemonCard, setMyPokemonCard] =
    useState<FightCardProps>(initialCard);
  const [opponentCard, setOpponentCard] = useState<FightCardProps>(initialCard);
  const [myPokemonCurrentData, setMyPokemonCurrentData] =
    useState<FightingData>(initialFightingData);
  const [opponentCurrentData, setOpponentCurrentData] =
    useState<FightingData>(initialFightingData);
  const [startButton, setStartButton] = useState<boolean>(true);
  useEffect(() => {
    setMyPokemonCurrentData({
      id: myPokemon.id,
      name: myPokemon.name,
      currentHP: myPokemon.stats.HP,
      isFainted: false,
    });
    setOpponentCurrentData({
      id: opponent.id,
      name: opponent.name,
      currentHP: opponent.stats.HP,
      isFainted: false,
    });
    setOpponentCard({
      id: opponent.id.toString(),
      img: opponent.img,
      name: opponent.name,
      power: opponent.stats.Attack,
      fightType: FightType.OPPONENT,
      startHealth: opponent.stats.HP,
      currentHealth: opponent.stats.HP,
      minHealth: 0,
    });
    setMyPokemonCard({
      id: myPokemon.id.toString(),
      img: myPokemon.img,
      name: myPokemon.name,
      power: myPokemon.stats.Attack,
      fightType: FightType.ME,
      startHealth: myPokemon.stats.HP,
      currentHealth: myPokemon.stats.HP,
      minHealth: 0,
    });
  }, []);

  const onAttackClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("On Click");
    const newCurrentHealth = Math.max(
      myPokemonCurrentData.currentHP -
        (opponent.stats.Attack - myPokemon.stats.Defense),
      0
    );
    setMyPokemonCurrentData((prevData) => ({
      ...prevData,
      currentHP: myPokemon.stats.HP,
    }));
    setMyPokemonCard((prevState) => ({
      ...prevState,
      currentHealth: prevState.currentHealth - 12,
    }));
  };

  const onCatchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("On onCatchClick");
  };

  return (
    <Box sx={getMainStyle}>
      {myPokemonCard && (
        <FightCard
          id={myPokemonCard.id}
          img={myPokemonCard.img}
          name={myPokemonCard.name}
          power={myPokemonCard.power}
          fightType={myPokemonCard.fightType}
          startHealth={myPokemonCard.startHealth}
          currentHealth={myPokemonCard.currentHealth}
          minHealth={myPokemonCard.minHealth}
        />
      )}
      <Buttons
        showStartButton={startButton}
        setStartButton={setStartButton}
        onAttackClick={onAttackClick}
        onCatchClick={onCatchClick}
      />
      {opponentCard && (
        <FightCard
          id={opponentCard.id}
          img={opponentCard.img}
          name={opponentCard.name}
          power={opponentCard.power}
          fightType={opponentCard.fightType}
          startHealth={opponentCard.startHealth}
          currentHealth={opponentCard.currentHealth}
          minHealth={opponentCard.minHealth}
        />
      )}
    </Box>
  );
};

export default FightScene;
