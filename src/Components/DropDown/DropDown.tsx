import { useState } from "react";
import { Autocomplete } from "@mui/material";
import { DropdownProps, DropdownOption } from "./types";
import { DropDownType } from "./consts";
import { PopperMy, renderInput, renderOption } from "./utils";

const DropDown = ({
  type = DropDownType.REGULAR,
  options,
  value,
  onChange,
  label = "",
  style,
}: DropdownProps) => {
  const [showSearchIcon, setShowSearchIcon] = useState(
    type === DropDownType.SEARCH
  );

  const handleChange = (newValue: DropdownOption | null) => {
    setShowSearchIcon(false);
    const valueToSearch = newValue?.value ?? "";
    onChange(valueToSearch);
    if (!newValue) {
      setShowSearchIcon(type === DropDownType.SEARCH); // Show search icon again
    }
  };

  return (
    <Autocomplete
      PopperComponent={PopperMy}
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
