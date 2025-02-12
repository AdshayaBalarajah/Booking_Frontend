import { useState } from "react";
import { Grid, Box, Typography, TextField, Button, Link, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginImg from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { login } from "../api/auth";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/authSlice";

const Login = () => {
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
        dispatch(loginSuccess(response.data));
        alert("Login successful! ✅");
        navigate("/appointments");
      }
    } catch (error) {
      alert("Login failed ❌");
    }
    setLoading(false);
  };

  return (
    <Grid container sx={{ height: "100vh", mb: "-25px" }}>
      <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", p: 4, pl: 20 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          sx={{ mb: 4, position: "absolute", top: 30, left: "150px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          ConsultPro
        </Typography>
        <Box sx={{ width: "100%", maxWidth: 400 }} component="form" onSubmit={handleSubmit}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
            Login
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have an account?{" "}
            <Link href="/signup" color="primary">
              Signup
            </Link>
          </Typography>
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
          <Box sx={{ textAlign: "right", mb: 2 }}>
            <Link href="#" variant="body2" color="primary">
              Forgot Password?
            </Link>
          </Box>
          <Button fullWidth variant="contained" color="primary" size="large" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
          <Typography variant="body2" sx={{ textAlign: "center", mt: 2, color: "gray" }}>
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </Typography>
        </Box>
      </Grid>
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
