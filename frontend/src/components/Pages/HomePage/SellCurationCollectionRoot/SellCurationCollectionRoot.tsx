import React from "react";
import { Grid, Typography, Button, Box, Container } from "@mui/material";
import styles from "./SellCurationCollectionRoot.module.scss";
import Image from "next/image";
import { styled } from "@mui/system";

const BuyNowButton = styled(Button)(({ theme }) => ({
  "&.MuiButton-root": {
    borderRadius: "6px",
    background: "#000000",
    paddingTop: "13px",
    paddingBottom: "13px",
    paddingLeft: "70px",
    paddingRight: "70px",
    boxShadow: "none",
  },
  "&.MuiButton-text": {
    fontFamily: "Kern",
    fontWeight: 700,
    textAlign: "center",
    fontStyle: "normal",
    textTransform: "none",
    fontSize: "24px",
    lineHeight: "32px",
    opacity: 1,
    color: "#ffffff",
  },
}));
export default function SellCurationCollectionRoot() {
  return (
    <Grid container gap={2} className={styles["sell-curate-root"]}>
      <Grid item md={5} xs={12} className={styles.BuyNowSectionLeft}>
        <Typography
          variant="h2"
          className="g-font-family-kern g-font-bold"
          sx={{ fontSize: [48], lineHeight: ["120%"] }}
          mb={3}
        >
          Sell, Curate or Start your Collection!
        </Typography>

        <Typography
          component="p"
          sx={{ color: "#6F6F6F" }}
          className="g-font-family-kern"
          mb={5}
        >
          Gain exposure to top art works from across the most talented artists
          in the world all in one place and for every Item sold by you you get
          rewarded some of our native tokens that can be unstaked anytime
        </Typography>

        <BuyNowButton>Buy Now </BuyNowButton>
      </Grid>

      <Grid
        md={5}
        xs={12}
        className={styles["image-grid"]}
        marginTop={{ xs: "1rem", sm: "2rem" }}
      >
        <Box className={styles["image-div"]}>
          <Image
            src="/images/vitamins/Egg1.svg"
            height={500}
            width={500}
            alt="buynow"
            className={styles["image"]}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
