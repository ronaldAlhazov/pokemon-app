import { useState } from "react";
import { DropdownProps, DropdownOption } from "./types";
import { Autocomplete, TextField, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; // Import the search icon
import { DropDownType } from "./consts";

const DropDown = ({
  type = DropDownType.REGULAR,
  options,
  value,
  onChange,
  label = "",
  style,
}: DropdownProps) => {
  const [showSearchIcon, setShowSearchIcon] = useState(
    type == DropDownType.SEARCH
  );
  const handleChange = (event: any, newValue: DropdownOption | null) => {
    setShowSearchIcon(false);
    if (onChange && newValue) {
      onChange(newValue.value);
    } else if (!newValue) {
      onChange("");
      setShowSearchIcon(type == DropDownType.SEARCH);
    }
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      value={options.find((option) => option.value === value) || null}
      onChange={handleChange}
      renderInput={(params) =>
        !showSearchIcon ? (
          <TextField {...params} label={label} sx={style} variant="outlined" />
        ) : (
          <TextField
            {...params}
            placeholder={label}
            sx={style}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ cursor: "pointer" }} />
                </InputAdornment>
              ),
            }}
          />
        )
      }
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
            {option.image && (
              <img
                src={option.image}
                alt={option.label}
                style={{ width: 24, height: 24, borderRadius: "50%" }}
              />
            )}
            {option.label} {option.value}
          </Box>
        );
      }}
    />
  );
};

export default DropDown;
