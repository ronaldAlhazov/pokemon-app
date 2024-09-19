import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import Card from "../Card/Card";
import { CardsGridProps } from "./types";

const CardsGrid = ({ cards }: CardsGridProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12, lg: 12 }}>
        {cards.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "& .MuiPaper-root": {
                width: "322px",
                boxSizing: "border-box",
              },
            }}
          >
            <Card {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardsGrid;
