import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AppointmentModal from "../components/AppointmentPage/AppointmentModal";
import NavBarLight from "../components/Utils/NavBarLight";
import Footer from "../components/Utils/Footer";
import BookedAppointmentsTable from "../components/AppointmentPage/BookedAppointment";
import {
  getAvailableSlots,
  bookAppointment,
  getUserAppointments,
  cancelAppointment,
} from "../api/appointment"; // Import the API functions
import dayjs from "dayjs";

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedAppointments, setBookedAppointments] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [token, setToken] = useState(localStorage.getItem("accessToken"));

  // Fetch available slots based on the selected date
  useEffect(() => {
    const fetchAvailableSlots = async () => {
      try {
        const response = await getAvailableSlots(
          selectedDate.format("YYYY-MM-DD")
        );
        setAvailableSlots(response);
        console.log("slots", response);
      } catch (error) {
        console.error("Error fetching available slots", error);
      }
    };

    fetchAvailableSlots();
  }, [selectedDate]);

  // Fetch the user's booked appointments
  const fetchBookedAppointments = async () => {
    try {
      const response = await getUserAppointments();
      setBookedAppointments(response);
      console.log("Booked App", response);
    } catch (error) {
      console.error("Error fetching booked appointments", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchBookedAppointments();
    }
  }, [token]);

  // Handle booking an appointment
  const handleBookAppointment = async (slot) => {
    setSelectedSlot(slot);
    setOpenModal(true);
  };

  // Handle confirming a booking
  const handleConfirmBooking = async (appointment) => {
    try {
      const response = await bookAppointment(appointment);
      fetchBookedAppointments();
      setOpenModal(false);
    } catch (error) {
      console.error("Error booking appointment", error);
    }
  };

  // Handle canceling an appointment
  const handleCancelAppointment = async (appointment) => {
    try {
      const response = await cancelAppointment(appointment.id);
      setBookedAppointments(
        bookedAppointments.filter((a) => a.id !== appointment.id)
      );
    } catch (error) {
      console.error("Error cancelling appointment", error);
    }
  };

  // Check if a slot is already booked
  const isSlotBooked = (slot) => {
    return bookedAppointments.some(
      (appointment) =>
        dayjs(appointment.appointmentDateTime).format("HH:mm") === slot
    );
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
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            my={5}
            color="black"
          >
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
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mb: 2, display: "flex", alignItems: "center" }}
                  >
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
                    {availableSlots?.map((slot, index) => {
                      const booked = isSlotBooked(slot);
                      return (
                        <ListItem
                          key={index}
                          sx={{
                            cursor: booked ? "not-allowed" : "pointer",
                            backgroundColor: booked ? "#ffcccc" : "#ccffcc",
                            color: "black", // Ensuring the ListItem has black text color
                            borderRadius: 1,
                            border: "1px solid #ccc",
                            "&:hover": booked
                              ? {}
                              : { backgroundColor: "#b3e6b3" },
                          }}
                          onClick={() => {
                            if (!booked) handleBookAppointment(slot);
                          }}
                        >
                          <ListItemText
                            primary={slot}
                            sx={{
                              "& .MuiListItemText-primary": {
                                color: "black", // Set the primary text color to black
                              },
                            }}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Booked Appointments */}
            <Grid item xs={12} md={6}>
              <BookedAppointmentsTable
                bookedAppointments={bookedAppointments}
                handleCancel={handleCancelAppointment}
              />
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
