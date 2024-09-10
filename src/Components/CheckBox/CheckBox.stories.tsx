import type { Meta, StoryObj } from "@storybook/react";
import CheckBox from "./CheckBox";
import { CheckBoxType } from "./consts";

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  title: "CheckBoxComponent",
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary Button
export const Primary: Story = {
  args: {
    type: CheckBoxType.NOT_CHECKED,
    onChange: (event) => console.log("Primary Button clicked"),
    label: "CheckBox",
    disabled: false,
  },
};

export const CHECKED: Story = {
  args: {
    type: CheckBoxType.CHECKED,
    onChange: (event) => console.log("Primary Button clicked"),
    label: "CheckBox",
    disabled: false,
  },
};
export const indeterminate: Story = {
  args: {
    type: CheckBoxType.HALF,
    onChange: (event) => console.log(" Button clicked"),
    label: "CheckBox",
    disabled: false,
  },
};
