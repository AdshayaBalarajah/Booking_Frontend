import { useState } from "react";
import { Grid, Box, Typography, TextField, Button, Link, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SignupImg from "../assets/login.jpg"; 
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/authSlice";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    if (!formData.password.trim()) tempErrors.password = "Password is required";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await register({
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        alert("Registration successful! ✅");
        dispatch(loginSuccess(response.data));
        navigate("/appointments");
      }
    } catch (error) {
      alert("Registration failed ❌");
    }
    setLoading(false);
  };

  return (
    <Grid container sx={{ height: "100vh", mb: "-25px" }}>
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
          onClick={() => navigate("/")}
        >
          ConsultPro
        </Typography>

        {/* Signup Form */}
        <Box sx={{ width: "100%", maxWidth: 400 }} component="form" onSubmit={handleSubmit}>
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
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={!!errors.fullName}
            helperText={errors.fullName}
          />

          {/* Email */}
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />

          {/* Password */}
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            name="password"
            type={showPassword ? "text" : "password"}
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

          {/* Confirm Password */}
          <TextField
            fullWidth
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Signup Button */}
          <Button fullWidth variant="contained" color="primary" size="large" sx={{ mt: 2 }} type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
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
