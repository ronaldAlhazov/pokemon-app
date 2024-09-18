import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import HeaderPokemonView from "./HeaderPokemonView";
import { viewType } from "./consts";

const meta: Meta<typeof HeaderPokemonView> = {
  component: HeaderPokemonView,
  title: "HeaderPokemonView",
};

export default meta;

type Story = StoryObj<typeof HeaderPokemonView>;

const Template: Story = {
  render: (args) => {
    const [searchBy, setSearchBy] = useState("");
    const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
    const [sortBy, setSortBy] = useState("");
    const [viewTypee, setViewType] = useState<viewType>(viewType.TABLE);

    return (
      <HeaderPokemonView
        {...args}
        searchBy={searchBy}
        setSearchBy={setSearchBy}
        isSearchButtonClicked={isSearchButtonClicked}
        sortBy={sortBy}
        setSortBy={setSortBy}
        viewType={viewTypee}
        setViewType={setViewType}
      />
    );
  },
  args: {
    isSearchButtonClicked: false,
    sortBy: "",
    viewType: viewType.TABLE,
  },
};

export const Default = Template;
