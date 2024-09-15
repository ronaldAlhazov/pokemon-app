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
        renderInput(params, label, style, showSearchIcon)
      }
      renderOption={renderOption}
    />
  );
};

export default DropDown;
