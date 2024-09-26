import { TextField, InputAdornment, Box, Theme, Popper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DropDownType } from "./consts";
import Typography from "../Typography/Typography";
import { TypographyTypes } from "../Typography/consts";
import { useEffect } from "react";
import Image from "../Image/Image";

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
      inputProps={{ ...params.inputProps, height: 100, readOnly: true }}
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
          }}
        >
          <div
            style={{
              paddingRight: "8px",
              paddingTop: "8px",
            }}
          >
            <Image
              src={option.image}
              alt={option.label}
              imgWidth="26px"
              imgHeight="26px"
              containerWidth="26px"
              containerHeight="26px"
              backgroundColor="transparent"
            />
          </div>
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
