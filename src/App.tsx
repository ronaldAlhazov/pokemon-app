import React from "react";

import "./App.css";
import Button from "./Components/Button/Button";
import { ButtonSize, ButtonType } from "./Components/Button/consts";

function App() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", event);
  };
  return (
    <div className="App">
      <h1>hello world</h1>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
