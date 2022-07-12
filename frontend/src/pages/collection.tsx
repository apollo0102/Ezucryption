import React, { useState } from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import { Search, List, Window, FilterAlt } from "@mui/icons-material";
import styled from "@emotion/styled";

import FooterRoot from "../components/Partials/Footer/FooterRoot";
import JoinWaitlist from "../components/Partials/JoinWaitList/JoinWaitList";
import styles from "../components/Pages/Welcome/Index.module.scss";
import HomeAppBar from "../components/Partials/NavBars/HomeAppBar/HomeAppbar";
import SideActions from "../components/UiKit/SideActions";
import Collections from "../components/Pages/Collections";
import UserBanner from "../components/Partials/UserBanner";
import { TabPanel, tabProps } from "../components/UI/TabManager";
import { StrippedButton } from "../components/UI/Buttons";

import { theme } from "../theme";
import PersonalCollections from "../components/Pages/Collections/PersonalCollections";

import Plus from "../assets/svgs/plus.svg";

function Collection() {
  const collections = [
    { id: 1, name: "CRYPTO CANAPÉS" },
    { id: 2, name: "GENERATIVE ART" },
    { id: 3, name: "CURATED ART" },
  ];

  const tabs = [
    "Collections",
    "Minted",
    "Collected",
    "Likes",
    "Private",
    "Curating",
    "On Sale",
    "Activity",
  ];

  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedCollection, setSelectedCollection] = useState(1);

  return (
    <div>
      <HomeAppBar />
      <SideActions />
      <UserBanner />
      <Container maxWidth="xl">
        <Grid container pt={8.5}>
          <Grid item sm={12} md={2}>
            <Box display="flex" flexDirection="column" alignItems="start">
              <AddButton
                display="flex"
                alignItems="center"
                className="g-font-family-kern g-font-bold"
                mb={1.8}
              >
                <Box component="span" mr={1.5}>
                  add collection
                </Box>

                <Plus />
              </AddButton>

              {collections.map((item) => (
                <CollectionButton
                  mb={1.2}
                  className="g-font-family-kern"
                  isActive={selectedCollection === item.id}
                  onClick={() => setSelectedCollection(item.id)}
                  key={item.id}
                >
                  {item.name}
                </CollectionButton>
              ))}
            </Box>
          </Grid>

          <Grid item sm={12} md={10}>
            <Box width={["100%", "100%", "90%"]}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
              >
                <Box display="flex">
                  {tabs.map((tab, i) => (
                    <Tab
                      key={i}
                      className="g-font-family-kern g-font-bold"
                      component="button"
                      mr={5}
                      align="left"
                      {...tabProps(i, "collection")}
                      isActive={i === selectedTab}
                      onClick={() => setSelectedTab(i)}
                    >
                      {tab}
                    </Tab>
                  ))}
                </Box>

                <Box display={["none", "flex"]} alignItems="center">
                  <StrippedButton>
                    <Search />
                  </StrippedButton>

                  <StrippedButton ml={2}>
                    <List />
                  </StrippedButton>

                  <StrippedButton ml={2}>
                    <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                      />
                    </svg>
                  </StrippedButton>

                  <StrippedButton ml={2}>
                    <FilterAlt />
                  </StrippedButton>
                </Box>
              </Box>

              <TabPanel value={selectedTab} index={0} panelName="collection">
                <Typography
                  className="g-font-family-kern g-font-medium "
                  align="right"
                  sx={{ fontSize: 28 }}
                  mb={2.5}
                >
                  Crypto Canapés
                </Typography>

                <PersonalCollections />
              </TabPanel>

              <TabPanel value={selectedTab} index={1} panelName="collection">
                2
              </TabPanel>

              <TabPanel value={selectedTab} index={2} panelName="collection">
                3
              </TabPanel>

              <TabPanel value={selectedTab} index={3} panelName="collection">
                4
              </TabPanel>

              <TabPanel value={selectedTab} index={4} panelName="collection">
                5
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <div className={styles["waitlist-div"]}>
        <JoinWaitlist />

        <FooterRoot />
      </div>
    </div>
  );
}

export default Collection;

const AddButton = styled(StrippedButton)`
  font-size: 14px;
  color: #a4a4a4;
`;

const CollectionButton = styled(StrippedButton)<{ isActive: boolean }>`
  font-size: 14px;
  letter-spacing: 0.022em;
  font-weight: ${(props) => (props.isActive ? 500 : 400)};

  &:hover {
    font-weight: 500;
  }
`;

const Tab = styled(Typography)<{ isActive: boolean; component: string }>`
  font-size: 14px;
  color: ${(props) =>
    props.isActive ? theme.colors["primary-10"] : "#787885 "};
  border: none;
  background: transparent;
  cursor: pointer;
`;
