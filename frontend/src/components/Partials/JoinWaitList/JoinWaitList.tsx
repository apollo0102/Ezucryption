import React, { useState } from "react";
import styles from "./JoinWaitList.module.scss";
import { TextField, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import InputAdornment from "@mui/material/InputAdornment";
import { ArrowForward } from "@mui/icons-material";

export default function JoinWaitlist() {
  return (
    <Box className={styles["join-waitlist-root"]}>
      <div className={`${styles["title"]} g-font-family-kern`}>Waitlist</div>

      <div className={`${styles["subtitle"]} g-font-family-kern`}>
        Subscribe to join the waitlist and get latest news, drops and events.
      </div>

      <div className={styles["form-div"]}>
        <TextField
          style={{ padding: "0.5rem 0" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ArrowForward className={styles["arrow"]} />
              </InputAdornment>
            ),
          }}
          fullWidth
          variant="standard"
          placeholder="Enter your email"
        />
      </div>
    </Box>
  );
}
