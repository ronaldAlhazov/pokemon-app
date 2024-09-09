import React from "react";

import "./App.css";
import Button from "./Components/Button/ButtonComponent";
import { ButtonSize, ButtonType } from "./Components/Button/consts";

function App() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", event);
  };
  return <div className="App"></div>;
}

export default App;
