import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import  DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockCall from "../hooks/useStockCall";


const columns = [
  { field: "id", headerName: "#", headerAlign: "center", align:"center", flex: 0.5 },

  {
    field: "category",
    headerName: "Category",
    flex: 2,
    align: "center",
    minWidth: "80",
  },
  {
    field: "brand",
    headerName: "Brand",
headerAlign: "center",
    flex: 2,
    align: "center",
  },
  {
    field: "stock",
    headerName: "Stock",
    type: "number",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },

  {
    field: "actions",
    headerName: "Actions",
    // type="actions",
    flex: 1,
    headerAlign: "center",
    align: "center",
    getActions: (params) => [
      <GridActionsCellItem icon={<DeleteForeverIcon/>} label="Delete" sx={btnStyle} onClick={() => deleteStockData("products", props.id)} />
    ]
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function ProductTable() {

  const { products } = useSelector((state) => state.stock);
  const {deleteStockData} = useStockCall()
  return (
    <Box sx={{ width: "100%", mt:4 }}>
      <DataGrid
      autoHeight
        rows={products}
        columns={columns}
       
        pageSize={10}
        pageSizeOptions={[25,50,75,100]}
        slots={{toolbar: GridToolbar}}
        disableRowSelectionOnClick
      />
    </Box>
  );

 
}
