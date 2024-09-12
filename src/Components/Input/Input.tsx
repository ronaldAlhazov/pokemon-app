import React from "react";
import { InputProps } from "./types";
import { IconButton, InputBase, Paper } from "@mui/material";

const Input: React.FC<InputProps> = ({
  inputValue,
  setInputValue,
  placeHolder = "Input content",
  disabled = false,
  error = false,
  setIsPressed,
  onClickIconStart,
  onClickIconEnd,
  onError,
  IconStart,
  IconEnd,
  IconError,
  showIconStart = true,
  showIconEnd = true,
  startStyle,
  endStyle,
  errorStyle,
  inputBaseStyle,
  paperStyle,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (onClickIconStart) {
      onClickIconStart(inputValue);
    }
  };

  const handleEndClick = () => {
    if (onClickIconEnd) {
      onClickIconEnd(inputValue);
    }
  };
  const handleFocus = () => {
    setIsPressed(true);
  };

  const handleBlur = () => {
    setIsPressed(false);
  };

  return (
    <Paper component="form" sx={paperStyle}>
      {IconStart && showIconStart && (
        <IconButton
          type="button"
          aria-label="start-icon"
          onClick={handleClick}
          sx={startStyle}
          disabled={disabled}
        >
          <IconStart />
        </IconButton>
      )}
      <InputBase
        placeholder={placeHolder}
        inputProps={{ "aria-label": "input" }}
        disabled={disabled}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        sx={inputBaseStyle}
      />
      {IconEnd && showIconEnd && (
        <IconButton
          type="button"
          onClick={handleEndClick}
          aria-label="end-icon"
          sx={endStyle}
          disabled={disabled}
        >
          <IconEnd />
        </IconButton>
      )}
      {error && IconError && (
        <IconButton type="button" aria-label="error-icon" sx={errorStyle}>
          <IconError />
        </IconButton>
      )}
    </Paper>
  );
};

export default Input;
