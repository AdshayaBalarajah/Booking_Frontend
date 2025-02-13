import { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { getAllAppointments, getAvailableSlots } from "../api/admin";
import { cancelAppointment } from "../api/appointment";
import AvailableSlotsTable from "../components/Admin/AvailableSlotsTable";
import BookedAppointmentsTable from "../components/Admin/BookedAppointmentsTable";

const AdminDashboard = () => {
  const theme = useTheme();
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedAppointments, setBookedAppointments] = useState([]);
  const today = new Date().toISOString().split("T")[0];

  const handleCancel = async (appointmentId) => {
    try {
      console.log("Canceling appointment:", appointmentId);

      const response = await cancelAppointment(appointmentId);

      if (response.success) {
        setBookedAppointments((prevAppointments) =>
          prevAppointments.filter((app) => app.id !== appointmentId)
        );
      } else {
        console.error("Failed to cancel appointment:", response.message);
      }
    } catch (error) {
      console.error("Error canceling appointment:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const slotsResponse = await getAvailableSlots(today);
        console.log("Fetched Slots:", slotsResponse);
        setAvailableSlots(slotsResponse || []);

        const appointmentsResponse = await getAllAppointments();
        console.log("Fetched Appointments:", appointmentsResponse);
        setBookedAppointments(appointmentsResponse || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [today]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.light,
        p: 3,
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{ mb: 0, color: "primary.main" }}
      >
        ConsultPro
      </Typography>
      <Typography variant="h6" fontWeight="200" sx={{ mb: 3, color: "black" }}>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Available Slots */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{ backgroundColor: "white", borderRadius: 2, boxShadow: 2 }}
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: "black", mb: 2 }}
              >
                📅 Available Free Slots (Today)
              </Typography>
              <AvailableSlotsTable slots={availableSlots} today={today} />
            </CardContent>
          </Card>
        </Grid>

        {/* Booked Appointments */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{ backgroundColor: "white", borderRadius: 2, boxShadow: 2 }}
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: "black", mb: 2 }}
              >
                📋 View All Booked Appointments
              </Typography>
              <BookedAppointmentsTable
                appointments={bookedAppointments}
                handleCancel={handleCancel}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
