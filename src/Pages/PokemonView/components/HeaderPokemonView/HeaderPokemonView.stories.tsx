import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import HeaderPokemonView from "./HeaderPokemonView";
import { ViewType } from "./consts";
import { sortType } from "../../../../Components/Table/consts";

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
    const [sortBy, setSortBy] = useState({ col: "", order: sortType.ASC });
    const [viewTypee, setViewType] = useState<ViewType>(ViewType.TABLE);

    return (
      <HeaderPokemonView
        {...args}
        setSearchBy={setSearchBy}
        setSortOrder={setSortBy}
        viewType={viewTypee}
        setViewType={setViewType}
      />
    );
  },
  args: {
    viewType: ViewType.TABLE,
  },
};

export const Default = Template;
