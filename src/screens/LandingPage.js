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
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const theme = useTheme();
  const navigate = useNavigate(); 

  // Function to handle button click
  const handleBookAppointment = () => {
    navigate("/appointments"); // Navigate to AppointmentPage
  };

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
        
        <Box
          sx={{ textAlign: "center", position: "relative", zIndex: 1, mt: 5 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: theme.palette.text.primary, 
              marginBottom: 2,
            }}
          >
            Innovate, Secure, and Scale with <br />
            Expert IT Solutions!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 300, 
              color: theme.palette.text.secondary,
              opacity: 0.8,
              marginTop: 1,
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            From software development to cloud transformation and cybersecurity,
            we provide expert consulting to drive your business forward.
          </Typography>

          {/* Buttons */}
          <Box sx={{ mt: 4 }}>
            <CustomButton
              variant="contained"
              color="primary"
              onClick={handleBookAppointment}
            >
              Book an Appointment
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
