import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import Card from "../Card/Card";
import { CardsGridProps } from "./types";
import { gridContainerStyle, gridItemStyle } from "./styles";

const CardsGrid = ({ cards }: CardsGridProps) => {
  return (
    <Box sx={gridContainerStyle}>
      <Grid container spacing={3} columns={{ xs: 4, sm: 12, md: 12, lg: 12 }}>
        {cards.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={gridItemStyle}
          >
            <Card {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardsGrid;
