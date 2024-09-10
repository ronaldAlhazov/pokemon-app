import React from "react";
import { TextInputProps } from "./types";
import {
  FormControl,
  FormHelperText,
  Paper,
  InputBase,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";

import { CustomInputLabel } from "./styles";

const TextInput = ({
  label = "Input label",
  halperText = "Help text message here",
  placeHolder = "Input content",
  disabled = false,
  onClick,
}: TextInputProps) => {
  return (
    <Box
      component="form"
      noValidate
      sx={{ display: "grid", gridTemplateColumns: { sm: "1fr 1fr" }, gap: 2 }}
    >
      <FormControl variant="standard">
        <CustomInputLabel shrink htmlFor="bootstrap-input">
          {label}
        </CustomInputLabel>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 195,
            marginTop: 3,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={placeHolder}
            inputProps={{ "aria-label": "s" }}
          />
          <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
            <ExpandMoreIcon />
          </IconButton>
        </Paper>
        <FormHelperText id="component-helper-text">{halperText}</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default TextInput;
