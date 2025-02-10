import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const BookedAppointmentsTable = ({ bookedAppointments, handleCancel }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleOpenDialog = (appointment) => {
    setSelectedAppointment(appointment);
    setOpenDialog(true);
  };

  const handleConfirmCancel = () => {
    if (selectedAppointment) {
      handleCancel(selectedAppointment);
    }
    setOpenDialog(false);
  };

  return (
    <Card
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 2,
        color: "black",
        p: 2,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            mb: 2,
            display: "flex",
            alignItems: "center",
            color: "black",
          }}
        >
          <ScheduleIcon sx={{ mr: 1, color: "black" }} />
          Your Booked Appointments
        </Typography>

        {bookedAppointments.length > 0 ? (
          <Table sx={{ minWidth: 500 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#e0e0e0" }}>
                <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                  Date
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                  Time
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                  Consultant
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookedAppointments.map((booking, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:nth-of-type(even)": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  <TableCell sx={{ color: "black" }}>{booking.date}</TableCell>
                  <TableCell sx={{ color: "black" }}>{booking.time}</TableCell>
                  <TableCell sx={{ color: "black" }}>
                    {booking.fullName}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleOpenDialog(booking)}
                      sx={{ color: "red" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Typography sx={{ color: "#4a4a4a", textAlign: "center", mt: 2 }}>
            No Appointments
          </Typography>
        )}
      </CardContent>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Cancellation</DialogTitle>
        <DialogContent>
          Are you sure you want to cancel this appointment?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            No
          </Button>
          <Button onClick={handleConfirmCancel} color="error">
            Yes, Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default BookedAppointmentsTable;
