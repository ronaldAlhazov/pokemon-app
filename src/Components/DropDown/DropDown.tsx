import { useState } from "react";
import { DropdownProps, DropdownOption } from "./types";
import { Autocomplete } from "@mui/material";
import { DropDownType } from "./consts";
import { renderInput, renderOption } from "./utils";

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
  const handleChange = (newValue: DropdownOption | null) => {
    setShowSearchIcon(false);
    if (onChange && newValue) {
      onChange(newValue.value);
    } else if (!newValue) {
      onChange("");
      setShowSearchIcon(type == DropDownType.SEARCH); // Show search icon again
    }
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      value={options.find((option) => option.value === value) || null}
      onChange={(_, newValue) => handleChange(newValue)}
      renderInput={(params) =>
        renderInput(type, params, label, style, showSearchIcon)
      }
      renderOption={renderOption}
    />
  );
};

export default DropDown;
