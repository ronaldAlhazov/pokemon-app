import React, { useEffect } from "react";
import {
  useGridApiContext,
  useGridSelector,
  gridPaginationModelSelector,
  gridPageCountSelector,
  gridPageSizeSelector,
} from "@mui/x-data-grid";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { colors } from "../../../global-styles";
import {
  dropDownContainerStyle,
  footerContainerStyle,
  formControlStyle,
  selectStyle,
} from "./styles";

const CustomFooter = () => {
  const apiRef = useGridApiContext();
  const paginationModel = useGridSelector(apiRef, gridPaginationModelSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const pageSize = useGridSelector(apiRef, gridPageSizeSelector);
  const rowsCount = apiRef.current.getRowsCount();

  const start = paginationModel.page * pageSize + 1;
  const end = Math.min((paginationModel.page + 1) * pageSize, rowsCount);

  const defaultPageSize = 10;

  const handlePageSizeChange = (event: SelectChangeEvent<number>) => {
    const value = event.target.value as number;
    apiRef.current.setPageSize(value);
  };

  useEffect(() => {
    if (pageSize === undefined || pageSize === null) {
      apiRef.current.setPageSize(defaultPageSize);
    }
  }, [apiRef, pageSize]);

  return (
    <Box sx={footerContainerStyle}>
      <Box sx={dropDownContainerStyle}>
        <Typography variant="body2" sx={{ marginRight: 1 }}>
          Rows per page:
        </Typography>
        <FormControl size="small" sx={formControlStyle}>
          <Select
            value={pageSize || defaultPageSize}
            onChange={handlePageSizeChange}
            size="small"
            sx={selectStyle}
          >
            {[10, 25, 50, 100].map((size) => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body2" sx={{ marginRight: 2 }}>
          {start}-{end} of {rowsCount} items
        </Typography>
        <Pagination
          count={pageCount}
          page={paginationModel.page + 1}
          onChange={(event, value) => apiRef.current.setPage(value - 1)}
          renderItem={(item) => {
            if (
              item.type === "start-ellipsis" ||
              item.type === "end-ellipsis"
            ) {
              return null;
            }
            return (
              <PaginationItem
                {...item}
                sx={{
                  display: item.type === "page" ? "none" : "inline-flex",
                }}
              />
            );
          }}
        />
      </Box>
    </Box>
  );
};

export default CustomFooter;
