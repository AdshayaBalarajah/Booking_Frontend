import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import axios from "axios";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store error message
  const [validationErrors, setValidationErrors] = useState({}); // To store validation errors

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form inputs
    if (!username.trim()) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username is required",
      }));
      return;
    }

    if (!password.trim()) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      return;
    }

    // Clear previous validation errors
    setValidationErrors({});

    try {
      // Make the API call to the backend for login
      const response = await axios.post("http://your-api-endpoint/login", {
        username,
        password,
      });

      // If login is successful, redirect to admin dashboard or another page
      if (response.status === 200) {
        console.log("Login Successful");
        // Redirect to another page, e.g., admin dashboard
        // For example: window.location.href = "/admin";
      }
    } catch (error) {
      // Handle error if login fails
      setError("Invalid username or password");
      console.error("Login failed:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#ECECEC",
        padding: 2, // Added padding for better spacing around the content
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 3,
            borderRadius: 2,
            boxShadow: 6, // Stronger shadow for emphasis
            backgroundColor: "white",
            transition: "all 0.3s ease-in-out", // Smooth transition on hover
            "&:hover": {
              boxShadow: 12, // Darker shadow on hover
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: 700, // Bold title for more emphasis
              color: "primary.main", // Color from theme
            }}
          >
            Admin Login
          </Typography>

          {/* Display error message if login fails */}
          {error && (
            <Typography
              variant="body1"
              sx={{
                color: "error.main",
                mb: 2,
                textAlign: "center", // Centered error message
                fontWeight: 500,
              }}
            >
              {error}
            </Typography>
          )}

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
                "& .MuiInputBase-root": {
                  borderRadius: 2, // Rounded corners for the text field
                },
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              error={!!validationErrors.username}
              helperText={validationErrors.username}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
                "& .MuiInputBase-root": {
                  borderRadius: 2, // Rounded corners for the text field
                },
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              error={!!validationErrors.password}
              helperText={validationErrors.password}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              sx={{
                mt: 2,
                padding: "12px 20px", // Custom padding for the button
                fontSize: "16px", // Font size for the button text
                fontWeight: 600, // Bold text for the button
                "&:hover": {
                  backgroundColor: "primary.dark", // Darker color on hover
                },
              }}
            >
              Login
            </Button>
          </form>

          {/* Forgot Password and Sign Up Links */}
          <Box sx={{ mt: 2, width: "100%", textAlign: "center" }}>
            <Link
              href="/forgot-password"
              sx={{ mr: 2 }}
              color="primary"
              variant="body2"
            >
              Forgot Password?
            </Link>
            <Typography variant="body2" sx={{ display: "inline" }}>
              Don't have an account?{" "}
              <Link href="/signup" color="primary" variant="body2">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminLoginPage;
