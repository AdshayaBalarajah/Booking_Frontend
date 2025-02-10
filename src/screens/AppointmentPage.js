import React, { useState } from "react";
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
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CancelIcon from "@mui/icons-material/Cancel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AppointmentModal from "../components/AppointmentPage/AppointmentModal";
import dayjs from "dayjs";
import NavBarLight from "../components/Utils/NavBarLight";
import Footer from "../components/Utils/Footer";
import BookedAppointmentsTable from "../components/AppointmentPage/BookedAppointment";

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [bookedAppointments, setBookedAppointments] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");

  const handleBookAppointment = (slot) => {
    setSelectedSlot(slot);
    setOpenModal(true);
  };

  const handleConfirmBooking = (appointment) => {
    setBookedAppointments([...bookedAppointments, appointment]);
  };

  const [appointments, setAppointments] = useState([
    { date: "2025-02-15", time: "10:00 AM", fullName: "John Doe" },
    { date: "2025-02-16", time: "2:00 PM", fullName: "Jane Smith" },
  ]);

  const handleCancelAppointment = (appointment) => {
    setAppointments(appointments.filter((a) => a !== appointment));
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
                    {[
                      "09:00 AM - 10:00 AM",
                      "10:30 AM - 11:30 AM",
                      "12:00 PM - 1:00 PM",
                      "02:00 PM - 3:00 PM",
                      "03:30 PM - 4:30 PM",
                      "05:00 PM - 6:00 PM",
                    ].map((slot, index) => (
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
              <BookedAppointmentsTable
                bookedAppointments={appointments}
                handleCancel={handleCancelAppointment}
              />
              ;{" "}
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
