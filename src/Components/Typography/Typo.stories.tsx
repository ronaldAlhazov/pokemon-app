import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";
import { TypographyTypes } from "./consts";

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: "Typography",
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary Button
export const HEADING_XLARGE_BOLD: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.HEADING_XLARGE_BOLD,
  },
};

export const HEADING_XLARGE_MEDIUM: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.HEADING_XLARGE_MEDIUM,
  },
};
export const HEADING_LARGE_BOLD: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.HEADING_LARGE_BOLD,
  },
};

export const HEADING_LARGE_MEDIUM: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.HEADING_LARGE_MEDIUM,
  },
};

export const HEADING_LARGE_REGULAR: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.HEADING_LARGE_REGULAR,
  },
};
export const HEADING_MEDIUM_BOLD: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.HEADING_MEDIUM_BOLD,
  },
};
export const HEADING_MEDIUM_MEDIUM: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.HEADING_MEDIUM_MEDIUM,
  },
};

export const HEADING_MEDIUM_REGULAR: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.HEADING_MEDIUM_REGULAR,
  },
};
export const SUBHEADING_BOLD: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.SUBHEADING_BOLD,
  },
};

export const SUBHEADING_MEDIUM: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.SUBHEADING_MEDIUM,
  },
};

export const BODY_BOLD: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.BODY_BOLD,
  },
};

export const SUBHEADING_REGULAR: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.SUBHEADING_REGULAR,
  },
};

export const BODY_MEDIUM: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.BODY_MEDIUM,
  },
};

export const CAPTION_BOLD: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.CAPTION_BOLD,
  },
};

export const CAPTION_MEDIUM: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.CAPTION_MEDIUM,
  },
};
export const CAPTION_REGULAR: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.CAPTION_REGULAR,
  },
};

export const XSMALL_BOLD: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.XSMALL_BOLD,
  },
};

export const XSMALL_MEDIUM: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.XSMALL_MEDIUM,
  },
};

export const XSMALL_REGULAR: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.XSMALL_REGULAR,
  },
};

export const BUTTON_MEDIUM_BIG: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.BUTTON_MEDIUM_BIG,
  },
};
export const BUTTON_SMALL: Story = {
  args: {
    label: "Typo",
    type: TypographyTypes.BUTTON_SMALL,
  },
};
