import React from "react";
import { TableProps } from "./types";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const Table = ({ options }: TableProps) => {
  const columns: GridColDef[] = [
    {
      field: "avatar",
      headerName: "",
      width: 70,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="avatar"
          style={{ width: "50px", height: "50px" }}
        />
      ),
      cellClassName: "avatar-cell",
      headerClassName: "avatar-header",
    },
    { field: "name", headerName: "Name", width: 350 },
    { field: "id", headerName: "ID", width: 170 },

    { field: "description", headerName: "Description", width: 544 },
    { field: "Power", headerName: "Power", width: 119 },
    { field: "hp", headerName: "HP", width: 119 },
  ];

  const rows = options.map((item, index) => ({
    id: index,
    ...item,
  }));
  const paginationModel: GridPaginationModel = {
    page: 0,
    pageSize: 5,
  };
  return (
    <Paper elevation={3} style={{ padding: 16, height: 450, width: "100%" }}>
      <DataGrid
        rows={rows}
        rowHeight={70}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={(model) => console.log(model)}
        sx={{
          "& .avatar-cell": {
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          },
          "& .avatar-header": {
            justifyContent: "center",
          },
        }}
      />
    </Paper>
  );
};

export default Table;
