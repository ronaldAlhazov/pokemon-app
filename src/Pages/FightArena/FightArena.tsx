import React, { useEffect, useState } from "react";
import { FightArenaProps, PokemonFightData } from "./types";
import FightArenaHeader from "./Components/Header/FightArenaHeader";
import FightScene from "./Components/FightScene/FightScene";

const FightArena = ({
  myPokemons,
  pokemon,
  opponent,
  addToMyPokemon,
}: FightArenaProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonFightData>(
    myPokemons[0]
  );
  useEffect(() => {
    if (pokemon.name != "") setSelectedPokemon(pokemon);
  }, [pokemon]);

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
          myPokemons={myPokemons}
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
