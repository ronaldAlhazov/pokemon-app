import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import PokemonView from "./Pages/PokemonView/PokemonView";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/all-pokemones"
          element={
            <PokemonView
              title="All Pokemones"
              onPokemonClick={(val: string) => {}}
            />
          }
        />
        <Route path="/" element={<Navigate to="/all-pokemones" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
