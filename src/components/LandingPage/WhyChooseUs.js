import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Icon for key points
import consultingImage from "../../assets/why.jpg"; // Replace with your actual image path

const points = [
  "Expert team with 10+ years of industry experience.",
  "Cutting-edge cybersecurity and cloud solutions.",
  "Customized IT strategies tailored to your business.",
  "Reliable 24/7 customer support and consultation.",
  "Proven track record of successful digital transformations.",
];

const WhyChooseUs = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "background.default" }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Text Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "primary.main", mb: 2 }}
            >
              Why Choose Us?
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              We provide expert consulting in software development, cloud
              solutions, and cybersecurity to help your business thrive in a
              competitive digital world.
            </Typography>

            {/* Key Points List */}
            <List>
              {points.map((point, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={point}
                    sx={{ color: "text.primary" }}
                  />
                </ListItem>
              ))}
            </List>

            {/* Book Appointment Button */}
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                px: 4,
                py: 1.5,
                fontSize: "16px",
                fontWeight: "bold",
              }}
              onClick={() => console.log("Redirect to booking page")}
            >
              Book an Appointment
            </Button>
          </Grid>

          {/* Right Side - Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={consultingImage}
              alt="Consulting Services"
              sx={{
                width: "100%",
                maxHeight: 400,
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
