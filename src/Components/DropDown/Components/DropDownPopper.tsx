import { Popper, Theme } from "@mui/material";
import { styles } from "./styles";

interface DropDownPopperProps {}

export const DropDownPopper: React.FC<DropDownPopperProps> = (props) => {
  return (
    <Popper
      open={false}
      {...props}
      style={styles({} as Theme).popper}
      placement="bottom-start"
    />
  );
};
