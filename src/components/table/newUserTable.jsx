import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import userData from "../../data/data";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", editable: "true" },
  { field: "firstname", headerName: "First name", editable: "true" },
  { field: "lastname", headerName: "Last name", editable: "true" },
  { field: "phone", headerName: "phone", type: "number" ,editable:"true"},  
  {
    field: "age",
    headerName: "Age",
    type: "number",
    editable: "true",
  },
  { field: "email", headerName: "Email", type: "email" , editable:"true"},
  { field: "address", headerName: "Address" , editable:"true"},
  { field: "joinedDate", headerName: "Joined Date" , editable:"true"},
  {field:"type",headerName:"Type",editable:"true"}  
];

const NewUserTable = () => {
  return (

   
    
   


    <div className="px-4 h-[63vh] w-[84vw]  overflow-auto " >
       <div className="flex justify-between p-2">
        <h2> New Users</h2>
        <Link to="/dashboard/createNewUser" >
        <h2 className="border-2 bg-blue-200 rounded-lg p-2"> Create New Users</h2>
        </Link>
       
       </div>
      <DataGrid 
        rows={userData}
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

export default NewUserTable;
