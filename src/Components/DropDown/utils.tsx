import { TextField, InputAdornment, Box, Theme, Popper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DropDownType } from "./consts";
import Typography from "../Typography/Typography";
import { TypographyTypes } from "../Typography/consts";
import { useEffect } from "react";

export const renderInput = (
  type: DropDownType,
  params: any,
  label: string,
  style: any,
  showSearchIcon: boolean
) => {
  return type == DropDownType.REGULAR ? (
    <TextField
      {...params}
      label={label}
      sx={style}
      InputLabelProps={{
        style: {
          fontFamily: "Roboto",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "22px",
          textAlign: "center",
        },
      }}
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
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      {...optionProps}
    >
      {option.image && (
        <Box
          sx={{
            width: 160,
            display: "flex",
            alignItems: "center",
            pr: 2,
            "& > img": {
              flexShrink: 0,
              paddingRight: "4px",
            },
          }}
        >
          <img
            src={option.image}
            alt={option.label}
            style={{ width: 24, height: 24, borderRadius: "50%" }}
          />
          <Typography
            type={TypographyTypes.BODY_REGULAR}
            label={option.value}
          />
        </Box>
      )}

      <Typography type={TypographyTypes.BODY_REGULAR} label={option.label} />
    </Box>
  );
};
const styles = (theme: Theme) => ({
  popper: {
    maxWidth: "fit-content",
  },
});

type OptionType = {
  title: string;
};

interface PopperMyProps {}

export const PopperMy: React.FC<PopperMyProps> = (props) => {
  return (
    <Popper
      open={false}
      {...props}
      style={styles({} as Theme).popper}
      placement="bottom-start"
    />
  );
};
