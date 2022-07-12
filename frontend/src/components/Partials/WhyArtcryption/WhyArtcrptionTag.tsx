import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./WhyArtcryptionRoot.module.scss";
import { NextPage } from "next";

interface WhyArtcryptionTagProps {
  title: string;
  icon: string;
}

const WhyArtcryptionTag: NextPage<WhyArtcryptionTagProps> = ({
  title,
  icon,
}) => {
  return (
    <Grid display="flex" item alignItems="center" md={6} sm={12} mb={4}>
      <Image
        // className={styles.iconsEndorsedWhy}
        src={icon}
        width={35}
        height={35}
        alt="pointers"
        style={{ flex: "none" }}
      />

      <Typography
        className="g-font-family-kern g-font-medium"
        sx={{ fontSize: [24], maxWidth: 400 }}
        ml={3}
      >
        {title}
      </Typography>
    </Grid>
  );
};

export default WhyArtcryptionTag;
