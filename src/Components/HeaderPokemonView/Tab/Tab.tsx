import React, { useState } from "react";
import { Tabs, Tab as MuiTab } from "@mui/material";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { sortByOptions, viewType } from "../consts";
type CustomTabsProps = {
  setTypeView: (viewType: viewType) => void;
};

const Tab: React.FC<CustomTabsProps> = ({ setTypeView }) => {
  const [currentView, setCurrentView] = useState<number>();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTypeView(newValue == 0 ? viewType.TABLE : viewType.CARDS);
    setCurrentView(newValue);
    console.log("Selected view:", newValue);
  };
  return (
    <Tabs
      value={currentView}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
      <MuiTab
        icon={<FormatListBulletedIcon />}
        iconPosition="start"
        label="List"
      />
      <MuiTab
        icon={<CalendarViewMonthIcon />}
        iconPosition="start"
        label="Card"
      />
    </Tabs>
  );
};

export default Tab;
