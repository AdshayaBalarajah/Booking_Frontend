import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/authSlice";

const AdminLoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    if (!formData.password.trim()) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await login({
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        const userData = response.data;

        // Check if the logged-in user is an admin, considering case sensitivity
        if (userData.role.toUpperCase() === "ADMIN") {
          dispatch(loginSuccess(userData));
          alert("Login successful! ✅");
          navigate("/admin");
        } else {
          alert("Admin access denied! ❌");
        }
      }
    } catch (error) {
      alert("Invalid username or password ❌");
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#ECECEC",
        padding: 2,
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
            boxShadow: 6,
            backgroundColor: "white",
            "&:hover": {
              boxShadow: 12,
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 2, fontWeight: 700, color: "primary.main" }}
          >
            Admin Login
          </Typography>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              sx={{
                mt: 2,
                padding: "12px 20px",
                fontSize: "16px",
                fontWeight: 600,
              }}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Link href="/forgot-password" color="primary">
              Forgot Password?
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminLoginPage;
