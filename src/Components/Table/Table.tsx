import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridSortModel,
} from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { TableProps } from "./types";
import CustomFooter from "./Components/CustomFooter";
import { sortType } from "./consts";

const Table = ({
  cols,
  rows,
  handleRowClick,
  style,
  headerClassName,
  disableColumnMenu = true,
  disableColumnSorting = true,
  sortBy = { col: "", order: sortType.ASC },
}: TableProps) => {
  const columns: GridColDef[] = cols.map((col) => ({
    field: col.field,
    headerName: col.title,
    headerClassName: headerClassName,
    width: col.width || 150,
    minWidth: col.minWidth || 0,
    flex: col.flex || 0,
    sortComparator: col.sortComparator,
    renderCell: col.renderCell || ((params) => params.value),
    renderHeader: () => (
      <div
        style={{
          fontFamily: "Mulish, sans-serif",
          fontSize: "14px",
          fontWeight: "bold",
          lineHeight: "22px",
          textAlign: "left",
        }}
      >
        {col.title}
      </div>
    ),
  }));

  const sortModel: GridSortModel = sortBy
    ? [{ field: sortBy.col, sort: sortBy.order }]
    : [];

  return (
    <Paper>
      <DataGrid
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        disableColumnMenu={disableColumnMenu}
        disableColumnSorting={disableColumnSorting}
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
        slots={{
          footer: CustomFooter,
        }}
        sortModel={sortModel}
        sx={style}
      />
    </Paper>
  );
};

export default Table;
