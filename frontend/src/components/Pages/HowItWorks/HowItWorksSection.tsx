import { Grid, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

import { theme } from "../../../theme";

export default function HowItWorksSection() {
  return (
    <Grid container>
      <Grid xs={12} md={8}>
        <CustomGrid>
          <CustomGridItem px={3}>
            <Typography
              component="div"
              className="g-font-family-kern"
              sx={{ fontSize: 100 }}
            >
              1/
            </Typography>

            <Typography
              className="g-font-family-kern g-font-medium"
              mb={1.3}
              sx={{ fontSize: 32 }}
            >
              How It Works
            </Typography>

            <Typography className="g-font-family-kern" sx={{ fontSize: 12 }}>
              To get started, signup and create your account and select one or
              more roles as a creator, curator and/or collector.
            </Typography>
          </CustomGridItem>

          <CustomGridItem px={2} pt={2}>
            <Typography
              component="div"
              className="g-font-family-kern"
              mb={1.2}
              sx={{ fontSize: 32 }}
            >
              2/
            </Typography>

            <Typography
              className="g-font-family-kern g-font-medium"
              mb={2}
              sx={{ fontSize: 24, lineHeight: "30px" }}
            >
              Upload Assets & Metadata
            </Typography>

            <Typography className="g-font-family-kern" sx={{ fontSize: 12 }}>
              You can upload images, videos, music, 3D objects and more. Add
              metadata such as title, description date of creation etc.
            </Typography>
          </CustomGridItem>

          <CustomGridItem px={2} pt={[1.5, 0]}>
            <Box display="flex" alignItems="baseline" mb={1.5}>
              <Typography
                component="div"
                className="g-font-family-kern"
                mb={1.2}
                sx={{ fontSize: 32 }}
              >
                3/
              </Typography>

              <Typography
                className="g-font-family-kern g-font-medium"
                ml={1.5}
                sx={{ fontSize: 24, lineHeight: "30px", width: "50%" }}
              >
                Mint NFTs
              </Typography>
            </Box>

            <Typography className="g-font-family-kern" sx={{ fontSize: 12 }}>
              Mint or create a hash on the blockchain and obtain a digital
              certificate of ownership.
            </Typography>
          </CustomGridItem>

          <CustomGridItem px={2} pt={[1.5, 0]}>
            <Box display="flex" alignItems="baseline" mb={1.5}>
              <Typography
                component="div"
                className="g-font-family-kern"
                mb={1.2}
                sx={{ fontSize: 32 }}
              >
                4/
              </Typography>

              <Typography
                className="g-font-family-kern g-font-medium"
                ml={1.5}
                sx={{ fontSize: 24, lineHeight: "30px", width: "50%" }}
              >
                Store Assets
              </Typography>
            </Box>

            <Typography className="g-font-family-kern" sx={{ fontSize: 12 }}>
              Assets are stored off chain on a decentralized storage on IPFS and
              not on the blockchain.
            </Typography>
          </CustomGridItem>

          <CustomGridItem px={2} pt={1.5}>
            <Typography
              component="div"
              className="g-font-family-kern"
              mb={1.2}
              sx={{ fontSize: 32 }}
            >
              5/
            </Typography>

            <Typography
              className="g-font-family-kern g-font-medium"
              sx={{ fontSize: 24, lineHeight: "30px" }}
            >
              Share, View, Buy or Sell
            </Typography>
          </CustomGridItem>

          <CustomGridItem px={2} pt={1.5}>
            <Typography
              component="div"
              className="g-font-family-kern"
              mb={1.2}
              sx={{ fontSize: 32 }}
            >
              6/
            </Typography>

            <Typography
              className="g-font-family-kern g-font-medium"
              sx={{ fontSize: 24, lineHeight: "30px" }}
            >
              Connect Wallet
            </Typography>
          </CustomGridItem>

          <CustomGridItem px={2} pt={1.5}>
            <Grid container>
              <Grid md={6}>
                <Typography
                  component="div"
                  className="g-font-family-kern"
                  mb={1.2}
                  sx={{ fontSize: 32 }}
                >
                  7/
                </Typography>

                <Typography
                  className="g-font-family-kern g-font-medium"
                  sx={{ fontSize: 24, lineHeight: "30px" }}
                >
                  Protect IP
                </Typography>
              </Grid>

              <Grid md={6} pt={2}>
                <Typography
                  className="g-font-family-kern"
                  sx={{ fontSize: 12 }}
                >
                  A hash or mint of your asset on the blockchain will create a
                  digital certificate and act as an alternative copyright
                  protection.
                </Typography>
              </Grid>
            </Grid>
          </CustomGridItem>
        </CustomGrid>
      </Grid>

      <Grid xs={12} md={4} pt={[10, 5, 0]}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={["center", "flex-end", "center"]}
          sx={{ height: "100%", width: "100%" }}
          pl={[0, 5]}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <svg
              width="167"
              height="167"
              viewBox="0 0 167 167"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M167 70.9721C167 64.0416 161.405 58.4471 154.475 58.4471H85.671L80.0765 58.3636C88.2595 51.2661 94.7725 42.3316 95.858 31.3096C97.361 16.3631 84.7525 13.9416 82.0805 19.3691C75.0665 34.0651 54.108 47.8426 40.915 54.6896C20.2905 63.3736 0 65.0436 0 101.283C0 121.156 6.346 134.015 22.1275 141.53C35.07 147.709 45.758 150.297 81.7465 150.297H90.013C96.86 150.297 102.371 144.536 102.371 137.438C102.371 134.265 101.202 131.343 99.365 129.088C104.375 127.502 108.132 122.575 108.132 116.814C108.132 112.889 106.463 109.382 103.791 107.044C107.715 104.873 110.387 100.615 110.387 95.6881C110.387 90.2606 107.131 85.6681 102.621 83.7476L109.051 83.4971H154.475C158.483 83.4971 162.074 81.5766 164.328 78.5706C165.914 76.8171 167 74.4791 167 71.4731C167 71.3896 167 71.3061 167 71.2226C167 71.1391 167 71.0556 167 70.9721Z"
                fill="#4A4B57"
              />
            </svg>

            <Typography
              className="g-font-family-kern g-font-bold"
              sx={{ fontSize: 20, borderBottom: "2px solid" }}
              mt={3}
            >
              Check out our step by step guide
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

const CustomGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-rows: 365px 291px repeat(5, 172px);

  @media screen and (min-width: ${theme.mediaScreens.sm}) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 356px 172px 172px;
  }

  @media screen and (min-width: ${theme.mediaScreens.lg}) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 172px 172px 172px;
  }
`;

const CustomGridItem = styled(Box)`
  background: #e7e7e7;

  @media screen and (min-width: ${theme.mediaScreens.sm}) {
    &:nth-child(1) {
      grid-column: 1 / 9;
      grid-row: 1 / 2;
    }

    &:nth-child(2) {
      grid-column: 9 / -1;
      grid-row: 1 / 2;
    }

    &:nth-child(3) {
      grid-column: 1 / 5;
    }

    &:nth-child(4) {
      grid-column: 5 / 9;
      grid-row: 2 / 3;
    }

    &:nth-child(5) {
      grid-column: 9 / -1;
    }

    &:nth-child(6) {
      grid-column: 1 / 5;
    }

    &:nth-child(7) {
      grid-column: 5 / -1;
    }
  }

  @media screen and (min-width: ${theme.mediaScreens.lg}) {
    &:nth-child(1) {
      grid-column: 1 / 7;
      grid-row: 1 / 3;
    }

    &:nth-child(2) {
      grid-column: 7 / 10;
      grid-row: 1 / 3;
    }

    &:nth-child(3) {
      grid-column: 10 / -1;
    }

    &:nth-child(4) {
      grid-column: 10 / -1;
      grid-row: 2 / 3;
    }

    &:nth-child(5) {
      grid-column: 1 / 4;
    }

    &:nth-child(6) {
      grid-column: 4 / 7;
    }

    &:nth-child(7) {
      grid-column: 7 / -1;
    }
  }
`;
