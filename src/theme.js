import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff7b47", // Vibrant Orange
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1e3a5f",
      contrastText: "#ffffff",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
      light: "#ECECEC",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
      black: "#000000",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: { fontSize: "3rem", fontWeight: 700, color: "#ffffff" },
    h2: { fontSize: "2.5rem", fontWeight: 600, color: "#ffffff" },
    h3: { fontSize: "2rem", fontWeight: 600, color: "#ffffff" },
    body1: { fontSize: "1rem", fontWeight: 400, color: "#b0b0b0" },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          padding: "10px 20px",
          transition: "all 0.3s ease",
          "&:hover": { opacity: 0.9 },
        },
        containedPrimary: {
          backgroundColor: "#ff7b47",
          "&:hover": { backgroundColor: "#e0693d" },
        },
        outlinedPrimary: {
          borderColor: "#ff7b47",
          color: "#ff7b47",
          "&:hover": { backgroundColor: "rgba(255, 123, 71, 0.1)" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1e1e",
          borderRadius: "12px",
          padding: "16px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        },
      },
    },
    // ✅ Apply black text color to all TextField inputs
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#000000", // Ensures text color is black
        },
        input: {
          color: "#000000", // Sets the input text color to black
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#b0b0b0", // Optional: Border color
          },
          "&:hover fieldset": {
            borderColor: "#ff7b47", // Border changes to orange on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "#ff7b47", // Border when focused
          },
        },
        input: {
          color: "#000000", // Ensures input text color is black
        },
      },
    },
  },
});

export default theme;
