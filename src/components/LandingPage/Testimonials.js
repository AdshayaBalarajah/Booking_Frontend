import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";

const testimonials = [
  {
    name: "John Doe",
    review:
      "Absolutely amazing service! They helped us streamline our cloud infrastructure and improve security.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Sarah Smith",
    review:
      "The consultation was incredibly insightful, and their expertise in cybersecurity is top-notch.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.5,
  },
  {
    name: "Michael Brown",
    review:
      "Professional and knowledgeable team. Their solutions helped optimize our business workflow!",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "background.light" }}>
      <Container>
        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "primary.main",
            mb: 5,
          }}
        >
          What Our Clients Say
        </Typography>

        {/* Testimonials Grid */}
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  backgroundColor: "white",
                  textAlign: "center",
                  p: 3,
                }}
              >
                {/* User Image */}
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    width: 100,
                    height: 100,
                    margin: "auto",
                    mb: 1,
                    border: "3px solid #f5f5f5",
                  }}
                />

                {/* Review Content */}
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {testimonial.name}
                  </Typography>
                  <Rating
                    value={testimonial.rating}
                    precision={0.5}
                    readOnly
                    sx={{ mb: 1 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mt: 1 }}
                  >
                    "{testimonial.review}"
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

export default Testimonials;
