import type { Meta, StoryObj } from "@storybook/react";
import FightCard from "./FightCard";
import { FightType } from "./consts";

const meta: Meta<typeof FightCard> = {
  component: FightCard,
  title: "FightCard",
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
    fightType: FightType.ME,
    startHealth: 90,
    currentHealth: 90,
    minHealth: 40,
  },
};
