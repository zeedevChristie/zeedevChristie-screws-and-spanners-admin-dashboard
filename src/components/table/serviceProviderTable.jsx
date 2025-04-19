import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  {
    field: "id",
    headerName: "ID",
    editable: true,
    width: 70,
    align: "center",
    headerAlign : "center",
    // renderCell: (params) => (
    //   <div style={{ textAlign: "center", color: "#f08080" }}>{params.value}</div>
    // ),
  },
  { field: "firstname", headerName: "First name", editable: true, width: 130,headerAlign : "center", align: "center",},
  { field: "lastname", headerName: "Last name", editable: true, width: 130,headerAlign : "center", align: "center",},
  {
    field: "phone",
    headerName: "Phone number",
    headerAlign : "center",
    editable: true,
    width: 150,
    align: "center",
  },
  // {
  //   field: "dateOfBirth",
  //   headerName: "Date of Birth",
  //   editable: true,
  // },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    editable: true,
    width: 200,
    headerAlign : "center",
    align: "center",
  },
  // { field: "address", headerName: "Address", editable: true },
  { field: "created_at", headerName: "Created at", editable: true, width: 195,align: "center", headerAlign : "center",},
  { field: "type", headerName: "Type", editable: true ,align: "center", headerAlign : "center",},
];

const ServiceProviderTable = () => {
  const [serviceProviders, setServiceProviders] = useState([]);
  const [filteredServiceProviders, setFilteredServiceProviders] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://admin-c2zf.onrender.com/api/v1/service/service/provider",
          {
            method: "GET",
            headers: new Headers({
              "Content-Type": "application/json",
              // "ngrok-skip-browser-warning": "69420",
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data); // Process the data here

       
        setServiceProviders(data.serviceProviders); // Update the rows state with the customers array
      } catch (error) {
        console.log("Error:", error);
      }
    }

    fetchData();
  }, []);

    useEffect(() => {
      if (startDate && endDate) {
        const filtered = serviceProviders.filter(user => {
          const createdAt = dayjs(user.created_at);
          return createdAt.isAfter(dayjs(startDate).startOf("day")) &&
                 createdAt.isBefore(dayjs(endDate).endOf("day"));
        });
        setFilteredServiceProviders(filtered);
      } else {
        setFilteredServiceProviders(serviceProviders);
      }
    }, [startDate, endDate, serviceProviders]);

  return (
    <div className="px-4 h-[63vh] w-[84vw] overflow-auto">
      <div className="flex justify-between p-2">
        <h2> Service Provider </h2>
        <Link to="/dashboard/createNewCustomer">
          <h2 className="border-2 bg-[#cb6c6c] rounded-lg p-2">
            Create New Service Provider
          </h2>
        </Link>
      </div>

      <div className="flex gap-4 mb-4 items-center">
        <label>From:
          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="ml-2 border p-1 rounded" />
        </label>
        <label>To:
          <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="ml-2 border p-1 rounded" />
        </label>
      </div>

      <DataGrid
        rows={filteredServiceProviders} // Use rows state to display customer data
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: 0 } },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "2px solid #ccc", // Add border to column headers
          },
          "& .MuiDataGrid-cell": {
            borderRight: "1px solid #ccc", // Add border to the right of each cell
            borderBottom: "1px solid #ccc", // Add border to the bottom of each cell
          },
          "& .MuiDataGrid-row": {
            borderBottom: "1px solid #ccc", // Add border to each row
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "2px solid #ccc", // Add border to the footer (if you have pagination)
          }
        }}
      />
    </div>
  );
};

export default ServiceProviderTable;
