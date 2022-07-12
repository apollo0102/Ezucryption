import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { theme } from "../../../../theme";

const rows = [
  {
    id: 1,
    from: "0x56...890d",
    price: "0.123 ETH",
    date: "4 minutes ago",
    expiring: "2 days",
  },
  {
    id: 2,
    from: "0x56...890d",
    price: "0.323 ETH",
    date: "4 days ago",
    expiring: "4 days",
  },
  {
    id: 3,
    from: "0x56...890d",
    price: "0.423 ETH",
    date: "Nov 3, 2021",
    expiring: "50 minutes",
  },
];

function Offers() {
  const tableHeaders = ["From", "Price", "Date", "Expiring", "Action"];

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="ipmonitor table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((item, i) => (
              <TableCell
                key={i}
                className="g-font-family-kern"
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: theme.colors["dark-20"],
                }}
                align="left"
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              style={{ fontSize: 14 }}
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="g-font-family-kern g-font-bold">
                <Box display="flex" alignItems="center">
                  <Box
                    height={35}
                    width={35}
                    borderRadius={100}
                    sx={{ background: "#eee" }}
                    mr={2}
                  ></Box>
                  <span>{row.from}</span>
                </Box>
              </TableCell>

              <TableCell className="g-font-family-kern">
                <span className="g-font-bold">{row.price}</span>{" "}
                <span style={{ color: theme.colors["dark-20"] }}>
                  {" (10% below)"}
                </span>
              </TableCell>

              <TableCell className="g-font-family-kern g-font-bold">
                {row.date}
              </TableCell>

              <TableCell className="g-font-family-kern g-font-bold">
                {row.expiring}
              </TableCell>

              <TableCell>
                <Box display="flex" alignItems="center">
                  <Typography
                    className="g-font-family-kern g-font-medium"
                    component="button"
                    py={0.3}
                    px={2}
                    sx={{
                      fontSize: 12,
                      borderStyle: "none",
                      backgroundColor: theme.colors["success-20"],
                      cursor: "pointer",
                      borderRadius: 5,
                    }}
                    mr={1.2}
                  >
                    Accept
                  </Typography>

                  <Typography
                    className="g-font-family-kern g-font-medium"
                    component="button"
                    py={0.3}
                    px={2}
                    sx={{
                      fontSize: 12,
                      borderStyle: "none",
                      border: "1px solid #E6CAED",
                      cursor: "pointer",
                      borderRadius: 5,
                      background: "transparent",
                    }}
                  >
                    Reject
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Offers;
