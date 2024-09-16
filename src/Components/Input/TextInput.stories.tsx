import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "TextInput",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeHolder: "input here",
    disabled: false,
    onClickIconStart: (value: string) =>
      console.log("Primary Button clicked:", value),
    IconStart: SearchIcon,
    IconEnd: ClearIcon,
    showIconStart: true,
    showIconEnd: false,
  },
};
