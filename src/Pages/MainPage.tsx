import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import PokemonView from "./PokemonView/PokemonView";
import { useEffect, useState } from "react";
import { Pokemon } from "./PokemonView/Pokemon";
import {
  fetchPokemonData,
  getMyPokemons,
  getMyPokemonsFightingData,
} from "./dataUtils";
import FightArena from "./FightArena/FightArena";
import { PokemonFightData } from "./FightArena/types";
import NavBar from "./NavBar/NavBar";

const MainPage = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [myPokemons, setMyPokemons] = useState<Pokemon[]>([]);
  const [pokemonForFightId, setPokemonForFightId] = useState<number>(1);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPokemonData();
      setPokemons(data);

      setMyPokemons(getMyPokemons(data));
    };
    loadData();
  }, []);

  const getFightingData = () => {
    return getMyPokemonsFightingData(myPokemons);
  };
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/all-pokemons"
            element={
              <PokemonView
                pokemons={pokemons}
                title="All Pokemons"
                onPokemonClick={(val: string) => {}}
              />
            }
          />
          <Route
            path="/my-pokemons"
            element={
              <PokemonView
                pokemons={myPokemons}
                title="My Pokemons"
                onPokemonClick={(val: string) => {}}
              />
            }
          />
          <Route
            path="/fight-arena"
            element={
              <FightArena
                myPokemons={getFightingData()}
                id={pokemonForFightId}
              />
            }
          />
          <Route path="/" element={<Navigate to="/all-pokemons" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainPage;
