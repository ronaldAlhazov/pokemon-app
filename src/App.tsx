import React from "react";

import "./App.css";
import PokemonView from "./Pages/PokemonView/PokemonView";

function App() {
  return (
    <div className="App">
      <PokemonView title="All Pokemons" onPokemonClick={() => {}} />
    </div>
  );
}

export default App;
