import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import styles from "./SearchInput.module.scss";

const SearchInput = () => {
  return (
    <div className={styles["form"]}>
      <TextField
        style={{ padding: "0.3rem 0" }}
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
  );
};

export default SearchInput;
