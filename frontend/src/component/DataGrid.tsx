import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridRowParams,
} from "@mui/x-data-grid";
import { FC } from "react";

interface CustomDataGridProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  handleRowClick: (params: GridRowParams) => void;
}

const CustomDataGrid: FC<CustomDataGridProps> = ({
  rows,
  columns,
  handleRowClick,
}) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSizeOptions={[5]}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? "even-row" : "odd-row"
      }
      onRowClick={handleRowClick}
      sx={{
        "& .MuiDataGrid-root": {
          backgroundColor: "#1d1d1d",
        },
        "& .MuiDataGrid-cell": {
          color: "#ffffff",
        },
        "& .MuiDataGrid-columnHeader": {
          backgroundColor: "#333333",
          color: "#ffffff",
        },
        "& .MuiDataGrid-row.even-row": {
          backgroundColor: "#2c2c2c",
        },
        "& .MuiDataGrid-row.odd-row": {
          backgroundColor: "#1d1d1d",
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: "#333333",
          color: "#ffffff",
        },
        "& .MuiDataGrid-toolbarContainer": {
          backgroundColor: "#333333",
          color: "#ffffff",
        },
      }}
    />
  );
};

export default CustomDataGrid;
