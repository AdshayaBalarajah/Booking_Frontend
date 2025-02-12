// import React, { useState } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Link,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let tempErrors = {};
//     if (!formData.fullName.trim())
//       tempErrors.fullName = "Full Name is required";
//     if (!formData.email.trim()) tempErrors.email = "Email is required";
//     if (!formData.password.trim()) tempErrors.password = "Password is required";
//     if (formData.password !== formData.confirmPassword)
//       tempErrors.confirmPassword = "Passwords do not match";
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "http://your-api-endpoint/signup",
//         formData
//       );

//       if (response.status === 200) {
//         alert("Signup successful! ✅");
//         navigate("/login"); // Redirect to login page after successful sign-up
//       }
//     } catch (error) {
//       alert("Signup failed ❌");
//     }
//     setLoading(false);
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         backgroundColor: "#ECECEC",
//         padding: 2,
//       }}
//     >
//       <Container maxWidth="xs">
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             padding: 3,
//             borderRadius: 2,
//             boxShadow: 6,
//             backgroundColor: "white",
//             transition: "all 0.3s ease-in-out",
//             "&:hover": {
//               boxShadow: 12,
//             },
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               mb: 2,
//               fontWeight: 700,
//               color: "primary.main",
//             }}
//           >
//             Sign Up
//           </Typography>

//           <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//             {/* Full Name field */}
//             <TextField
//               label="Full Name"
//               variant="outlined"
//               fullWidth
//               sx={{ mb: 2 }}
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               error={!!errors.fullName}
//               helperText={errors.fullName}
//               required
//             />

//             {/* Email field */}
//             <TextField
//               label="Email Address"
//               variant="outlined"
//               fullWidth
//               sx={{ mb: 2 }}
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               error={!!errors.email}
//               helperText={errors.email}
//               required
//             />

//             {/* Password field */}
//             <TextField
//               label="Password"
//               type="password"
//               variant="outlined"
//               fullWidth
//               sx={{ mb: 2 }}
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               error={!!errors.password}
//               helperText={errors.password}
//               required
//             />

//             {/* Confirm Password field */}
//             <TextField
//               label="Confirm Password"
//               type="password"
//               variant="outlined"
//               fullWidth
//               sx={{ mb: 2 }}
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               error={!!errors.confirmPassword}
//               helperText={errors.confirmPassword}
//               required
//             />

//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               type="submit"
//               sx={{
//                 mt: 2,
//                 padding: "12px 20px",
//                 fontSize: "16px",
//                 fontWeight: 600,
//                 "&:hover": {
//                   backgroundColor: "primary.dark",
//                 },
//               }}
//               disabled={loading}
//             >
//               {loading ? "Signing up..." : "Sign Up"}
//             </Button>
//           </form>

//           <Typography variant="body2" sx={{ mt: 2 }}>
//             Already have an account?{" "}
//             <Link href="/login" color="primary">
//               Login
//             </Link>
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default SignUpPage;
