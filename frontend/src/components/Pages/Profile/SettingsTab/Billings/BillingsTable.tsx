import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { Visibility } from "@mui/icons-material";

const rows = [
  {
    id: 1,
    date: "Nov 16, 2021",
    transactionId: "0x889999xx889",
    asset: "Jerry's oblivion",
    price: "100",
    action: ["view", "download"],
  },
  {
    id: 2,
    date: "Nov 18, 2021",
    transactionId: "00x899xx666xx",
    asset: "Tom's candice",
    price: "200",
    action: ["view", "download"],
  },
  {
    id: 3,
    date: "Nov 20, 2021",
    transactionId: "00x899xx999xx",
    asset: "Mikey's Apes",
    price: "500",
    action: ["view", "download"],
  },
  {
    id: 4,
    date: "Nov 22, 2021",
    transactionId: "00x799xx999xx",
    asset: "David kills goliath",
    price: "1000",
    action: ["view", "download"],
  },
  {
    id: 5,
    date: "Nov 24, 2021",
    transactionId: "00x099xx999xx",
    asset: "Joseph's Coat",
    price: "2000",
    action: ["view", "download"],
  },
];

function BillingsTable() {
  const tableHeaders = ["DATE", "TRANSACTION ID", "ASSET", "PRICE", "ACTIONS"];

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="royalty table">
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
              <TableCell className="g-font-family-kern">{row.date}</TableCell>

              <TableCell className="g-font-family-kern">
                {row.transactionId}
              </TableCell>

              <TableCell className="g-font-family-kern">{row.asset}</TableCell>

              <TableCell className="g-font-family-kern">{row.price}</TableCell>

              <TableCell>
                <Box display="flex" alignItems="center">
                  <Visibility />

                  <Box ml={2}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.29 15.71C9.47 15.89 9.72 16 10 16C10.28 16 10.53 15.89 10.71 15.71L15.71 10.71C15.89 10.53 16 10.28 16 10C16 9.45 15.55 9 15 9C14.72 9 14.47 9.11 14.29 9.29L11 12.59V1C11 0.45 10.55 0 10 0C9.45 0 9 0.45 9 1V12.59L5.71 9.29C5.53 9.11 5.28 9 5 9C4.45 9 4 9.45 4 10C4 10.28 4.11 10.53 4.29 10.71L9.29 15.71ZM19 14C18.45 14 18 14.45 18 15V18H2V15C2 14.45 1.55 14 1 14C0.45 14 0 14.45 0 15V19C0 19.55 0.45 20 1 20H19C19.55 20 20 19.55 20 19V15C20 14.45 19.55 14 19 14Z"
                        fill="#4A4B57"
                      />
                    </svg>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BillingsTable;
