import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CustomButton = ({ children, variant, ...props }) => {
  const theme = useTheme(); 

  return (
    <Button
      variant={variant}
      sx={{
        padding: "12px 24px",
        borderRadius: "30px",
        fontSize: "16px",
        fontWeight: "bold",
        backgroundColor:
          variant === "contained" ? theme.palette.primary.main : "transparent",
        border:
          variant === "outlined"
            ? `2px solid ${theme.palette.text.primary}`
            : "none", 
        color: theme.palette.text.primary,
        "&:hover": {
          backgroundColor:
            variant === "contained"
              ? theme.palette.primary.dark
              : theme.palette.text.primary,
          color:
            variant === "outlined"
              ? theme.palette.primary.main
              : theme.palette.text.primary,
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
