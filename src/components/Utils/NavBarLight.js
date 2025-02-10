import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const NavBarLight = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: theme.palette.background.light,
        boxShadow: theme.shadows[0],
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
                color: "black",
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

          {/* Login Button */}
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarLight;
