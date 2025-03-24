import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ServiceProviders from "../../data/serviceProviders";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", editable: "true" },
  { field: "firstname", headerName: "First name", editable: "true" },
  { field: "lastname", headerName: "Last name", editable: "true" },
  { field: "email", headerName: "Email", type: "email", editable: "true" }, 
  { field: "phone", headerName: "phone", type: "number", editable: "true" },
  {
    field: "dateOfBirth",
    headerName: "Date of Birth",
    editable: "true",
  },
  { field: "address", headerName: "Address", editable: "true" },
  { field: "joinedDate", headerName: "Joined Date", editable: "true" },
  { field: "service", headerName: "Service", editable: "true" },
];

const ServiceProviderTable = () => {
  return (
    <div className="px-4 h-[63vh] w-[84vw]  overflow-auto ">
      <div className="flex justify-between p-2">
        <h2> Service Providers</h2>
        <Link to="/dashboard/createNewServiceProvider">
          <h2 className="border-2 bg-red-400 rounded-lg p-2">
            {" "}
            Create New Service Provider
          </h2>
        </Link>
      </div>
      <DataGrid
        rows={ServiceProviders}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: 0 } },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ "& .MuiDataGrid-columnsManagement": {} }}
      />
    </div>
  );
};

export default ServiceProviderTable;
