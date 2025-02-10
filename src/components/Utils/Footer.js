import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        py: 6,
        mb: "-25px",
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* Company Name & Description */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" fontWeight="bold">
              ConsultPro
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "grey.400" }}>
              Your trusted partner for expert IT consultation, cybersecurity,
              and cloud solutions.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight="bold">
              Quick Links
            </Typography>
            {["Home", "Services", "Appointments", "Contact"].map((link) => (
              <Typography key={link} variant="body2" sx={{ mt: 1 }}>
                <Link
                  href={`#${link.toLowerCase()}`}
                  color="inherit"
                  underline="hover"
                >
                  {link}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight="bold">
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "grey.400" }}>
              📧 Email: contact@consultpro.com
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "grey.400" }}>
              📞 Phone: +1 (123) 456-7890
            </Typography>
          </Grid>
        </Grid>

        {/* Social Media Links */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <IconButton href="#" sx={{ color: "white", mx: 1 }}>
            <Facebook />
          </IconButton>
          <IconButton href="#" sx={{ color: "white", mx: 1 }}>
            <Twitter />
          </IconButton>
          <IconButton href="#" sx={{ color: "white", mx: 1 }}>
            <LinkedIn />
          </IconButton>
          <IconButton href="#" sx={{ color: "white", mx: 1 }}>
            <Instagram />
          </IconButton>
        </Box>

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{ textAlign: "center", mt: 3, color: "grey.500" }}
        >
          © {new Date().getFullYear()} ConsultPro. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
