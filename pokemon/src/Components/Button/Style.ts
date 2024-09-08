import styled from "styled-components";
import Button from "@mui/material/Button";
import { SIZE } from "./Tyeps";

const sizes = {
  [SIZE.SMALL]: { width: "74px", height: "32px" },
  [SIZE.MEDIUM]: { width: "80px", height: "36px" },
  [SIZE.LARGE]: { width: "80px", height: "40px" },
};

export const PrimaryButton = styled(Button)<{ size: SIZE; isPressed: boolean }>`
  && {
    width: ${({ size }) => sizes[size].width};
    height: ${({ size }) => sizes[size].height};
    border: 1px solid;
    color: #ffffff;
    background-color: ${({ isPressed }) => (isPressed ? "#182442" : "#3b5aa6")};
    text-transform: none;
    box-shadow: ${({ isPressed }) =>
      isPressed ? "4px 4px 13px 0px #0000000D inset" : "none"};

    &:hover {
      background-color: #293f74;
    }
    &:disabled {
      border: none;
      color: #a8aeb5;
      background-color: #e3e6e9;
    }
  }
`;
export const SecondaryButton = styled(Button)<{
  size: SIZE;
  isPressed: boolean;
}>`
  && {
    width: ${({ size }) => sizes[size].width};
    height: ${({ size }) => sizes[size].height};
    border: 1px solid #3b5aa6;
    color: #3b5aa6;
    background-color: ${({ isPressed }) => (isPressed ? "#B1BDDB" : "#F2F5F7")};
    text-transform: none;
    box-shadow: ${({ isPressed }) =>
      isPressed ? "4px 4px 13px 0px #0000000D inset" : "none"};

    &:hover {
      background-color: #ebeff6;
    }

    &:disabled {
      color: #c7cdd3;
      border: 1px solid #c7cdd3;

      background-color: #f2f5f7;
    }
  }
`;
export const SecondaryGreyButton = styled(Button)<{
  size: SIZE;
  isPressed: boolean;
}>`
  && {
    width: ${({ size }) => sizes[size].width};
    height: ${({ size }) => sizes[size].height};
    border: 1px solid #44484c;
    color: #44484c;
    background-color: ${({ isPressed }) => (isPressed ? "F2F5F7" : "White")};
    text-transform: none;
    box-shadow: ${({ isPressed }) =>
      isPressed ? "4px 4px 13px 0px #0000000D inset" : "none"};

    &:hover {
      color: #5a6066;
    }

    &:disabled {
      color: #c7cdd3;
      border: 1px solid #c7cdd3;
      background-color: #f2f5f7;
    }
  }
`;
export const TertriaryButton = styled(Button)<{
  size: SIZE;
  isPressed: boolean;
}>`
  && {
    width: ${({ size }) => sizes[size].width};
    height: ${({ size }) => sizes[size].height};
    border: none;
    color: #3b5aa6;
    background-color: ${({ isPressed }) => (isPressed ? "#B1BDDB" : "#F2F5F7")};
    text-transform: none;
    box-shadow: ${({ isPressed }) =>
      isPressed ? "4px 4px 13px 0px #0000000D inset" : "none"};

    &:hover {
      background-color: #ebeff6;
    }

    &:disabled {
      color: #c7cdd3;
      background-color: #f2f5f7;
    }
  }
`;
export const TertriaryGreyButton = styled(Button)<{
  size: SIZE;
  isPressed: boolean;
}>`
  && {
    width: ${({ size }) => sizes[size].width};
    height: ${({ size }) => sizes[size].height};
    color: #44484c;
    background-color: ${({ isPressed }) => (isPressed ? "F2F5F7" : "white")};
    text-transform: none;
    box-shadow: ${({ isPressed }) =>
      isPressed ? "4px 4px 13px 0px #0000000D inset" : "none"};
    &:hover {
      color: #5a6066;
    }

    &:disabled {
      color: #c7cdd3;
      background-color: #f2f5f7;
    }
  }
`;
