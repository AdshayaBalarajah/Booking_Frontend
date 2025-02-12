import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { getAllAppointments } from "../api/admin";
import { getAvailableSlots } from "../api/appointment";
import AvailableSlotsTable from "../components/Admin/AvailableSlotsTable";
import BookedAppointmentsTable from "../components/Admin/BookedAppointmentsTable";

const AdminDashboard = () => {
  const theme = useTheme();
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedAppointments, setBookedAppointments] = useState([]);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const slotsResponse = await getAvailableSlots(today);
        setAvailableSlots(slotsResponse);

        const appointmentsResponse = await getAllAppointments();
        setBookedAppointments(appointmentsResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.light, // Light theme background
        p: 3,
      }}
    >
      {/* Top Bar - Company Name */}
      <Typography variant="h2" fontWeight="bold" sx={{ mb: 0, color: "primary.main" }}>
        ConsultPro
      </Typography>
      <Typography variant="h6" fontWeight="200" sx={{ mb: 3, color: "black" }}>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Available Free Slots */}
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "white", borderRadius: 2, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "black", mb: 2 }}>
                📅 Available Free Slots (Today)
              </Typography>
              <AvailableSlotsTable slots={availableSlots} today={today} />
            </CardContent>
          </Card>
        </Grid>

        {/* View All Booked Appointments */}
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "white", borderRadius: 2, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "black", mb: 2 }}>
                📋 View All Booked Appointments
              </Typography>
              <BookedAppointmentsTable appointments={bookedAppointments} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
