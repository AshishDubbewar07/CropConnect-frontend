import React, { useEffect, useState } from "react";
import { Box, TextField, MenuItem, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, Delete } from "@mui/icons-material";
import axios from "axios";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);  // Holds users data
  const [search, setSearch] = useState("");  // For searching
  const [filterType, setFilterType] = useState("All");  // For filtering user types
  const [open, setOpen] = useState(false);  // Dialog state (for update)
  const [selectedUser, setSelectedUser] = useState(null);  // Selected user to update

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/users")
      .then((response) => {
        console.log("API Response:", response.data);
        const formattedUsers = response.data.map((user, index) => ({
          id: user._id || index,
          serialNumber: index + 1, 
          name: user.userName || "Unknown",
          type: user.role || "Unknown",
          location: user.city || "Not Provided",
        }));
        setUsers(formattedUsers);
      })
      .catch((err) => {
        console.error("Error while fetching data:", err);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    (user.name?.toLowerCase() || "").includes(search.toLowerCase()) &&
    (filterType === "All" || user.type.toLowerCase() === filterType.toLowerCase())
  );

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (user) => {
    console.log(user);
    setSelectedUser(user);
    setOpen(true); 
  };

  const handleUpdate = () => {
    const userId = selectedUser.id;  
    console.log("Updating user with ID:", userId);
    console.log(selectedUser);
    axios
      .put(`http://localhost:8080/admin/users/${userId}`, selectedUser)  
      .then((response) => {
        console.log("User updated successfully", response.data);

        const updatedUsers = users.map((user) =>
          user.id === userId ? response.data : user 
        );
        setUsers(updatedUsers);
        setOpen(false);
      })
      .catch((err) => {
        console.error("Error while updating user:", err);
      });
  };

  const columns = [
    { field: "serialNumber", headerName: "Serial No.", width: 90 }, 
    { field: "name", headerName: "Name", flex: 1 },
    { field: "type", headerName: "User Type", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton color="warning" onClick={() => handleEdit(params.row)}>
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
          <MenuItem value="User">User</MenuItem>
        </TextField>
      </Box>
      <DataGrid rows={filteredUsers} columns={columns} pageSize={5} autoHeight getRowId={(row) => row.id} />  {/* Specify getRowId */}

      {/* Dialog for updating user */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Update User</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={selectedUser?.name || ""}
            onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
            margin="normal"
          />
          <TextField
            label="User Type"
            variant="outlined"
            fullWidth
            value={selectedUser?.type || ""}
            onChange={(e) => setSelectedUser({ ...selectedUser, type: e.target.value })}
            margin="normal"
          />
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            value={selectedUser?.location || ""}
            onChange={(e) => setSelectedUser({ ...selectedUser, location: e.target.value })}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserDashboard;
