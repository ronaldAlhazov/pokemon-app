import React, { useEffect, useState } from "react";
import Typography from "../../Components/Typography/Typography";
import { TypographyTypes } from "../../Components/Typography/consts";
import HeaderPokemonView from "./components/HeaderPokemonView/HeaderPokemonView";
import { ViewType } from "./components/HeaderPokemonView/consts";
import { sortType } from "../../Components/Table/consts";

type PokemoneViewProps = {
  title: string;
};

const PokemonView = ({ title }: PokemoneViewProps) => {
  const [searchBy, setSearchBy] = useState("");
  const [data, setData] = useState(null);

  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  const [sortBy, setSortBy] = useState({ col: "", order: sortType.ASC });
  const [viewOption, setViewOption] = useState<ViewType>(ViewType.TABLE);
  useEffect(() => {
    fetch("/pokemon.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    console.log(sortBy.col);
  }, [sortBy]);
  useEffect(() => {
    console.log(searchBy);
  }, [searchBy]);
  useEffect(() => {
    console.log(viewOption);
  }, [viewOption]);
  return (
    <div>
      <Typography type={TypographyTypes.HEADING_LARGE_MEDIUM} label={title} />
      <HeaderPokemonView
        setSearchBy={setSearchBy}
        setSortOrder={setSortBy}
        viewType={viewOption}
        setViewType={setViewOption}
      />
    </div>
  );
};

export default PokemonView;
