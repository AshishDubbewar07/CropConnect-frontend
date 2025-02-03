import React, { useState } from "react";
import { Box, TextField, MenuItem, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, Delete, Visibility } from "@mui/icons-material";

// Sample User Data
const initialUsers = [
  { id: 1, name: "Ramesh Kumar", type: "Farmer", location: "Pune" },
  { id: 2, name: "Suresh Traders", type: "Wholesaler", location: "Mumbai" },
  { id: 3, name: "Amit Patil", type: "Farmer", location: "Nagpur" },
  { id: 4, name: "Global Agro", type: "Wholesaler", location: "Chennai" },
];

const UserDashboard = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");

  // Filtered Data
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) &&
    (filterType === "All" || user.type === filterType)
  );

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "type", headerName: "User Type", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <>
          {/* <IconButton color="primary">
            <Visibility />
          </IconButton> */}
          <IconButton color="warning">
            <Edit />
          </IconButton>
          <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
            <Delete />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box p={3}>
      <h2>User Management</h2>
      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="Search Users"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
        <TextField
          select
          label="Filter by Type"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          variant="outlined"
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Farmer">Farmer</MenuItem>
          <MenuItem value="Wholesaler">Wholesaler</MenuItem>
        </TextField>
      </Box>
      <DataGrid
        rows={filteredUsers}
        columns={columns}
        pageSize={5}
        autoHeight
      />
    </Box>
  );
};

export default UserDashboard;
