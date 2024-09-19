import React, { useEffect, useState } from "react";
import { Tabs, Tab as MuiTab } from "@mui/material";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { ViewType } from "../consts";
import { colors } from "../../../../../global-styles";
import { getTabStyle } from "./styles";
import Typography from "../../../../../Components/Typography/Typography";
import { TypographyTypes } from "../../../../../Components/Typography/consts";
import { CustomTabsProps } from "./types";

const Tab = ({ setTypeView }: CustomTabsProps) => {
  const [currentView, setCurrentView] = useState<number>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTypeView(newValue === 0 ? ViewType.TABLE : ViewType.CARDS);
    setCurrentView(newValue);
  };

  const handleMouseEnter = (index: number) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(null);

  return (
    <Tabs
      value={currentView}
      onChange={handleChange}
      TabIndicatorProps={{
        style: { display: "none" },
      }}
    >
      <MuiTab
        icon={<FormatListBulletedIcon sx={{ color: colors.CUSTOM._600 }} />}
        iconPosition="start"
        label={
          <Typography
            type={
              currentView === 0
                ? TypographyTypes.BODY_BOLD
                : hoverIndex === 0
                  ? TypographyTypes.BODY_BOLD
                  : TypographyTypes.BODY_REGULAR
            }
            label="List"
            color={colors.CUSTOM.BLACK}
          />
        }
        sx={getTabStyle}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      />
      <MuiTab
        icon={<CalendarViewMonthIcon sx={{ color: colors.CUSTOM._600 }} />}
        iconPosition="start"
        label={
          <Typography
            type={
              currentView === 1
                ? TypographyTypes.BODY_BOLD
                : hoverIndex === 1
                  ? TypographyTypes.BODY_BOLD
                  : TypographyTypes.BODY_REGULAR
            }
            color={colors.CUSTOM.BLACK}
            label="Card"
          />
        }
        sx={getTabStyle}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      />
    </Tabs>
  );
};

export default Tab;
