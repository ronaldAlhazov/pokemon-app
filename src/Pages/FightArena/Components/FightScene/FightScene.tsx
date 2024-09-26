import React, { useEffect, useState } from "react";
import { FightingData, FightSceneProps } from "./types";
import { Box } from "@mui/material";
import { FightCardProps } from "../../../../Components/FightCard/types";
import { FightType } from "../../../../Components/FightCard/consts";
import FightCard from "../../../../Components/FightCard/FightCard";
import { getMainStyle } from "./styles";
import Buttons from "./Buttons/Buttons";
import { initialCard, initialFightingData, Turn } from "./consts";
import { inAttack, inCatching } from "./FightMechanism";
import Typography from "../../../../Components/Typography/Typography";
import { TypographyTypes } from "../../../../Components/Typography/consts";

const FightScene = ({
  myPokemon,
  opponent,
  addToMyPokemon,
}: FightSceneProps) => {
  const [myPokemonCard, setMyPokemonCard] =
    useState<FightCardProps>(initialCard);
  const [opponentCard, setOpponentCard] = useState<FightCardProps>(initialCard);
  const [myPokemonCurrentData, setMyPokemonCurrentData] =
    useState<FightingData>(initialFightingData);
  const [opponentCurrentData, setOpponentCurrentData] =
    useState<FightingData>(initialFightingData);
  const [startButton, setStartButton] = useState<boolean>(true);
  const [isMatchFinished, setIsMatchFinished] = useState<boolean>(false);
  const [winnerName, setWinnerName] = useState<string>("");
  const [turn, setTurn] = useState<Turn>(
    myPokemon.stats.SpAttack > opponent.stats.SpAttack
      ? Turn.MY_POKEMON
      : Turn.OPPONENT
  );
  useEffect(() => {
    setOpponentCurrentData({
      id: opponent.id,
      name: opponent.name,
      currentHP: opponent.stats.HP,
      isFainted: false,
      catchAttempts: 0,
    });
    setOpponentCard({
      id: opponent.id.toString(),
      img: opponent.imgHires,
      name: opponent.name,
      power: opponent.stats.Attack,
      fightType: FightType.OPPONENT,
      startHealth: opponent.stats.HP,
      currentHealth: opponent.stats.HP,
      minHealth: 0,
      border: "none",
      isWinner: false,
    });
  }, []);

  useEffect(() => {
    setMyPokemonCurrentData({
      id: myPokemon.id,
      name: myPokemon.name,
      currentHP: myPokemon.stats.HP,
      isFainted: false,
      catchAttempts: 0,
    });
    setMyPokemonCard({
      id: myPokemon.id.toString(),
      img: myPokemon.imgHires,
      name: myPokemon.name,
      power: myPokemon.stats.Attack,
      fightType: FightType.ME,
      startHealth: myPokemon.stats.HP,
      currentHealth: myPokemon.stats.HP,
      minHealth: 0,
      border: "none",
      isWinner: false,
    });
  }, [myPokemon]);

  const onAttackClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (turn == Turn.MY_POKEMON && !startButton) {
      inAttack(
        myPokemonCurrentData,
        opponentCurrentData,
        setOpponentCurrentData,
        myPokemon,
        opponent
      );
      setTurn(Turn.OPPONENT);
    }
  };
  useEffect(() => {
    const handleOpponentTurn = () => {
      if (turn === Turn.OPPONENT && !startButton) {
        inAttack(
          opponentCurrentData,
          myPokemonCurrentData,
          setMyPokemonCurrentData,
          opponent,
          myPokemon
        );
        setTurn(Turn.MY_POKEMON);
      }
    };
    const timeout = setTimeout(handleOpponentTurn, 1500);

    return () => clearTimeout(timeout);
  }, [turn, startButton]);
  useEffect(() => {
    if (myPokemonCurrentData.isFainted == true) {
      setWinnerName(opponentCurrentData.name);
      setIsMatchFinished(true);
    }
    setMyPokemonCard((prevState) => ({
      ...prevState,
      currentHealth: myPokemonCurrentData.currentHP,
    }));
  }, [myPokemonCurrentData]);
  useEffect(() => {
    console.log(`in fight ${opponentCurrentData.isFainted}`);

    if (opponentCurrentData.isFainted == true) {
      setWinnerName(myPokemonCurrentData.name);
      setIsMatchFinished(true);
      console.log(opponentCurrentData.id);
      addToMyPokemon(opponentCurrentData.id);
    }
    setOpponentCard((prev) => ({
      ...prev,
      currentHealth: opponentCurrentData.currentHP,
    }));
  }, [opponentCurrentData]);

  const onCatchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (turn == Turn.MY_POKEMON && !startButton) {
      inCatching(
        myPokemonCurrentData,
        setMyPokemonCurrentData,
        opponentCurrentData,
        opponent,
        setOpponentCurrentData
      );
      setTurn(Turn.OPPONENT);
    }
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
          border={
            turn === Turn.MY_POKEMON && !startButton && !isMatchFinished
              ? "3px solid green"
              : "none"
          }
          isWinner={opponentCurrentData.isFainted}
        />
      )}
      {isMatchFinished ? (
        <Box sx={{ textAlign: "center" }}>
          <Typography
            type={TypographyTypes.HEADING_LARGE_BOLD}
            label={`${winnerName} Wins!`}
          />
        </Box>
      ) : (
        <Buttons
          showStartButton={startButton}
          setStartButton={setStartButton}
          onAttackClick={onAttackClick}
          onCatchClick={onCatchClick}
        />
      )}
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
          border={
            turn === Turn.OPPONENT && !startButton && !isMatchFinished
              ? "3px solid green"
              : "none"
          }
          isWinner={myPokemonCurrentData.isFainted}
        />
      )}
    </Box>
  );
};

export default FightScene;
