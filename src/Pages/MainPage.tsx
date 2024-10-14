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
      const myPokemonsData = await getMyPokemons();
      setMyPokemons(myPokemonsData);
      setOpponent(await getOpponent("roni23"));
    };
    loadData();
  }, []);
  useEffect(() => {
    if (path === Paths.FIGHT_ARENA) {
      fetchOpponent();
    }
  }, [path]);
  const fetchOpponent = async () => {
    const username = "roni23";
    try {
      const opponentData = await getOpponent(username);
      setOpponent(opponentData);
    } catch (error) {
      console.error("Error fetching opponent:", error);
    }
  };

  const addToMyPokemons = async (id: number) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/addToMyPokemons?username=roni23&pokemonId=${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMyPokemons(await getMyPokemons());

      if (response.ok) {
        console.log("Pokémon added to collection");
      } else {
        console.error("Failed to add Pokémon:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding Pokémon:", error);
    }
  };
  const startFight = (id: number) => {
    console.log(id);
    const newPokemon = pokemons.at(id - 1);
    console.log(newPokemon);
    if (newPokemon) {
      const isInMyPokemons = myPokemons.some(
        (pokemon) => pokemon.id === newPokemon.id
      );
      console.log(isInMyPokemons);

      if (isInMyPokemons) {
        setPokemonForFight(getOpponentData(newPokemon));
        fetchOpponent();
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
              setPokemons={setPokemons}
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
              setPokemons={setMyPokemons}
              title={Title.MY_POKEMONS}
              onFightClick={startFight}
            />
          }
        />
        <Route
          path="/fight-arena"
          element={
            <FightArena
              pokemon={pokemonForFight}
              opponent={opponent}
              setOpponent={setOpponent}
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
