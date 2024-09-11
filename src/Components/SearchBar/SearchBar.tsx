import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { SearchBarProps } from "./types";
import Input from "../Input/Input";
import { endStyle, inputBaseStyle, paperStyle, startStyle } from "./styles";

const SearchBar: React.FC<SearchBarProps> = ({
  placeHolder = "Search...",
  disabled = false,
  onSearch,
  onClear,
  isSearching = false,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputBaseFouced, setIsPressed] = useState<boolean>(false);
  const [showClearIcon, setShowClearIcon] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

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
      setIsPressed={setIsPressed}
      onClickIconStart={handleSearchClick}
      onClickIconEnd={handleClearClick}
      IconStart={SearchIcon}
      IconEnd={ClearIcon}
      showIconEnd={showClearIcon}
      inputBaseStyle={inputBaseStyle(isInputBaseFouced)}
      paperStyle={paperStyle(isInputBaseFouced, disabled)}
      startStyle={startStyle(isInputBaseFouced, disabled)}
      endStyle={endStyle(isInputBaseFouced, disabled)}
    />
  );
};

export default SearchBar;
