import type { Meta, StoryObj } from "@storybook/react";
import ModalCard from "./ModalCard";

const meta: Meta<typeof ModalCard> = {
  component: ModalCard,
  title: "ModalCard",
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary Button
export const Primary: Story = {
  args: {
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
    name: "Bulbasaur",
    id: "#001",

    description:
      "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
    hight: 2,
    weight: 15.2,
    category: "seed",
    abilities: "Overgrow",
  },
};
