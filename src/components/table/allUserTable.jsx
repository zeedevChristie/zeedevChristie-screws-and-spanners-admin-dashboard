import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const columns = [
  { field: "id", headerName: "ID", editable: true, width: 70, align: "center", headerAlign: "center" },
  { field: "firstname", headerName: "First name", editable: true, width: 130, align: "center", headerAlign: "center" },
  { field: "lastname", headerName: "Last name", editable: true, width: 130, align: "center", headerAlign: "center" },
  { field: "phone", headerName: "Phone number", editable: true, width: 150, align: "center", headerAlign: "center" },
  { field: "email", headerName: "Email", editable: true, width: 200, align: "center", headerAlign: "center" },
  { field: "created_at", headerName: "Created at", editable: true, width: 195, align: "center", headerAlign: "center" },
  { field: "type", headerName: "Type", editable: true, align: "center", headerAlign: "center" },
];

const AllUserTable = ({setUserData}) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    fetch("https://admin-c2zf.onrender.com/api/v1/service/all/users", {
      headers: {
        "Content-Type": "application/json",
        // "ngrok-skip-browser-warning": "69420",
      },
    })
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
        setUserData(data)
        setFilteredUsers(data.users);
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      const filtered = users.filter(user => {
        const createdAt = dayjs(user.created_at);
        return createdAt.isAfter(dayjs(startDate).startOf("day")) &&
               createdAt.isBefore(dayjs(endDate).endOf("day"));
      });
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [startDate, endDate, users]);

  return (
    <div className="px-4 h-[65vh] w-[84vw] overflow-auto">
      <div className="flex justify-between p-2">
        <h2>New Users</h2>
        <Link to="/dashboard/createNewCustomer">
          <h2 className="border-2 bg-[#cb6c6c] rounded-lg p-2">Create New User</h2>
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
        rows={filteredUsers}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: 0 } },
        }}
        sx={{
          "& .MuiDataGrid-columnHeaders": { borderBottom: "2px solid #ccc" },
          "& .MuiDataGrid-cell": {
            borderRight: "1px solid #ccc",
            borderBottom: "1px solid #ccc",
          },
          "& .MuiDataGrid-row": { borderBottom: "1px solid #ccc" },
          "& .MuiDataGrid-footerContainer": { borderTop: "2px solid #ccc" },
        }}
      />
    </div>
  );
};

export default AllUserTable;
