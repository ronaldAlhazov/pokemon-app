import React, { useEffect, useState } from "react";
import { FightArenaProps, PokemonFightData } from "./types";
import FightArenaHeader from "./Components/Header/FightArenaHeader";

const FightArena = ({ myPokemons, id }: FightArenaProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonFightData>(
    myPokemons[id]
  );
  useEffect(() => {
    console.log("in fight arena");
    console.log(id);
  }, []);
  return (
    <div>
      <FightArenaHeader
        myPokemons={myPokemons}
        setMyPokemon={setSelectedPokemon}
        selectedPokemon={selectedPokemon}
      />
    </div>
  );
};

export default FightArena;
