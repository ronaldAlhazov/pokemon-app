import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import PokemonView from "./PokemonView/PokemonView";
import { useEffect, useState } from "react";
import { Pokemon } from "./PokemonView/Pokemon";
import {
  fetchPokemonData,
  getMyPokemons,
  getMyPokemonsFightingData,
  getOpponent,
  getOpponentData,
} from "./dataUtils";
import FightArena from "./FightArena/FightArena";
import { PokemonFightData } from "./FightArena/types";
import NavBar from "./NavBar/NavBar";
import { FightingData } from "./FightArena/Components/FightScene/types";
import { initialPokemonFightingData } from "./FightArena/Components/FightScene/consts";
import { Paths } from "./NavBar/consts";
import { Title } from "./PokemonView/consts";

const MainPage = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [myPokemons, setMyPokemons] = useState<Pokemon[]>([]);
  const [path, setPath] = useState<Paths>(Paths.ALL_POKEMONS);
  const [opponent, setOpponent] = useState<PokemonFightData>(
    initialPokemonFightingData
  );
  const [pokemonForFight, setPokemonForFight] = useState<PokemonFightData>(
    initialPokemonFightingData
  );
  const navigate = useNavigate();
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPokemonData();
      setPokemons(data);
      setMyPokemons(getMyPokemons(data));
      setOpponent(getOpponent(data));
    };
    loadData();
  }, []);
  useEffect(() => {
    if (path === Paths.FIGHT_ARENA) setOpponent(getOpponent(pokemons));
  }, [path]);

  const getFightingData = () => {
    return getMyPokemonsFightingData(myPokemons);
  };
  const addToMyPokemons = (id: number) => {
    const newPokemon = pokemons.at(id - 1);
    if (newPokemon && !myPokemons.some((pokemon) => pokemon.id === id)) {
      const pokemonCopy = { ...newPokemon };
      pokemonCopy.belongsToMe = true;
      const updatedPokemons = pokemons.map((pokemon, index) =>
        index === id - 1 ? pokemonCopy : pokemon
      );
      setPokemons(updatedPokemons);
      setMyPokemons((prev) => [...prev, pokemonCopy]);
      localStorage.setItem("pokemonData", JSON.stringify(updatedPokemons));
    }
  };
  const startFight = (id: number) => {
    const newPokemon = pokemons.at(id - 1);
    if (newPokemon) {
      if (newPokemon.belongsToMe) {
        setPokemonForFight(getOpponentData(newPokemon));
        setOpponent(getOpponent(pokemons));
      } else {
        setOpponent(getOpponentData(newPokemon));
      }
    }
    navigate("/fight-arena");
  };

  return (
    <div>
      <NavBar setPath={setPath} />
      <Routes>
        <Route
          path="/all-pokemons"
          element={
            <PokemonView
              pokemons={pokemons}
              title={Title.ALL_POKEMONS}
              onFightClick={startFight}
            />
          }
        />
        <Route
          path="/my-pokemons"
          element={
            <PokemonView
              pokemons={myPokemons}
              title={Title.MY_POKEMONS}
              onFightClick={startFight}
            />
          }
        />
        <Route
          path="/fight-arena"
          element={
            <FightArena
              myPokemons={getFightingData()}
              pokemon={pokemonForFight}
              opponent={opponent}
              addToMyPokemon={addToMyPokemons}
            />
          }
        />
        <Route path="/" element={<Navigate to="/all-pokemons" replace />} />
      </Routes>
    </div>
  );
};

export default MainPage;
