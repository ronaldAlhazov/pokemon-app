import { BrowserRouter } from "react-router-dom";
import "./App.css";

import MainPage from "./Pages/MainPage";
const App = () => {
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
};

export default App;
