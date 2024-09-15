import React from "react";
import { TableProps } from "./types";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const Table = ({ options }: TableProps) => {
  const columns: GridColDef[] = [
    {
      field: "avatar",
      headerName: "",
      width: 150,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="avatar"
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    { field: "name", headerName: "Name", width: 150 },
    { field: "id", headerName: "ID", width: 90 },

    { field: "description", headerName: "Description", width: 200 },
    { field: "Power", headerName: "Power", width: 100 },
    { field: "hp", headerName: "HP", width: 100 },
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
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={(model) => console.log(model)} // handle page change
      />
    </Paper>
  );
};

export default Table;
