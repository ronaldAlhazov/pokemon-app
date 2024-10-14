import { SxProps } from "@mui/material";
import { MouseEvent } from "react";
import {
  GridComparatorFn,
  GridEventListener,
  GridRenderCellParams,
  GridSortModel,
} from "@mui/x-data-grid";
import { sortType } from "./consts";
export type TableCol = {
  title: string;
  field: string;
  width?: number;
  flex?: number;
  minWidth?: number;
  renderCell?: (params: GridRenderCellParams) => React.ReactNode;
};

export type TableProps = {
  cols: TableCol[];
  rows: any[];
  handleRowClick: GridEventListener<"rowClick">;
  style?: SxProps;
  headerClassName?: string;
  disableColumnSorting?: boolean;
  disableColumnMenu?: boolean;
  sortBy?: { col: string; order: sortType };
  noRowMessage?: string;
};
