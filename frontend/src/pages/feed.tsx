import React, { useState } from "react";
import Image from "next/image";
import { Grid, Typography, Container, Box } from "@mui/material";
import styled from "@emotion/styled";
import FeedsTabs from "../components/Pages/Feeds/FeedsTab";

import HomeAppBar from "../components/Partials/NavBars/HomeAppBar/HomeAppbar";
import Footer from "../components/UiKit/Layout/Footer";
import FeedsFeature from "../components/Pages/Feeds/Feature";
import FeedsActivity from "../components/Pages/Feeds/Activity";
import SideActions from "../components/UiKit/SideActions";
import CustomizeFeedOptions from "../components/Pages/Feeds/CustomizeFeedOptions";
import JoinOurCommunity from "../components/Pages/Feeds/JoinOurCommunity";

import ArrowDown from "../components/Pages/Feeds/ArrowDown.svg";
import Sort from "../components/Pages/Feeds/sort.svg";
import Search from "../components/Pages/Feeds/search.svg";

import styles from "../components/Pages/Feeds/feeds.module.scss";

import convertToRem from "../utilities/convertToRem";

function Feeds() {
  const [selectedTab, setSelectedTab] = useState("feature");

  return (
    <>
      <HomeAppBar />
      <SideActions />

      <Container maxWidth="lg">
        <Grid container>
          <Grid item sm={11}>
            <Grid container alignItems="center" pb={4} pt={[20, 5]}>
              <Grid item md={10} sm={12}>
                <div>
                  <Typography
                    variant="h1"
                    className={`${styles.heading} g-font-family-haffer g-font-medium`}
                    mb={3}
                  >
                    Feed
                  </Typography>

                  <Typography
                    component="p"
                    className={`${styles.description} g-font-family-kern`}
                  >
                    Customize your feed and collect and buy from your favourite
                    creators.
                  </Typography>
                </div>
              </Grid>

              <Grid item md={2} sm={12}>
                <Image
                  src="/images/homepage/logo.svg"
                  blurDataURL="/images/homepage/logo.svg"
                  width={171}
                  height={245}
                  alt="main"
                />
              </Grid>
            </Grid>

            <ActionWrapper>
              <FeedsTabs onChange={setSelectedTab} selectedTab={selectedTab} />

              <FilterWrapper>
                <Search />

                <SortWrapper>
                  <Sort />

                  <span style={{ marginLeft: 7 }}>Sort</span>
                </SortWrapper>
              </FilterWrapper>
            </ActionWrapper>

            <CustomizeFeedOptions />

            {selectedTab == "feature" && <FeedsFeature />}
            {selectedTab == "activity" && <FeedsActivity />}
          </Grid>
        </Grid>

        <Box
          sx={{
            marginBottom: "10rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ArrowDown />
        </Box>
      </Container>

      <JoinOurCommunity />

      <Footer />
    </>
  );
}

export default Feeds;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-left: ${convertToRem(18)};
    margin-top: unset;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
