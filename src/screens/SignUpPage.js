import { useState } from "react";
import {
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
import SignupImg from "../assets/login.jpg"; // Change image accordingly
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <Grid container sx={{ height: "100vh", mb: "-25px" }}>
      {/* Left Section - Signup Form */}
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

        {/* Signup Form */}
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
            Sign Up
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, color: "gray" }}>
            Create your account to get started
          </Typography>

          {/* Full Name */}
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            margin="normal"
            type="text"
          />

          {/* Email */}
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            margin="normal"
            type="email"
          />

          {/* Password */}
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

          {/* Confirm Password */}
          <TextField
            fullWidth
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            type={showConfirmPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Signup Button */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>

          {/* Already have an account? */}
          <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
            Already have an account?{" "}
            <Link href="/login" color="primary">
              Login
            </Link>
          </Typography>
        </Box>
      </Grid>

      {/* Right Section - Full Height Image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.5)), url(${SignupImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      />
    </Grid>
  );
};

export default Signup;
