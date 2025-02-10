import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";

const AppointmentModal = ({
  open,
  handleClose,
  selectedDate,
  selectedSlot,
  onConfirm,
}) => {
  const [consultancyType, setConsultancyType] = useState("");
  const [timeSlot, setTimeSlot] = useState(selectedSlot);
  const [mode, setMode] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const timeSlots = [
    "09:00 AM - 10:00 AM",
    "10:30 AM - 11:30 AM",
    "12:00 PM - 1:00 PM",
    "02:00 PM - 3:00 PM",
    "03:30 PM - 4:30 PM",
    "05:00 PM - 6:00 PM",
  ];

  useEffect(() => {
    setTimeSlot(selectedSlot);
  }, [selectedSlot]);

  const handleSubmit = () => {
    if (!fullName || !email || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    onConfirm({
      consultancyType,
      date: selectedDate.format("YYYY-MM-DD"),
      time: timeSlot,
      mode,
      fullName,
      email,
      phone,
    });

    handleClose(); // Close modal after submission
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { backgroundColor: "white", color: "black" } }}
    >
      <DialogTitle sx={{ color: "black", fontWeight: "bold" }}>
        Book Appointment
      </DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1" sx={{ color: "black" }}>
          Selected Date: {selectedDate.format("YYYY-MM-DD")}
        </Typography>

        {/* Consultancy Type */}
        <TextField
          select
          fullWidth
          margin="dense"
          label="Type of Consultancy"
          value={consultancyType}
          InputProps={{ sx: { color: "black" } }}
          onChange={(e) => setConsultancyType(e.target.value)}
          sx={{ color: "black" }}
        >
          <MenuItem value="Software Development">Software Development</MenuItem>
          <MenuItem value="Cloud Computing">Cloud Computing</MenuItem>
          <MenuItem value="Cybersecurity">Cybersecurity</MenuItem>
          <MenuItem value="Data Analytics">Data Analytics</MenuItem>
          <MenuItem value="IT Consulting">IT Consulting</MenuItem>
        </TextField>

        {/* Time Slot */}
        <TextField
          select
          fullWidth
          margin="dense"
          label="Select Time Slot"
          InputProps={{ sx: { color: "black" } }}
          value={timeSlot || ""}
          onChange={(e) => setTimeSlot(e.target.value)}
          sx={{ color: "black" }}
        >
          {timeSlots.map((slot, index) => (
            <MenuItem key={index} value={slot}>
              {slot}
            </MenuItem>
          ))}
        </TextField>

        {/* Mode of Consultancy */}
        <TextField
          select
          fullWidth
          margin="dense"
          label="Mode of Consultancy"
          value={mode}
          InputProps={{ sx: { color: "black" } }}
          onChange={(e) => setMode(e.target.value)}
          sx={{ color: "black" }}
        >
          <MenuItem value="Virtual">Virtual</MenuItem>
          <MenuItem value="In-Person">In-Person</MenuItem>
        </TextField>

        {/* Contact Details */}
        <TextField
          fullWidth
          margin="dense"
          label="Full Name"
          required
          value={fullName}
          InputProps={{ sx: { color: "black" } }}
          onChange={(e) => setFullName(e.target.value)}
          sx={{ color: "black" }}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Email Address"
          required
          type="email"
          value={email}
          InputProps={{ sx: { color: "black" } }}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ color: "black" }}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Phone Number"
          required
          type="tel"
          value={phone}
          InputProps={{ sx: { color: "black" } }}
          onChange={(e) => setPhone(e.target.value)}
          sx={{ color: "black" }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppointmentModal;
