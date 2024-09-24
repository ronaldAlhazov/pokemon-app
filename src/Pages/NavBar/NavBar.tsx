import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../Components/Button/ButtonComponent";
import { ButtonSize, ButtonType } from "../../Components/Button/consts";
import { colors } from "../../global-styles";
import Image from "../../Components/Image/Image";
type NavBarProps = {};

const NavBar = ({}: NavBarProps) => {
  const navigate = useNavigate();

  // Function to handle navigation on button click
  const handleNavigation =
    (path: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      navigate(path);
    };
  return (
    <AppBar position="static" color="default">
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "72px",
          backgroundColor: colors.NEUTRALS.White,
        }}
      >
        <Box display="flex" alignItems="center" sx={{ gap: "40px" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => navigate("/")}
          >
            <Image
              src="/PokemonLogo.png"
              alt="Pokémon Logo"
              imgWidth="150px"
              imgHeight="55px"
              containerWidth="150px"
              containerHeight="55px"
            />
          </IconButton>
          <Box display="flex" alignItems="center" sx={{ gap: "16px" }}>
            <ButtonComponent
              label="All Pokémon"
              type={ButtonType.BUTTON_HEADER}
              size={ButtonSize.HEADER}
              disabled={false}
              onClick={handleNavigation("/all-pokemons")}
            />
            <ButtonComponent
              label="My Pokémon"
              type={ButtonType.BUTTON_HEADER}
              size={ButtonSize.HEADER}
              disabled={false}
              onClick={handleNavigation("/my-pokemons")}
            />
          </Box>
        </Box>
        <ButtonComponent
          label="Start a Fight"
          type={ButtonType.PRIMARY}
          size={ButtonSize.HEADER_FIGHT}
          disabled={false}
          onClick={handleNavigation("/fight-arena")}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
