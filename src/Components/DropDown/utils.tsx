import { TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const renderInput = (
  params: any,
  label: string,
  style: any,
  showSearchIcon: boolean
) => {
  return !showSearchIcon ? (
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
  );
};
export const renderOption = (props: any, option: any) => {
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
};
