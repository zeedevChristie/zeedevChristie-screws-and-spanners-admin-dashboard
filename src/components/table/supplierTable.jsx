import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const suppliers = [
    {
        id: 1,
        firstname: "Mia",
        lastname: "Wilson",
        email: "mia.wilson@example.com",
        gender: "Female",
        dateOfBirth: "07-20-1993",
        phone: "159486753",
        address: "Charlotte",
        joinedDate: "12-15-2024",
        supply: "plumbing materials",
    },
    {
        id: 2,
        firstname: "Liam",
        lastname: "Smith",
        email: "liam.smith@example.com",
        gender: "Male",
        dateOfBirth: "05-14-1985",
        phone: "123456789",
        address: "New York",
        joinedDate: "11-20-2023",
        supply: "electrical materials",
    },
    {
        id: 3,
        firstname: "Emma",
        lastname: "Johnson",
        email: "emma.johnson@example.com",
        gender: "Female",
        dateOfBirth: "09-10-1990",
        phone: "987654321",
        address: "Los Angeles",
        joinedDate: "10-05-2022",
        supply: "construction materials",
    },
    {
        id: 4,
        firstname: "Noah",
        lastname: "Brown",
        email: "noah.brown@example.com",
        gender: "Male",
        dateOfBirth: "03-22-1988",
        phone: "456123789",
        address: "Chicago",
        joinedDate: "08-15-2021",
        supply: "gardening tools",
    },
    {
        id: 5,
        firstname: "Olivia",
        lastname: "Jones",
        email: "olivia.jones@example.com",
        gender: "Female",
        dateOfBirth: "12-30-1995",
        phone: "321654987",
        address: "Houston",
        joinedDate: "07-25-2020",
        supply: "cleaning supplies",
    },
    {
        id: 6,
        firstname: "William",
        lastname: "Garcia",
        email: "william.garcia@example.com",
        gender: "Male",
        dateOfBirth: "11-11-1982",
        phone: "789123456",
        address: "Phoenix",
        joinedDate: "06-10-2019",
        supply: "office supplies",
    },
    {
        id: 7,
        firstname: "Sophia",
        lastname: "Martinez",
        email: "sophia.martinez@example.com",
        gender: "Female",
        dateOfBirth: "04-18-1998",
        phone: "654789321",
        address: "Philadelphia",
        joinedDate: "05-05-2018",
        supply: "medical supplies",
    },
    {
        id: 8,
        firstname: "James",
        lastname: "Rodriguez",
        email: "james.rodriguez@example.com",
        gender: "Male",
        dateOfBirth: "02-25-1987",
        phone: "852963741",
        address: "San Antonio",
        joinedDate: "04-01-2017",
        supply: "automotive parts",
    },
    {
        id: 9,
        firstname: "Isabella",
        lastname: "Hernandez",
        email: "isabella.hernandez@example.com",
        gender: "Female",
        dateOfBirth: "08-05-1992",
        phone: "963852741",
        address: "San Diego",
        joinedDate: "03-20-2016",
        supply: "furniture",
    },
    {
        id: 10,
        firstname: "Benjamin",
        lastname: "Lopez",
        email: "benjamin.lopez@example.com",
        gender: "Male",
        dateOfBirth: "01-15-1983",
        phone: "741852963",
        address: "Dallas",
        joinedDate: "02-10-2015",
        supply: "kitchenware",
    },
    {
        id: 11,
        firstname: "Ava",
        lastname: "Gonzalez",
        email: "ava.gonzalez@example.com",
        gender: "Female",
        dateOfBirth: "06-28-1991",
        phone: "159753486",
        address: "San Jose",
        joinedDate: "01-05-2014",
        supply: "stationery",
    },
    {
        id: 12,
        firstname: "Lucas",
        lastname: "Perez",
        email: "lucas.perez@example.com",
        gender: "Male",
        dateOfBirth: "10-12-1986",
        phone: "357159486",
        address: "Austin",
        joinedDate: "12-25-2013",
        supply: "sports equipment",
    },
    {
        id: 13,
        firstname: "Charlotte",
        lastname: "Wilson",
        email: "charlotte.wilson@example.com",
        gender: "Female",
        dateOfBirth: "07-20-1993",
        phone: "951753486",
        address: "Jacksonville",
        joinedDate: "11-15-2012",
        supply: "toys",
    },
    {
        id: 14,
        firstname: "Henry",
        lastname: "Anderson",
        email: "henry.anderson@example.com",
        gender: "Male",
        dateOfBirth: "05-14-1985",
        phone: "123789456",
        address: "Fort Worth",
        joinedDate: "10-10-2011",
        supply: "books",
    },
    {
        id: 15,
        firstname: "Amelia",
        lastname: "Thomas",
        email: "amelia.thomas@example.com",
        gender: "Female",
        dateOfBirth: "09-10-1990",
        phone: "789456123",
        address: "Columbus",
        joinedDate: "09-05-2010",
        supply: "clothing",
    },
    {
        id: 16,
        firstname: "Alexander",
        lastname: "Taylor",
        email: "alexander.taylor@example.com",
        gender: "Male",
        dateOfBirth: "03-22-1988",
        phone: "456789123",
        address: "Charlotte",
        joinedDate: "08-15-2009",
        supply: "footwear",
    },
    {
        id: 17,
        firstname: "Mia",
        lastname: "Moore",
        email: "mia.moore@example.com",
        gender: "Female",
        dateOfBirth: "12-30-1995",
        phone: "321987654",
        address: "San Francisco",
        joinedDate: "07-25-2008",
        supply: "cosmetics",
    },
    {
        id: 18,
        firstname: "Daniel",
        lastname: "Jackson",
        email: "daniel.jackson@example.com",
        gender: "Male",
        dateOfBirth: "11-11-1982",
        phone: "789654123",
        address: "Indianapolis",
        joinedDate: "06-10-2007",
        supply: "jewelry",
    },
    {
        id: 19,
        firstname: "Harper",
        lastname: "White",
        email: "harper.white@example.com",
        gender: "Female",
        dateOfBirth: "04-18-1998",
        phone: "654123789",
        address: "Seattle",
        joinedDate: "05-05-2006",
        supply: "pet supplies",
    },
    {
        id: 20,
        firstname: "Matthew",
        lastname: "Harris",
        email: "matthew.harris@example.com",
        gender: "Male",
        dateOfBirth: "02-25-1987",
        phone: "852741963",
        address: "Denver",
        joinedDate: "04-01-2005",
        supply: "musical instruments",
    }
];

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
    { field: "supply", headerName: "Supply", editable: "true" },
];

const SupplierTable = () => {
  return (
    <div className="px-4 h-[63vh] w-[84vw]  overflow-auto ">
      <div className="flex justify-between p-2">
        <h2> Product Suppliers</h2>
        <Link to="/dashboard/createNewSupplier">
          <h2 className="border-2 bg-yellow-100 rounded-lg p-2">
            {" "}
            Create New Supplier
          </h2>
        </Link>
      </div>
      <DataGrid
        rows={suppliers}
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

export default SupplierTable;
