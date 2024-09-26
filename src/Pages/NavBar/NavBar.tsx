import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../Components/Button/ButtonComponent";
import { ButtonSize, ButtonType } from "../../Components/Button/consts";
import { colors } from "../../global-styles";
import Image from "../../Components/Image/Image";
import { Paths } from "./consts";
type NavBarProps = {
  setPath: (val: Paths) => void;
};

const NavBar = ({ setPath }: NavBarProps) => {
  const navigate = useNavigate();
  const [inAllPokemons, setInAllPokemons] = useState<boolean>(true);
  const [inMyPokemons, setInMyPokemons] = useState<boolean>(false);
  // Function to handle navigation on button click
  const handleNavigation =
    (path: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (Paths.ALL_POKEMONS === path) {
        setPath(Paths.ALL_POKEMONS);
        setInAllPokemons(true);
        setInMyPokemons(false);
      } else if (Paths.MY_POKEMONS === path) {
        setPath(Paths.MY_POKEMONS);
        setInAllPokemons(false);
        setInMyPokemons(true);
      } else {
        setPath(Paths.FIGHT_ARENA);
        setInAllPokemons(false);
        setInMyPokemons(false);
      }

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
              label="All Pokemons"
              type={ButtonType.BUTTON_HEADER}
              size={ButtonSize.HEADER}
              disabled={false}
              onClick={handleNavigation(Paths.ALL_POKEMONS)}
              isPressed={inAllPokemons}
            />
            <ButtonComponent
              label="My Pokemons"
              type={ButtonType.BUTTON_HEADER}
              size={ButtonSize.HEADER}
              disabled={false}
              onClick={handleNavigation(Paths.MY_POKEMONS)}
              isPressed={inMyPokemons}
            />
          </Box>
        </Box>
        <ButtonComponent
          label="Start a Fight"
          type={ButtonType.PRIMARY}
          size={ButtonSize.HEADER_FIGHT}
          disabled={false}
          onClick={handleNavigation(Paths.FIGHT_ARENA)}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
