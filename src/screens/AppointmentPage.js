import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Card, CardContent, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AppointmentModal from "../components/AppointmentPage/AppointmentModal";
import NavBarLight from "../components/Utils/NavBarLight";
import Footer from "../components/Utils/Footer";
import BookedAppointmentsTable from "../components/AppointmentPage/BookedAppointment";
import { getAvailableSlots, bookAppointment, getUserAppointments, cancelAppointment } from "../api/appointment"; 

import dayjs from "dayjs";

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedAppointments, setBookedAppointments] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [token, setToken] = useState(localStorage.getItem("accessToken"));

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      try {
        const response = await getAvailableSlots(selectedDate.format("YYYY-MM-DD"));
        setAvailableSlots(response);
      } catch (error) {
        console.error("Error fetching available slots", error);
      }
    };

    fetchAvailableSlots();
  }, [selectedDate]);

  const fetchBookedAppointments = async () => {
    try {
      const response = await getUserAppointments();
      console.log(response);
      setBookedAppointments(response);
    } catch (error) {
      console.error("Error fetching booked appointments", error);
    }
  };
  useEffect(() => {
    if (token) {
      fetchBookedAppointments();
    }
  }, [token]);

  const handleBookAppointment = async (slot) => {
    setSelectedSlot(slot);
    setOpenModal(true);
  };

  const handleConfirmBooking = async (appointment) => {
    try {
      const response = await bookAppointment(appointment);
      fetchBookedAppointments();
      setOpenModal(false);
    } catch (error) {
      console.error("Error booking appointment", error);
    }
  };

  const handleCancelAppointment = async (appointment) => {
    try {
      const response = await cancelAppointment(appointment.id, token);
      setBookedAppointments(bookedAppointments.filter((a) => a.id !== appointment.id));
    } catch (error) {
      console.error("Error cancelling appointment", error);
    }
  };

  return (
    <>
      <Box
        sx={{
          py: 6,
          backgroundColor: "background.light",
          minHeight: "100vh",
          color: "black",
        }}
      >
        <NavBarLight />
        <Container>
          <Typography variant="h4" fontWeight="bold" textAlign="center" my={5} color="black">
            Appointments
          </Typography>

          <Grid container spacing={4}>
            {/* Date Picker & Available Slots */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  boxShadow: 0,
                  color: "black",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                    <EventAvailableIcon sx={{ mr: 1, color: "primary.main" }} />
                    Select Date
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={selectedDate}
                      onChange={(newDate) => setSelectedDate(newDate)}
                      sx={{
                        backgroundColor: "#e0e0e0",
                        borderRadius: 1,
                        mb: 3,
                      }}
                      slotProps={{
                        textField: {
                          InputProps: {
                            sx: {
                              color: "black",
                            },
                          },
                        },
                      }}
                    />
                  </LocalizationProvider>

                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Available Slots:
                  </Typography>
                  <List>
                    {availableSlots?.map((slot, index) => (
                      <ListItem
                        key={index}
                        sx={{
                          cursor: "pointer",
                          "&:hover": { backgroundColor: "#e0e0e0" },
                        }}
                        onClick={() => handleBookAppointment(slot)}
                      >
                        <ListItemText primary={slot} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Booked Appointments */}
            <Grid item xs={12} md={6}>
              <BookedAppointmentsTable bookedAppointments={bookedAppointments} handleCancel={handleCancelAppointment} />
            </Grid>
          </Grid>
        </Container>

        <AppointmentModal
          open={openModal}
          handleClose={() => setOpenModal(false)}
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
          onConfirm={handleConfirmBooking}
        />
      </Box>
      <Footer />
    </>
  );
};

export default AppointmentBooking;
