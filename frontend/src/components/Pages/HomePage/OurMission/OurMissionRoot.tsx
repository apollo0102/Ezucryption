import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
// import main from "/public/images/creator/profile.png";
import styles from "./OurMissionRoot.module.scss";
import Image from "next/image";
import { styled } from "@mui/system";
import { Public } from "@mui/icons-material";
import clsx from "clsx";

const MainHeaderTypography = styled(Typography)(
  ({ theme }) => `
      &&{
      font-family: KernBold;
      font-style: normal;
    text-transform:none;
      font-size: 48px;
      line-height: 67.2px;
      opacity:1;
      color: #00000;
     margin-bottom:1rem;
      }
      `
);
const ContentTypography = styled(Typography)(
  ({ theme }) => `
      &&{
      font-family: KernRegular;
      font-style: normal;
    text-transform:none;
      font-size: 16px;
      line-height: 24px;
      opacity:1;
      color: #6F6F6F;
      margin-bottom:2.5rem;
      }
      `
);
const StyledBox = styled(Box)(
  ({ theme }) => `
      &&{
        
        border-radius: 20px;
        position: relative;
      }
      `
);

const OurMissionRoot = () => {
  return (
    <Box className={styles["our-mission-root"]}>
      <Container maxWidth="lg">
        <Grid container className={styles["our-mission-inner"]} columnGap={1}>
          <Grid sm={12} md={4} className={styles["image-part"]}>
            <div className={styles["image"]}>
              <Image
                src="/images/homepage/bompass.svg"
                height={400}
                width={400}
                alt="mission"
                className={styles["img"]}
              />
            </div>
          </Grid>

          <Grid item sm={12} md={6} className={styles["text-part"]}>
            <Typography className={styles["title"]} variant="h3">
              Our Mission{" "}
              <span className={styles["mobi-brk"]}>& Our Story</span>
            </Typography>

            <Typography className={styles["body"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              dignissim amet et pell entesque netus massa pulvinar quis
              pharetra. A amet pretium, mauris id amet amet io et. Dolor ipsum,
              accumsan ultricies facilisi a arcu et. Consequat nu nc enim
              suscipitiis quis nulla sagittis. Tortor congue sed orci pulvinar
              elementum. Viverra iaculis elit leof elis neque eget dictum lacus
              vitae. Cras eu, est blandit aliquam accumsan arcu tellus eros, ut.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              dignissim amet et pell entesque netus massa pulvinar quis
              pharetra. A amet pretium, mauris id amet amet io et. Dolor ipsum,
              accumsan.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurMissionRoot;
