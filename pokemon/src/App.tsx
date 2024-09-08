import React from "react";

import "./App.css";
import Button from "./Components/Button/Button";
import { SIZE, TYPE } from "./Components/Button/Tyeps";

function App() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", event);
  };
  return (
    <div className="App">
      <h1>hello world</h1>
      <Button
        type={TYPE.PRIMARY}
        size={SIZE.MEDIUM}
        disabled={false}
        onClick={handleClick}
      ></Button>
      <Button
        type={TYPE.SECONDARY}
        size={SIZE.MEDIUM}
        disabled={false}
        onClick={handleClick}
      ></Button>
      <Button
        type={TYPE.SECONDARY_GRAY}
        size={SIZE.MEDIUM}
        disabled={false}
        onClick={handleClick}
      ></Button>

      <Button
        type={TYPE.TERTIARY}
        size={SIZE.MEDIUM}
        disabled={false}
        onClick={handleClick}
      ></Button>

      <Button
        type={TYPE.TERTIARY_GRAY}
        size={SIZE.MEDIUM}
        disabled={false}
        onClick={handleClick}
      ></Button>
    </div>
  );
}

export default App;
