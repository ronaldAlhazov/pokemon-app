import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { SearchBarProps } from "./types";
import Input from "../Input/Input";
import { endStyle, inputBaseStyle, paperStyle, startStyle } from "./styles";

const SearchBar = ({
  placeHolder = "Search...",
  disabled = false,
  onSearch,
  onClear,
}: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [showClearIcon, setShowClearIcon] = useState<boolean>(false);

  const handleSearchClick = (inputValue: string) => {
    if (onSearch) {
      onSearch(inputValue);
      setShowClearIcon(true);
    }
  };

  const handleClearClick = (input: string) => {
    setInputValue("");
    setShowClearIcon(false);
    if (onClear) {
      onClear();
    }
  };

  return (
    <Input
      inputValue={inputValue}
      setInputValue={setInputValue}
      placeHolder={placeHolder}
      disabled={disabled}
      setIsPressed={setIsInputFocused}
      onClickIconStart={handleSearchClick}
      onClickIconEnd={handleClearClick}
      IconStart={SearchIcon}
      IconEnd={ClearIcon}
      showIconEnd={showClearIcon}
      inputBaseStyle={inputBaseStyle(isInputFocused)}
      paperStyle={paperStyle(isInputFocused, disabled)}
      startIconStyle={startStyle(isInputFocused, disabled)}
      endIconStyle={endStyle(isInputFocused, disabled)}
    />
  );
};

export default SearchBar;
