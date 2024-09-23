import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";

import "./App.css";
import PokemonView from "./Pages/PokemonView/PokemonView";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/allpokemones"
          element={
            <PokemonView
              title="All Pokemones"
              onPokemonClick={(val: string) => {}}
            />
          }
        />
        <Route path="/" element={<Navigate to="/allpokemones" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
