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
    options: [
      {
        label: "label 112346789",
        value: "value 112346789",
      },
      {
        label: "label 2",
        value: "value 2",
      },
      {
        label: "label 3",
        value: "value 3",
        image:
          "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA",
      },
    ],
    label: "search by",
    style: {
      width: 150,
      height: 38,
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#A8AEB5",
        },
        "&:hover fieldset": {
          borderColor: "#A8AEB5",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#A8AEB5",
        },
      },
      "& .MuiInputLabel-root": {
        color: "#44484C",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#44484C",
      },
    },
  },
};

export const search: Story = {
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
    type: DropDownType.SEARCH,
    options: [
      {
        label: "label 1",
        value: "value 1",
      },
      {
        label: "label 2",
        value: "value 2",
      },
      {
        label: "label 3",
        value: "value 3",
        image:
          "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA",
      },
    ],
    label: "sort by",
    style: {
      width: 150,
      height: 38,
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#A8AEB5",
        },
        "&:hover fieldset": {
          borderColor: "#A8AEB5",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#A8AEB5",
        },
      },
      "& .MuiInputLabel-root": {
        color: "#44484C",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#44484C",
      },
    },
  },
};
