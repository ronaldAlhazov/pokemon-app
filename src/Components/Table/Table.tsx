import {
  DataGrid,
  GridColDef,
  GridSortModel,
  gridStringOrNumberComparator,
} from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { TableProps } from "./types";
import CustomFooter from "./Components/CustomFooter";
import { sortType } from "./consts";
import CustomNoResultsOverlay from "./Components/CustomNoResultsOverlay";

const Table = ({
  cols,
  rows,
  handleRowClick,
  style,
  headerClassName,
  disableColumnMenu = true,
  disableColumnSorting = true,
  sortBy = { col: "", order: sortType.ASC },
  noRowMessage = "no rows",
}: TableProps) => {
  const columns: GridColDef[] = cols.map((col) => ({
    field: col.field,
    headerName: col.title,
    headerClassName: headerClassName,
    width: col.width || 150,
    minWidth: col.minWidth || 0,
    flex: col.flex || 0,
    getSortComparator: (sortDirection) => {
      const modifier = sortDirection === "desc" ? -1 : 1;

      return (value1, value2, cellParams1, cellParams2) => {
        if (value1 === null) {
          return 1;
        }
        if (value2 === null) {
          return -1;
        }
        return (
          modifier *
          gridStringOrNumberComparator(value1, value2, cellParams1, cellParams2)
        );
      };
    },
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
    <Paper sx={{ maxHeight: 700, height: "100%", width: "100%" }}>
      <DataGrid
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        disableColumnMenu={disableColumnMenu}
        disableColumnSorting={disableColumnSorting}
        rows={rows}
        rowHeight={72}
        columns={columns}
        onRowClick={handleRowClick}
        slots={{
          footer: CustomFooter,
          noRowsOverlay: () => (
            <CustomNoResultsOverlay message={noRowMessage} />
          ),
        }}
        sortModel={sortModel}
        sx={style}
      />
    </Paper>
  );
};

export default Table;
