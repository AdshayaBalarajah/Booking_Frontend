import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const availableSlots = [
  { date: "Feb 12", time: "10:00 AM - 11:00 AM" },
  { date: "Feb 12", time: "10:00 AM - 11:00 AM" },
  { date: "Feb 12", time: "10:00 AM - 11:00 AM" },
  { date: "Feb 13", time: "02:00 PM - 03:00 PM" },
  { date: "Feb 14", time: "11:00 AM - 12:00 PM" },
];

const AvailableSlotsTable = () => {
  return (
    <Table sx={{ minWidth: 400 }}>
      <TableHead>
        <TableRow sx={{ backgroundColor: "#e0e0e0" }}>
          <TableCell sx={{ fontWeight: "bold", color: "black" }}>
            Date
          </TableCell>
          <TableCell sx={{ fontWeight: "bold", color: "black" }}>
            Time
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {availableSlots.map((slot, index) => (
          <TableRow
            key={index}
            sx={{ "&:nth-of-type(even)": { backgroundColor: "#f5f5f5" } }}
          >
            <TableCell sx={{ color: "black" }}>{slot.date}</TableCell>
            <TableCell sx={{ color: "black" }}>{slot.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AvailableSlotsTable;
