import React, { useState } from "react";
import { Box } from "@mui/material";

import CheckBox from "../../../UI/CheckBox";

const NotificationCheckBox = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
  mb?: number;
}) => (
  <Box display="flex" alignItems="center" {...rest}>
    <Box
      sx={{ height: 20, width: 20, border: "1px solid", flex: "none" }}
    ></Box>
    {children}
  </Box>
);

function Notifications() {
  const [state, setState] = useState({
    itemsSold: "",
  });

  return (
    <div>
      <NotificationCheckBox mb={2.5}>
        <Box ml={2} sx={{ fontSize: 14 }}>
          Items Sold
        </Box>
      </NotificationCheckBox>

      <NotificationCheckBox mb={2.5}>
        <Box ml={2} sx={{ fontSize: 14 }}>
          Bid Activity
        </Box>
      </NotificationCheckBox>

      <NotificationCheckBox mb={2.5}>
        <Box ml={2} sx={{ fontSize: 14 }}>
          Price Change
        </Box>
      </NotificationCheckBox>

      <NotificationCheckBox mb={2.5}>
        <Box ml={2} sx={{ fontSize: 14 }}>
          Auction Expiration
        </Box>
      </NotificationCheckBox>

      <NotificationCheckBox mb={2.5}>
        <Box ml={2} sx={{ fontSize: 14 }}>
          Outbid
        </Box>
      </NotificationCheckBox>

      <NotificationCheckBox mb={2.5}>
        <Box ml={2} sx={{ fontSize: 14 }}>
          Owned Item Updates{" "}
        </Box>
      </NotificationCheckBox>

      <NotificationCheckBox mb={2.5}>
        <Box ml={2} sx={{ fontSize: 14 }}>
          Successful Purchase{" "}
        </Box>
      </NotificationCheckBox>

      <NotificationCheckBox mb={2.5}>
        <Box ml={2} sx={{ fontSize: 14 }}>
          Newsletter{" "}
        </Box>
      </NotificationCheckBox>

      <NotificationCheckBox mb={2.5}>
        <Box ml={2} sx={{ fontSize: 14 }}>
          Referral Successful{" "}
        </Box>
      </NotificationCheckBox>

      <NotificationCheckBox mb={2.5}>
        <Box ml={2} sx={{ fontSize: 14 }}>
          Funds Added/Removed{" "}
        </Box>
      </NotificationCheckBox>

      <NotificationCheckBox mb={2.5}>
        <Box ml={2} sx={{ fontSize: 14 }}>
          Drop Reminder{" "}
        </Box>
      </NotificationCheckBox>

      <NotificationCheckBox mb={2.5}>
        <Box ml={2} sx={{ fontSize: 14 }}>
          Event Reminder{" "}
        </Box>
      </NotificationCheckBox>

      <NotificationCheckBox mb={2.5}>
        <Box ml={2} sx={{ fontSize: 14 }}>
          Followers/Following{" "}
        </Box>
      </NotificationCheckBox>

      <NotificationCheckBox mb={2.5}>
        <Box ml={2} sx={{ fontSize: 14 }}>
          Digital Identity Verification{" "}
        </Box>
      </NotificationCheckBox>

      <NotificationCheckBox>
        <Box ml={2} sx={{ fontSize: 14 }}>
          Asset Liked{" "}
        </Box>
      </NotificationCheckBox>
    </div>
  );
}

export default Notifications;
