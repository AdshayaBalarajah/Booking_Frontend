import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";


const BookedAppointmentsTable = ({ appointments, handleCancel }) => {
 
  

  

  
  return (
    <>
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
            {/* Commented out Actions column */}
            {/* <TableCell sx={{ fontWeight: "bold", color: "black" }}>
              Actions
            </TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                sx={{ textAlign: "center", color: "gray" }}
              >
                No Appointments Found
              </TableCell>
            </TableRow>
          ) : (
            appointments.map((booking, index) => (
              <TableRow
                key={index}
                sx={{ "&:nth-of-type(even)": { backgroundColor: "#f5f5f5" } }}
              >
                <TableCell sx={{ color: "black" }}>
                  {booking.appointmentDateTime
                    ? new Date(booking.appointmentDateTime).toLocaleDateString()
                    : "N/A"}
                </TableCell>
                <TableCell sx={{ color: "black" }}>
                  {booking.appointmentDateTime
                    ? new Date(booking.appointmentDateTime).toLocaleTimeString()
                    : "N/A"}
                </TableCell>
                <TableCell sx={{ color: "black" }}>
                  {booking.consultantName || "Unknown"}
                </TableCell>
                {/* Commented out Actions column and Delete icon */}
                {/* <TableCell>
                  <IconButton
                    onClick={() => handleOpenDialog(booking)}
                    sx={{ color: "red" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell> */}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      
     
    </>
  );
};

export default BookedAppointmentsTable;
