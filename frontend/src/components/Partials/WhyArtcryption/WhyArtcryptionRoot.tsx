import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./WhyArtcryptionRoot.module.scss";
import { styled } from "@mui/system";
import WhyArtcryptionTag from "./WhyArtcrptionTag";

// const WhyArtcryptionTypography = styled(Typography)(
//   () => `&&{

//   padding-bottom: 2rem;
//   font-family: KernBold;
//   font-style: normal;
//   font-size: 36px;
//   line-height: 20px;
//   width: max-content;
//   color: #000000;
//   opacity:1;

//   `
// );

const WhyArtcryptionRoot = () => {
  return (
    <Grid container className={styles.container}>
      <Grid item xs={12}>
        {/* <WhyArtcryptionTypography
          variant="h2"
          className={styles.headersCommomLandingPage}
        >
          Why Artcryption?
        </WhyArtcryptionTypography> */}
        <Typography
          className="g-font-family-kern g-font-bold"
          sx={{ fontSize: [32] }}
          mb={8}
        >
          Why Artcryption?
        </Typography>
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <WhyArtcryptionTag
          title="Time-Stamped Digital Certificates"
          icon="/icons/home/check.svg"
        />

        <WhyArtcryptionTag
          title="Create NFTs and one-of-a-kind collectibles"
          icon="/icons/home/check.svg"
        />

        <WhyArtcryptionTag
          title="Resale Royalties & Split Royalties"
          icon="/icons/home/check.svg"
        />

        <WhyArtcryptionTag
          title="Interoperable"
          icon="/icons/home/recycle.svg"
        />

        <WhyArtcryptionTag
          title="Track buyers, provenance and price history"
          icon="/icons/home/timer.svg"
        />

        <WhyArtcryptionTag
          title="Alternative copyright protection"
          icon="/icons/home/badge.svg"
        />
      </Grid>
    </Grid>
  );
};

export default WhyArtcryptionRoot;
