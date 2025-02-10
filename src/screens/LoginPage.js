import { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginImg from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <Grid container sx={{ height: "100vh", mb: "-25px" }}>
      {/* Left Section - Login Form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 4,
          pl: 20,
        }}
      >
        {/* Company Name */}
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          sx={{
            mb: 4,
            position: "absolute",
            top: 30,
            left: "150px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")} // Navigate to home when clicked
        >
          ConsultPro
        </Typography>

        {/* Login Form */}
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
            Login
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Don't you have an account?{" "}
            <Link href="/signup" color="primary">
              Signup
            </Link>
          </Typography>
          {/* Email Field */}
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            margin="normal"
            type="email"
          />

          {/* Password Field with Eye Icon */}
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type={showPassword ? "text" : "password"}
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

          {/* Forgot Password Link */}
          <Box sx={{ textAlign: "right", mb: 2 }}>
            <Link href="#" variant="body2" color="primary">
              Forgot Password?
            </Link>
          </Box>

          {/* Login Button */}
          <Button fullWidth variant="contained" color="primary" size="large">
            Login
          </Button>

          {/* Extra Text */}
          <Typography
            variant="body2"
            sx={{ textAlign: "center", mt: 2, color: "gray" }}
          >
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </Typography>
        </Box>
      </Grid>

      {/* Right Section - Full Height Image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.5)), url(${LoginImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      />
    </Grid>
  );
};

export default Login;
