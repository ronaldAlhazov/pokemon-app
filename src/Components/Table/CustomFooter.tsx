import React from "react";
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
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Pagination,
} from "@mui/material";

function CustomPagination() {
  const apiRef = useGridApiContext();
  const paginationModel = useGridSelector(apiRef, gridPaginationModelSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const pageSize = useGridSelector(apiRef, gridPageSizeSelector);
  const rowsCount = apiRef.current.getRowsCount(); // Get the total number of rows

  // Calculate the current range of items
  const start = paginationModel.page * pageSize + 1;
  const end = Math.min((paginationModel.page + 1) * pageSize, rowsCount);

  // Default page size
  const defaultPageSize = 10;

  // Generate page size options dynamically
  const generatePageSizeOptions = (count: number) => {
    const options = [10, 25, 50];
    const maxOption = Math.min(count, 100); // Cap at 100 for practicality
    if (!options.includes(maxOption)) {
      options.push(maxOption);
    }
    if (!options.includes(defaultPageSize)) {
      options.push(defaultPageSize);
    }
    return Array.from(new Set(options)).sort((a, b) => a - b);
  };

  const pageSizeOptions = generatePageSizeOptions(rowsCount);

  // Handle page size change
  const handlePageSizeChange = (event: SelectChangeEvent<number>) => {
    const value = event.target.value as number;
    apiRef.current.setPageSize(value);
  };

  // Set default page size if not already set
  React.useEffect(() => {
    if (pageSize === undefined || pageSize === null) {
      apiRef.current.setPageSize(defaultPageSize);
    }
  }, [apiRef, pageSize]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body2" sx={{ marginRight: 1 }}>
          Rows per page:
        </Typography>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select
            value={pageSize || defaultPageSize}
            onChange={handlePageSizeChange}
            size="small"
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
        />
      </Box>
    </Box>
  );
}

export default CustomPagination;
