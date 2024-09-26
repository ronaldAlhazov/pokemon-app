import React, { useEffect, useState } from "react";
import { FightingData, FightSceneProps } from "./types";
import { Box } from "@mui/material";
import { FightCardProps } from "../../../../Components/FightCard/types";
import { FightType } from "../../../../Components/FightCard/consts";
import FightCard from "../../../../Components/FightCard/FightCard";
import { CardContainer, getMainStyle } from "./styles";
import Buttons from "./Buttons/Buttons";
import { initialFightingData, Turn } from "./consts";
import { inAttack, inCatching } from "./FightMechanism";
import Typography from "../../../../Components/Typography/Typography";
import { TypographyTypes } from "../../../../Components/Typography/consts";
import { motion } from "framer-motion";

const FightScene = ({
  myPokemon,
  opponent,
  addToMyPokemon,
}: FightSceneProps) => {
  const [myPokemonCurrentData, setMyPokemonCurrentData] =
    useState<FightingData>(initialFightingData);
  const [opponentCurrentData, setOpponentCurrentData] =
    useState<FightingData>(initialFightingData);
  const [startButton, setStartButton] = useState<boolean>(true);
  const [isMatchFinished, setIsMatchFinished] = useState<boolean>(false);
  const [shakeMyCard, setShakeMyCard] = useState<boolean>(false);
  const [catchMissed, setCatchMissed] = useState<boolean>(false);
  const [shakeOpponentCard, setShakeOpponentCard] = useState<boolean>(false);
  const [winnerName, setWinnerName] = useState<string>("");
  const [turn, setTurn] = useState<Turn>(
    myPokemon.stats.SpAttack > opponent.stats.SpAttack
      ? Turn.MY_POKEMON
      : Turn.OPPONENT
  );

  useEffect(() => {
    console.log(opponent.name);
    setOpponentCurrentData({
      id: opponent.id,
      name: opponent.name,
      img: opponent.imgHires,
      HP: opponent.stats.HP,
      type: opponent.type,
      Attack: opponent.stats.Attack,
      Defense: opponent.stats.Defense,
      SpAttack: opponent.stats.SpAttack,
      SpDefense: opponent.stats.SpDefense,
      Speed: opponent.stats.Speed,
      currentHP: opponent.stats.HP,
      isFainted: false,
      catchAttempts: 0,
    });
  }, []);

  useEffect(() => {
    setMyPokemonCurrentData({
      id: myPokemon.id,
      img: myPokemon.imgHires,
      name: myPokemon.name,
      HP: myPokemon.stats.HP,
      type: myPokemon.type,
      Attack: myPokemon.stats.Attack,
      Defense: myPokemon.stats.Defense,
      SpAttack: myPokemon.stats.SpAttack,
      SpDefense: myPokemon.stats.SpDefense,
      Speed: myPokemon.stats.Speed,
      currentHP: myPokemon.stats.HP,
      isFainted: false,
      catchAttempts: 0,
    });
  }, [myPokemon]);

  const onAttackClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (turn == Turn.MY_POKEMON && !startButton) {
      setShakeOpponentCard(
        inAttack(
          myPokemonCurrentData,
          opponentCurrentData,
          setOpponentCurrentData
        )
      );
      setTurn(Turn.OPPONENT);
    }
  };

  useEffect(() => {
    const handleOpponentTurn = () => {
      if (turn === Turn.OPPONENT && !startButton) {
        setShakeMyCard(
          inAttack(
            opponentCurrentData,
            myPokemonCurrentData,
            setMyPokemonCurrentData
          )
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
  }, [myPokemonCurrentData]);
  useEffect(() => {
    if (opponentCurrentData.isFainted == true) {
      setWinnerName(myPokemonCurrentData.name);
      setIsMatchFinished(true);
    }
  }, [opponentCurrentData]);

  const onCatchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (opponentCurrentData.isFainted == true) {
      addToMyPokemon(opponentCurrentData.id);
    } else if (turn == Turn.MY_POKEMON && !startButton) {
      const isCatched = inCatching(
        myPokemonCurrentData,
        setMyPokemonCurrentData,
        opponentCurrentData,
        setOpponentCurrentData
      );
      if (isCatched) {
        addToMyPokemon(opponentCurrentData.id);
        return;
      }
      setCatchMissed(!isCatched);
      setTurn(Turn.OPPONENT);
    }
  };
  const cardVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Box sx={getMainStyle}>
      <CardContainer shake={shakeMyCard}>
        <FightCard
          id={myPokemonCurrentData.id.toString()}
          img={myPokemonCurrentData.img}
          name={myPokemonCurrentData.name}
          power={myPokemonCurrentData.Attack}
          fightType={FightType.ME}
          startHealth={myPokemonCurrentData.HP}
          currentHealth={myPokemonCurrentData.currentHP}
          border={
            turn === Turn.MY_POKEMON && !startButton && !isMatchFinished
              ? "3px solid green"
              : "none"
          }
          isWinner={opponentCurrentData.isFainted}
        />
      </CardContainer>

      {isMatchFinished && myPokemonCurrentData.isFainted ? (
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
          isMyPokemonWin={opponentCurrentData.isFainted}
          isFightEnded={isMatchFinished}
        />
      )}
      <CardContainer shake={shakeOpponentCard} rotate={catchMissed}>
        <FightCard
          id={opponentCurrentData.id.toString()}
          img={opponentCurrentData.img}
          name={opponentCurrentData.name}
          power={opponentCurrentData.Attack}
          fightType={FightType.OPPONENT}
          startHealth={opponentCurrentData.HP}
          currentHealth={opponentCurrentData.currentHP}
          border={
            turn === Turn.OPPONENT && !startButton && !isMatchFinished
              ? "3px solid green"
              : "none"
          }
          isWinner={myPokemonCurrentData.isFainted}
        />
      </CardContainer>
    </Box>
  );
};

export default FightScene;
