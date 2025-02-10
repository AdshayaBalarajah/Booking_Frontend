import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud"; // Cloud Services
import SecurityIcon from "@mui/icons-material/Security"; // Cybersecurity
import CodeIcon from "@mui/icons-material/Code"; // Software Development
import DataUsageIcon from "@mui/icons-material/DataUsage"; // Data Analytics
import LightbulbIcon from "@mui/icons-material/Lightbulb"; // IT Consulting

const services = [
  {
    title: "Cloud Solutions",
    description:
      "We provide scalable cloud services, including AWS, Azure, and GCP, for seamless business operations.",
    icon: <CloudIcon sx={{ fontSize: 50, color: "primary.main" }} />,
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business with our cybersecurity solutions, including risk assessments and threat detection.",
    icon: <SecurityIcon sx={{ fontSize: 50, color: "primary.main" }} />,
  },
  {
    title: "Software Development",
    description:
      "Build powerful, scalable applications with our expert full-stack development and Deploy services.",
    icon: <CodeIcon sx={{ fontSize: 50, color: "primary.main" }} />,
  },
  {
    title: "Data Analytics",
    description:
      "Leverage data-driven insights to enhance decision-making and optimize business performance.",
    icon: <DataUsageIcon sx={{ fontSize: 50, color: "primary.main" }} />,
  },
  {
    title: "IT Consulting",
    description:
      "Transform your IT strategy with expert consulting on digital transformation and system architecture.",
    icon: <LightbulbIcon sx={{ fontSize: 50, color: "primary.main" }} />,
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ backgroundColor: "#ECECEC", py: 8, px: 4 }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 4, color: "secondary.main" }}
        >
          Our Services
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "white",
                  borderRadius: 3,
                  boxShadow: 2,
                  p: 2,
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": { boxShadow: 5 },
                }}
              >
                <CardContent>
                  {service.icon}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mt: 2, color: "primary.main" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mt: 1 }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
