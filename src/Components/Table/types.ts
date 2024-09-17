import { SxProps } from "@mui/material";
import { MouseEvent } from "react";
import { GridRenderCellParams, GridSortModel } from "@mui/x-data-grid";
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
  onRowClick: (event: MouseEvent<HTMLElement>) => void;
  style?: SxProps;
  headerClassName?: string;
  headerTypo: (label: string) => React.ReactNode;
  disableColumnSorting?: boolean;
  disableColumnMenu?: boolean;
  sortBy?: { col: string; order: sortType };
};
