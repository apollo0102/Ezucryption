import React from "react";
import { Box } from "@mui/material";

interface IProps {
  height?: number;
  children: React.ReactNode;
}

function ProfileCard(props: IProps) {
  const { height, children } = props;
  return (
    <Box
      pt={2}
      px={2}
      sx={{
        width: "65%",
        backgroundColor: "#FAFAFA",
        borderRadius: 5,
        marginLeft: "auto",
        minHeight: height,
      }}
    >
      {children}
    </Box>
  );
}

export default ProfileCard;
