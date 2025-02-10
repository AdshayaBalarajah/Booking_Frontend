import React from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "../components/LandingPage/CustomButton";
import Banner from "../assets/Banner.jpg";
import { useTheme } from "@mui/material/styles";
import Navbar from "../components/Utils/NavBar";
import ServicesSection from "../components/LandingPage/ServicesSection";
import Testimonials from "../components/LandingPage/Testimonials";
import Footer from "../components/Utils/Footer";
import WhyChooseUs from "../components/LandingPage/WhyChooseUs";

const LandingPage = () => {
  const theme = useTheme(); // Access the theme

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.65)), url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar />
        {/* Text Content */}
        <Box
          sx={{ textAlign: "center", position: "relative", zIndex: 1, mt: 5 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Poppins, sans-serif", // Using Poppins font from theme
              fontWeight: 700, // Bold weight for the heading
              color: theme.palette.text.primary, // Color from theme
              marginBottom: 2, // Space below the heading
            }}
          >
            Innovate, Secure, and Scale with <br />
            Expert IT Solutions!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins, sans-serif", // Matching font for subheading
              fontWeight: 300, // Light weight for the subheading
              color: theme.palette.text.secondary, // Color from theme
              opacity: 0.8,
              marginTop: 1,
              maxWidth: 800,
              margin: "0 auto", // Center the text
            }}
          >
            From software development to cloud transformation and cybersecurity,
            we provide expert consulting to drive your business forward.
          </Typography>

          {/* Buttons */}
          <Box sx={{ mt: 4 }}>
            <CustomButton variant="contained" color="primary">
              Get an Appointment
            </CustomButton>
            <CustomButton variant="outlined" sx={{ ml: 2 }}>
              Learn More
            </CustomButton>
          </Box>
        </Box>
      </Box>
      {/* Our Services Section */}
      <ServicesSection />
      {/* Why choose Us Section */}
      <WhyChooseUs />
      {/* Testimonials Page */}
      <Testimonials />
      {/* Footer component */}
      <Footer />
    </>
  );
};

export default LandingPage;
