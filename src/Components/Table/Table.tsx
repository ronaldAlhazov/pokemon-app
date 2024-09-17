import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridSortModel,
} from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { TableProps } from "./types";
import CustomFooter from "./CustomFooter";
import { sortType } from "./consts";

const Table = ({
  cols,
  rows,
  onRowClick: onClick,
  style,
  headerClassName,
  headerTypo,
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
    renderCell: col.renderCell || ((params) => params.value),
    renderHeader: () => headerTypo(col.title),
  }));

  const sortModel: GridSortModel = sortBy
    ? [{ field: sortBy.col, sort: sortBy.order }]
    : [];
  const handleRowClick: GridEventListener<"rowClick"> = (params, event) => {
    onClick(params.row.name);
  };

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
