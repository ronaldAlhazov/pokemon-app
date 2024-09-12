import type { Meta, StoryObj } from "@storybook/react";
import DropDown from "./DropDown";
import React, { useState } from "react";
import { DropDownType } from "./consts";

const meta: Meta<typeof DropDown> = {
  component: DropDown,
  title: "DropDown",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const dropdown: Story = {
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState("assxs");

    return (
      <DropDown
        {...args}
        value={selectedOption}
        onChange={(val: string) => {
          setSelectedOption(val);
          console.log(val);
        }}
      />
    );
  },
  args: {
    dropDownType: DropDownType.CLASSIC,
    options: [
      {
        label: "Option 1",
        value: "option1",
      },
      {
        label: "Option 2",
        value: "option2",
      },
      {
        label: "Option 3",
        value: "option3",
        image:
          "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA",
      }, // No image for this option
    ],
    label: "sort by",
  },
};

export const Search: Story = {
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState("assxs");

    return (
      <DropDown
        {...args}
        value={selectedOption}
        onChange={(val: string) => {
          setSelectedOption(val);
          console.log(val);
        }}
      />
    );
  },
  args: {
    dropDownType: DropDownType.SEARCH,
    options: [
      {
        label: "Option 1",
        value: "option1",
      },
      {
        label: "Option 2",
        value: "option2",
      },
      {
        label: "Option 3",
        value: "option3",
        image:
          "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA",
      }, // No image for this option
    ],
    label: "serach by",
  },
};
