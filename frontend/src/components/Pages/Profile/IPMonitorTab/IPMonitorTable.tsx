import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const rows = [
  {
    id: 1,
    monitoredAssets: "",
    duplicates: "",
    infringingSource: "https://www.stolenart.com",
    infringer: "Dianne Russell",
    startDate: "03-03-2022",
    detectionDate: "03-03-2022",
  },
  {
    id: 2,
    monitoredAssets: "",
    duplicates: "",
    infringingSource: "https://www.artcryption.com/vi...",
    infringer: "Annette Black",
    startDate: "03-03-2022",
    detectionDate: "03-03-2022",
  },
  {
    id: 3,
    monitoredAssets: "",
    duplicates: "",
    infringingSource: "https://www.stolenart.com",
    infringer: "Courtney Henry",
    startDate: "03-03-2022",
    detectionDate: "03-03-2022",
  },
];

function IPMonitorTable() {
  const tableHeaders = [
    "Monitored Asset",
    "Duplicates",
    "Infringing Source",
    "Infringer",
    "Start Date",
    "Detection Date",
    "Action",
  ];

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
                  fontSize: 14,
                  fontWeight: 500,
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
              <TableCell className="g-font-family-kern">
                <Box
                  sx={{
                    height: 35,
                    width: 35,
                    backgroundColor: "#eee",
                    borderRadius: 1,
                  }}
                ></Box>
              </TableCell>

              <TableCell className="g-font-family-kern">
                <Box
                  sx={{
                    height: 35,
                    width: 35,
                    backgroundColor: "#eee",
                    borderRadius: 1,
                  }}
                ></Box>
              </TableCell>

              <TableCell className="g-font-family-kern">
                {row.infringingSource}
              </TableCell>

              <TableCell className="g-font-family-kern">
                {row.infringer}
              </TableCell>

              <TableCell className="g-font-family-kern">
                {row.startDate}
              </TableCell>

              <TableCell className="g-font-family-kern">
                {row.detectionDate}
              </TableCell>

              <TableCell>
                <Box display="flex" alignItems="center">
                  <Typography
                    className="g-font-family-kern g-font-medium"
                    component="button"
                    sx={{
                      fontSize: 14,
                      borderStyle: "none",
                      borderBottom: "1px solid",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                      padding: 0,
                    }}
                    mr={1.2}
                  >
                    Take down
                  </Typography>

                  <Typography
                    className="g-font-family-kern g-font-medium"
                    component="button"
                    sx={{
                      fontSize: 14,
                      borderStyle: "none",
                      borderBottom: "1px solid",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    Details
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

export default IPMonitorTable;
