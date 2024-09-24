import { TextField, InputAdornment, Box, Theme, Popper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DropDownType } from "./consts";
import Typography from "../Typography/Typography";
import { TypographyTypes } from "../Typography/consts";

export const renderInput = (
  type: DropDownType,
  params: any,
  label: string,
  style: any,
  showSearchIcon: boolean
) => {
  return type === DropDownType.REGULAR ? (
    <TextField
      {...params}
      label={
        <Typography type={TypographyTypes.BODY_REGULAR_14} label={label} />
      }
      sx={style}
      variant="outlined"
      inputProps={{ ...params.inputProps, readOnly: true }}
    />
  ) : showSearchIcon ? (
    <TextField
      {...params}
      placeholder={label}
      variant="outlined"
      sx={style}
      InputProps={{
        ...params.InputProps,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon style={{ cursor: "pointer" }} />
          </InputAdornment>
        ),
      }}
    />
  ) : (
    <TextField {...params} sx={style} placeholder={label} variant="outlined" />
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
      <Typography type={TypographyTypes.BODY_REGULAR} label={option.label} />
    </Box>
  );
};
