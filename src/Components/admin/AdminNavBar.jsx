import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard,
  People,
  Article,
  ShoppingCart,
  Chat,
  Notifications,
  Settings,
  Logout,
} from "@mui/icons-material";

const AdminNavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: "Dashboard", icon: <Dashboard /> },
    { text: "Users", icon: <People /> },
    { text: "Blog", icon: <Article /> },
    { text: "Logout", icon: <Logout /> },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box width={250} role="presentation" onClick={toggleDrawer}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                component="div" 
                onClick={() => navigate(`/admin/${item.text.toLowerCase()}`)}
                sx={{ cursor: "pointer" }} // Ensures clickable styling
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default AdminNavBar;
