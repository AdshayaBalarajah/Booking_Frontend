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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 

 

  useEffect(() => {
    setTimeSlot(selectedSlot);
  }, [selectedSlot]);

  const handleSubmit = async () => {
    if (!fullName || !email || !phone || !consultancyType || !mode) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setError(""); 

    const bookingRequest = {
      consultantName: consultancyType,
      date: selectedDate.format("YYYY-MM-DD"),
      timeSlot: timeSlot,
      mode,
      fullName,
      email,
      userNotes: phone,
    };
    onConfirm(bookingRequest);
    setConsultancyType("");
    setFullName("");
    setEmail("");
    setMode("");
    setPhone("");
    setLoading(false);
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
          disabled
          fullWidth
          margin="dense"
          label="Select Time Slot"
          value={timeSlot || ""}
          InputProps={{ sx: { color: "black" } }}
          sx={{ color: "black" }}
        ></TextField>

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
          onChange={(e) => setFullName(e.target.value)}
          InputProps={{ sx: { color: "black" } }}
          sx={{ color: "black" }}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Email Address"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{ sx: { color: "black" } }}
          sx={{ color: "black" }}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Phone Number"
          required
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          InputProps={{ sx: { color: "black" } }}
          sx={{ color: "black" }}
        />

        {/* Display error message if any */}
        {error && <Typography color="error">{error}</Typography>}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? "Booking..." : "Confirm"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppointmentModal;
