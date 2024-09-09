import React from "react";

import "./App.css";
import Button from "./Components/Button/Button";
import { Size, ButtonType } from "./Components/Button/consts";

function App() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", event);
  };
  return (
    <div className="App">
      <h1>hello world</h1>
      <h1>hello world</h1>
      <Button
        label={"Button"}
        type={ButtonType.PRIMARY}
        size={Size.MEDIUM}
        disabled={false}
        onClick={handleClick}
      ></Button>
    </div>
  );
}

export default App;
