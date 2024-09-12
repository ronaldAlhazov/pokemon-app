import { DropdownProps, DropdownOption } from "./types";
import { Autocomplete, TextField, Box } from "@mui/material";

const DropDown = ({
  options,
  value,
  onChange,
  label = "",
  style,
}: DropdownProps) => {
  const handleChange = (event: any, newValue: DropdownOption | null) => {
    if (onChange && newValue) {
      onChange(newValue.value);
    } else if (!newValue) {
      onChange("");
    }
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      value={options.find((option) => option.value === value) || null}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField {...params} label={label} sx={style} variant="outlined" />
      )}
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
