import { styled } from "styled-components";
import { colors } from "../../global-styles";

export const getTableStyle = () => ({
  "& .MuiDataGrid-cell": {
    border: "none",
    textAlign: "left",
  },
  "& .MuiDataGrid-columnSeparator": {
    display: "none",
  },
  "& .theme--header": {
    backgroundColor: "#EBEFF6",
    textAlign: "left",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  "& .MuiDataGrid-root": {
    width: "100%",
  },
});
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
  width: 100%;
  background-color: ${colors.NEUTRALS._100};
  padding: 16px 40px 30px;
`;
