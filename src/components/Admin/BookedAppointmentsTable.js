import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const bookedAppointments = [
  { date: "Feb 12", time: "09:00 AM", fullName: "John Doe" },
  { date: "Feb 14", time: "11:30 AM", fullName: "Jane Smith" },
];

const handleCancel = (appointment) => {
  console.log("Canceling appointment:", appointment);
};

const BookedAppointmentsTable = () => {
  return (
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
            sx={{ "&:nth-of-type(even)": { backgroundColor: "#f5f5f5" } }}
          >
            <TableCell sx={{ color: "black" }}>{booking.date}</TableCell>
            <TableCell sx={{ color: "black" }}>{booking.time}</TableCell>
            <TableCell sx={{ color: "black" }}>{booking.fullName}</TableCell>
            <TableCell>
              <IconButton
                onClick={() => handleCancel(booking)}
                sx={{ color: "red" }}
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BookedAppointmentsTable;
