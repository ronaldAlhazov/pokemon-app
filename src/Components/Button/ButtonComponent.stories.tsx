import type { Meta, StoryObj } from "@storybook/react";
import ButtonComponent from "./ButtonComponent";
import { ButtonSize, ButtonType } from "./consts";

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: "ButtonComponent",
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary Button
export const Primary: Story = {
  args: {
    label: "Button",
    type: ButtonType.PRIMARY,
    size: ButtonSize.MEDIUM,
    disabled: false,
    onClick: (event) => console.log("Primary Button clicked"),
  },
};

// Secondary Button
export const Secondary: Story = {
  args: {
    label: "Button",
    type: ButtonType.SECONDARY,
    size: ButtonSize.SMALL,
    disabled: false,
    onClick: (event) => console.log("Secondary Button clicked"),
  },
};
export const Secondary_MEDIUM: Story = {
  args: {
    label: "Button",
    type: ButtonType.SECONDARY,
    size: ButtonSize.MEDIUM,
    disabled: false,
    onClick: (event) => console.log("Secondary Button clicked"),
  },
};

// Small Button
export const SecondaryGray: Story = {
  args: {
    label: "Button",
    type: ButtonType.SECONDARY_GRAY,
    size: ButtonSize.MEDIUM,
    disabled: false,
    onClick: (event) => console.log("Secondary Gray Button clicked"),
  },
};

// Disabled Button
export const Tertiary: Story = {
  args: {
    label: "Button",
    type: ButtonType.TERTIARY,
    size: ButtonSize.MEDIUM,
    disabled: false,
    onClick: (event) => console.log("Tertiary Button clicked"),
  },
};

export const TertiaryGray: Story = {
  args: {
    label: "Button",
    type: ButtonType.TERTIARY_GRAY,
    size: ButtonSize.MEDIUM,
    disabled: false,
    onClick: (event) => console.log("Tertiary-gray Button clicked"),
  },
};
