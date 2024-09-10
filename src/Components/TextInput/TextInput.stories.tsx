import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "../TextInput/TextInput";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "TextInput",
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary Button
export const Primary: Story = {
  args: {
    label: "Title",
    halperText: "write your name",
    placeHolder: "input here",
    disabled: false,
    onClick: (event) => console.log("Primary Button clicked"),
  },
};
