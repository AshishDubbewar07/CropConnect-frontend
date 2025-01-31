import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#2874f0", width: "100%" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ flexGrow: 0 }}>Crop Connect</Typography>
        
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, justifyContent: "center" }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/blog">Blog</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/services">Services</Button>
          <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            width: "250px",
            marginRight: 2,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />


        </Box>

        <Button color="inherit" component={Link} to="/login">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
