import { styled } from "styled-components";
import { colors } from "../../global-styles";

export const getTableStyle = () => ({
  boxShadow: "none",
  "& .MuiDataGrid-cell": {
    border: "none",
    textAlign: "left",
  },
  "& .MuiDataGrid-columnSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-row": {
    borderBottom: "1px solid #E0E0E0",
  },
  "& .theme--header": {
    backgroundColor: colors.PRIMATY._50,
    textAlign: "left",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  "& .MuiDataGrid-root": {
    width: "100%",
    boxShadow: "none",
  },
});
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
  background-color: ${colors.NEUTRALS._100};
  padding: 16px 40px 30px;
  height: 100%;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 30px;
`;

export const modalStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};
export const ColStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`;
