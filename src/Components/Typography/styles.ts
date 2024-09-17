import "@fontsource/mulish";
import styled from "styled-components";
import { TypographyTypes } from "./consts";

export const StyledTypography = styled.div<{
  type: TypographyTypes;
  weight?: number;
  size?: number;
  line?: number;
  color?: string;
}>`
  font-family: "Mulish", sans-serif;
  color: ${(props) => props.color || "inherit"};

  ${(props) => {
    switch (props.type) {
      case TypographyTypes.HEADING_XLARGE_BOLD:
        return `
          font-size: 28px;
          font-weight: bold;
          line-height: 37px;

        `;
      case TypographyTypes.HEADING_XLARGE_MEDIUM:
        return `
          font-size: 28px;
          font-weight: medium;
          line-height: 37px;
        `;
      case TypographyTypes.HEADING_LARGE_BOLD:
        return `  
            font-size: 24px;
            font-weight: bold;
            line-height: 34px;
            `;
      case TypographyTypes.HEADING_LARGE_MEDIUM:
        return `  
            font-size: 24px;
            font-weight: 500;
            line-height: 34px;
            `;
      case TypographyTypes.HEADING_LARGE_REGULAR:
        return `  
            font-size: 24px;
            font-weight: normal;
            line-height: 34px;
            `;
      case TypographyTypes.HEADING_MEDIUM_BOLD:
        return `  
            font-size: 18px;
            font-weight: bold;
            line-height: 27px;
            `;
      case TypographyTypes.HEADING_MEDIUM_MEDIUM:
        return `  
            font-size: 18px;
            font-weight: 500;
            line-height: 27px;
            `;
      case TypographyTypes.HEADING_MEDIUM_REGULAR:
        return `  
            font-size: 18px;
            font-weight: normal;
            line-height: 27px;
            `;
      case TypographyTypes.SUBHEADING_BOLD:
        return `  
            font-size: 16px;
            font-weight: bold;
            line-height: 24px;
            `;
      case TypographyTypes.SUBHEADING_MEDIUM:
        return `  
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            `;
      case TypographyTypes.SUBHEADING_REGULAR:
        return `  
            font-size: 16px;
            font-weight: normal;
            line-height: 24px;
            `;
      case TypographyTypes.BODY_BOLD:
        return `  
            font-size: 14px;
            font-weight: bold;
            line-height: 22px;
            `;
      case TypographyTypes.BODY_MEDIUM:
        return `  
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
            `;
      case TypographyTypes.BODY_REGULAR:
        return `  
            font-size: 14px;
            font-weight: normal;
            line-height: 22px;
            `;
      case TypographyTypes.CAPTION_BOLD:
        return `  
            font-size: 12px;
            font-weight: bold;
            line-height: 19px;
            `;
      case TypographyTypes.CAPTION_MEDIUM:
        return `  
            font-size: 12px;
            font-weight: 500;
            line-height: 19px;
            `;
      case TypographyTypes.CAPTION_REGULAR:
        return `  
            font-size: 12px;
            font-weight: normal;
            line-height: 19px;
            `;
      case TypographyTypes.XSMALL_BOLD:
        return `  
            font-size: 11px;
            font-weight: bold;
            line-height: 16px;
            `;
      case TypographyTypes.XSMALL_MEDIUM:
        return `  
            font-size: 11px;
            font-weight: 500;
            line-height: 16px;
            `;
      case TypographyTypes.XSMALL_REGULAR:
        return `  
            font-size: 11px;
            font-weight: normal;
            line-height: 16px;
            `;
      case TypographyTypes.BUTTON_MEDIUM_BIG:
        return `  
            font-size: 16px;
            font-weight: 500;
            line-height: 20px;
            `;
      case TypographyTypes.BUTTON_SMALL:
        return `  
            font-size: 14px;
            font-weight: normal;
            line-height: 14px;
            `;
      case TypographyTypes.CUSTOM:
        return `
    font-size: ${props.size || 14}px;
    font-weight: ${props.weight || "normal"};
    line-height: ${props.line || 22}px;
  `;
      default:
        return `  
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
            `;
    }
  }}
`;
