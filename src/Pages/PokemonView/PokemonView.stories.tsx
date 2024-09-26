import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import PokemonView from "./PokemonView";
const meta: Meta<typeof PokemonView> = {
  component: PokemonView,
  title: "PokemonView",
};

export default meta;

type Story = StoryObj<typeof PokemonView>;

const Template: Story = {
  args: {
    title: "All Pokemones",
  },
};

export const Default = Template;
