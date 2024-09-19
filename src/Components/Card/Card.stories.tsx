import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Card",
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary Button
export const Primary: Story = {
  args: {
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
    name: "Bulbasaur",
    id: "#001",
    power: 30,
    onCardClick: (val: string) => {
      console.log(val);
    },
  },
};
