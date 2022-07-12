import React from "react";
import Link from 'next/link'
import styles from "./WelcomeHero.module.scss";
import { ArrowForward } from "@mui/icons-material";
import { TextField, InputAdornment, Input } from "@mui/material";
import { borderBottom, styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";

const CssInput = styled(Input)({
  "& input": {
    color: "white",
    borderColor:'white',
    padding: "0.4rem 0",
  },
});

const WelcomeHero = () => {
  return (
    <div className={styles["hero-bg"]}>
      <div className={styles["top-div"]}>
        <div className={styles["logo"]}>artcryption</div>
        <Link href="/">
          <a className={styles["enter"]}>
            Enter <ArrowForward />
          </a>
        </Link>
      </div>
      <div className={styles["coming-soon"]}>nft dropping soon</div>
      <div className={styles["desp-div"]}>
        <div className={styles["white-line"]}></div>
        <div className={styles["text"]}>
          Vitamin D, <br />
          by AIMSIR Studio
        </div>
        <div className={styles["sub-text"]}>
          curated by Bompas & Parr, MA <br /> Creative & Louisa St. Pierre
        </div>
      </div>
      <div className={styles["form-div"]}>
        <div className={styles["form"]}>
          <div className={styles["header"]}>Join waitlist</div>
          <CssInput
            style={{
              padding: "0.4rem 0",
              color: "white",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <ArrowForward className={styles["arrow"]} />
                </IconButton>
              </InputAdornment>
            }
            fullWidth
            placeholder="Enter your email"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeHero;
