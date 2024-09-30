import React, { useEffect, useState } from "react";
import { FightArenaProps, PokemonFightData } from "./types";
import FightArenaHeader from "./Components/Header/FightArenaHeader";
import FightScene from "./Components/FightScene/FightScene";
import {
  initialFightingData,
  initialPokemonFightingData,
} from "./Components/FightScene/consts";

const FightArena = ({
  pokemon,
  opponent,
  setOpponent,
  addToMyPokemon,
}: FightArenaProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonFightData>(
    initialPokemonFightingData
  );

  useEffect(() => {
    const storedOpponent = localStorage.getItem("opponentData");
    const storedPokemon = localStorage.getItem("selectedPokemonData");

    if (opponent) {
      localStorage.setItem("opponentData", JSON.stringify(opponent));
    } else if (storedOpponent) {
      const parsedOpponent = JSON.parse(storedOpponent) as PokemonFightData;
      setOpponent(parsedOpponent);
    }

    if (storedPokemon) {
      const parsedPokemon = JSON.parse(storedPokemon) as PokemonFightData;
      setSelectedPokemon(parsedPokemon);
    } else if (pokemon.name !== "") {
      setSelectedPokemon(pokemon);
      localStorage.setItem("selectedPokemonData", JSON.stringify(pokemon));
    }
  }, []);
  useEffect(() => {
    if (pokemon.name !== "") {
      setSelectedPokemon(pokemon);
      localStorage.setItem("selectedPokemonData", JSON.stringify(pokemon));
    }
  }, [pokemon]);
  useEffect(() => {
    if (selectedPokemon.name !== "") {
      localStorage.setItem(
        "selectedPokemonData",
        JSON.stringify(selectedPokemon)
      );
    }
  }, [selectedPokemon]);
  useEffect(() => {
    console.log(opponent.name);
    localStorage.setItem("opponentData", JSON.stringify(opponent));
  }, [opponent]);

  return (
    <div
      style={{
        marginTop: "28px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div style={{ width: "90%" }}>
        <FightArenaHeader
          setMyPokemon={setSelectedPokemon}
          selectedPokemon={selectedPokemon}
        />
      </div>
      <div
        style={{
          marginTop: "14px",
          width: "90%",
        }}
      >
        <FightScene
          opponent={opponent}
          myPokemon={selectedPokemon}
          addToMyPokemon={addToMyPokemon}
        />
      </div>
    </div>
  );
};

export default FightArena;
