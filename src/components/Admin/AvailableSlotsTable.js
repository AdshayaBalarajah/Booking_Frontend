import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";


const AvailableSlotsTable = ({slots,today}) => {
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
        {slots?.map((slot, index) => (
          <TableRow
            key={index}
            sx={{ "&:nth-of-type(even)": { backgroundColor: "#f5f5f5" } }}
          >
            <TableCell sx={{ color: "black" }}>{today}</TableCell>
            <TableCell sx={{ color: "black" }}>{slot}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AvailableSlotsTable;
