import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice"; // Adjust path as needed

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");

  // State for Avatar Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Handle Avatar Menu
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle Logout
  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 40px",
          [theme.breakpoints.up("sm")]: {
            padding: "10px 80px",
          },
        }}
      >
        {/* Company Name */}
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
        >
          ConsultPro
        </Typography>

        {/* Navigation Tabs & Login Button (All Aligned to the Right) */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, ml: "auto" }}>
          {[
            { label: "Home", path: "/" },
            { label: "Appointments", path: "/appointments" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              sx={{
                color: "white",
                fontSize: "16px",
                fontWeight: 300,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {item.label}
            </Button>
          ))}

          {/* Conditionally Render Login Button or Avatar */}
          {!userId ? (
            <Button
              variant="outlined"
              component={Link}
              to="/login"
              sx={{
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                fontSize: "16px",
                fontWeight: 500,
                px: "24px",
                py: "8px",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                },
              }}
            >
              Login
            </Button>
          ) : (
            <>
              <IconButton onClick={handleAvatarClick} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: theme.palette.primary.main }}></Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  elevation: 3,
                  sx: {
                    mt: "45px",
                  },
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
