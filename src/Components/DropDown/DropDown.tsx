import React, { useState } from "react";
import { DropdownProps, DropdownOption } from "./types";
import {
  Autocomplete,
  TextField,
  MenuItem,
  ListItemIcon,
  ListItemText,
  InputAdornment,
  Typography,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DropDownType } from "./consts";

const DropDown = ({
  dropDownType,
  options,
  value,
  onChange,
  label = "",
}: DropdownProps) => {
  const [showSearchIcon, setShowSearchIcon] = useState(
    dropDownType === DropDownType.SEARCH
  );
  // Handle the change event for Autocomplete
  const handleChange = (event: any, newValue: DropdownOption | null) => {
    setShowSearchIcon(false);
    if (onChange && newValue) {
      onChange(newValue.value); // Pass the value to the onChange handler
    } else if (!newValue) {
      onChange("");
      setShowSearchIcon(dropDownType === DropDownType.SEARCH);
    }
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      value={options.find((option) => option.value === value) || null}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            startAdornment: showSearchIcon ? (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ) : (
              params.InputProps.endAdornment
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <MenuItem {...props} sx={{ display: "flex", alignItems: "center" }}>
          {option.image && (
            <ListItemIcon sx={{ minWidth: 0, marginRight: 2 }}>
              <img
                src={option.image}
                alt={option.label}
                style={{ width: 24, height: 24, borderRadius: "50%" }}
              />
            </ListItemIcon>
          )}
          <Box>
            <Typography variant="body2">{option.label}</Typography>
            <Typography variant="caption" color="textSecondary">
              {option.value}
            </Typography>
          </Box>
        </MenuItem>
      )}
    />
  );
};

export default DropDown;
