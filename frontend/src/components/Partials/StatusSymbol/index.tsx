import React from "react";
import { Box, Typography } from "@mui/material";

interface IProps {
  key?: string;
  value?: string;
}

function StatusSymbol(props: IProps) {
  const { key = "Status", value = "Active" } = props;

  return (
    <Box display="flex" alignItems="center">
      <Typography
        className="g-font-family-kern g-font-medium"
        mr={1}
        sx={{ fontSize: 14 }}
      >
        {key}:
      </Typography>

      <Box display="flex" alignItems="center">
        <Box
          mr={1}
          sx={{
            width: 14,
            height: 14,
            background: "#BAF8D2",
            borderRadius: "50%",
          }}
        ></Box>

        <span
          className="g-font-medium"
          style={{ fontSize: 14, color: "#6F6F6F" }}
        >
          {value}
        </span>
      </Box>
    </Box>
  );
}

export default StatusSymbol;
