import React from "react";
import { Card as MuiCard } from "@mui/material";

import { CardProps } from "./types";
import { CardActionArea, CardContent, CardMedia } from "@mui/material";
import Typography from "../Typography/Typography";
import { TypographyTypes } from "../Typography/consts";
import { colors } from "../../global-styles";

const Card = ({ id, img, name, power }: CardProps) => {
  return (
    <MuiCard>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} />
        <CardContent>
          <Typography
            label={id}
            type={TypographyTypes.CUSTOM}
            weight={400}
            size={16}
            line={26}
            color={colors.NEUTRALS._200}
          />
          <Typography
            label={name}
            type={TypographyTypes.CUSTOM}
            weight={400}
            size={24}
            line={26}
          />
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

export default Card;
