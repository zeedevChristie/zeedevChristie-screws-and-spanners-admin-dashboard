import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Customer from "../../data/customers";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", editable: "true" },
  { field: "firstname", headerName: "First name", editable: "true" },
  { field: "lastname", headerName: "Last name", editable: "true" },
  { field: "phone", headerName: "phone number", type: "number" ,editable:"true"},  
  {
    field: "dateOfBirth",
    headerName: "Date Of Birth",
    editable: "true",
  },
  { field: "email", headerName: "Email", type: "email" , editable:"true"},
  { field: "address", headerName: "Address" , editable:"true"},
  { field: "joinedDate", headerName: "Joined Date" , editable:"true"},
  
];

const CustomerTable = () => {
  return (

   
    
   


    <div className="px-4 h-[63vh] w-[84vw]  overflow-auto " >
       <div className="flex justify-between p-2">
        <h2> Customers </h2>
        <Link to="/dashboard/createNewCustomer" >
        <h2 className="border-2 bg-green-200 rounded-lg p-2"> Create New Customer</h2>
        </Link>
       
       </div>
      <DataGrid 
        rows={Customer}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: 0 } },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ '& .MuiDataGrid-columnsManagement': {
          
        }}}
        />
        </div>  
  
  );
};

export default CustomerTable;
