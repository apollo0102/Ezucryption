import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import styles from "./HelloSection.module.scss";
import Image from "next/image";

import JoinOurCommunity from "../../../Partials/JoinOurCommunity/JoinOurCommunity";
import Wrapper from "../../../UI/Wrapper";
import SubmitArtWork from "./SubmitArtWork";

export default function HelloSection() {
  return (
    <Wrapper>
      <Grid container width={["100%", "95%"]} mx={["auto"]}>
        <Grid className={styles["text-div"]} item md={8} sm={12}>
          <Typography
            className="g-font-family-kern g-font-bold"
            sx={{ fontSize: [36] }}
            mb={0.5}
          >
            Hello!
          </Typography>

          <Typography
            className="g-font-family-kern g-font-bold"
            sx={{
              fontSize: [46, 48],
              maxWidth: [300, "100%"],
              lineHeight: "65px",
            }}
          >
            Welcome to Artcryption
          </Typography>

          <Typography
            className="g-font-family-kern"
            sx={{ fontSize: [24] }}
            mt={1.5}
          >
            Sell, protect and share your NFTs, creative assets & IP online
          </Typography>

          <div className={styles["join-com-div"]}>
            <JoinOurCommunity />
          </div>
        </Grid>

        <Grid
          item
          display={["flex"]}
          flexDirection={["column", "row"]}
          position="relative"
          justifyContent={["start", "end"]}
          md={4}
          sm={12}
          pt={[5, 0]}
        >
          <Box
            sx={{
              position: ["initial", "absolute"],
              left: [0, 0, -40],
              bottom: [0],
            }}
            mb={[5, 0]}
          >
            <SubmitArtWork />
          </Box>

          <Box position="relative" width={[302, 220]} height={[445, 312]}>
            <Image
              src="/images/homepage/logo.svg"
              blurDataURL="/images/homepage/logo.svg"
              layout="fill"
              className={styles["image"]}
              alt="main"
            />
          </Box>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
