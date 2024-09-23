import React, { useEffect, useState } from "react";
import { FightSceneProps } from "./types";
import { Box } from "@mui/material";
import ButtonComponent from "../../../../Components/Button/ButtonComponent";
import { ButtonSize, ButtonType } from "../../../../Components/Button/consts";
import { FightCardProps } from "../../../../Components/FightCard/types";
import { FightType } from "../../../../Components/FightCard/consts";
import FightCard from "../../../../Components/FightCard/FightCard";

const FightScene = ({ myPokemon, opponent }: FightSceneProps) => {
  const [myPokemonCard, setMyPokemonCard] = useState<FightCardProps>();
  const [opponentCard, setOpponentCard] = useState<FightCardProps>();
  useEffect(() => {
    setOpponentCard({
      id: opponent.id.toString(),
      img: opponent.img,
      name: opponent.name,
      power: opponent.stats.Attack,
      fightType: FightType.OPPONENT,
      health: opponent.currentHP,
      minHealth: 0,
    });
  }, [opponent]);
  useEffect(() => {
    setMyPokemonCard({
      id: myPokemon.id.toString(),
      img: myPokemon.img,
      name: myPokemon.name,
      power: myPokemon.stats.Attack,
      fightType: FightType.ME,
      health: myPokemon.currentHP,
      minHealth: 0,
    });
  }, [myPokemonCard]);
  const onAttackClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("On Click");
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/Frame 664.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "80px",
        padding: "80px",
      }}
    >
      {myPokemonCard && (
        <FightCard
          id={myPokemonCard.id}
          img={myPokemonCard.img}
          name={myPokemonCard.name}
          power={myPokemonCard.power}
          fightType={myPokemonCard.fightType}
          health={myPokemonCard.health}
          minHealth={myPokemonCard.minHealth}
        />
      )}
      <ButtonComponent
        size={ButtonSize.XLARGE}
        type={ButtonType.PRIMARY}
        label="Attack"
        onClick={onAttackClick}
        disabled={false}
      />
      {opponentCard && (
        <FightCard
          id={opponentCard.id}
          img={opponentCard.img}
          name={opponentCard.name}
          power={opponentCard.power}
          fightType={opponentCard.fightType}
          health={opponentCard.health}
          minHealth={opponentCard.minHealth}
        />
      )}
    </Box>
  );
};

export default FightScene;
