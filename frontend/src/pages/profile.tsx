import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

import HomeAppBar from "../components/Partials/NavBars/HomeAppBar/HomeAppbar";
import FooterRoot from "../components/Partials/Footer/FooterRoot";
import SideActions from "../components/UiKit/SideActions";
import Wrapper from "../components/UI/Wrapper";
import UserBanner from "../components/Partials/UserBanner";
import ProfileFooterActions from "../components/Pages/Profile/ProfileFooterActions";
import StatusSymbol from "../components/Partials/StatusSymbol";
import ProfileTab from "../components/Pages/Profile/ProfileTab";
import DetailedBioTab from "../components/Pages/Profile/DetailedBioTab";
import SettingsTab from "../components/Pages/Profile/SettingsTab";
import CertificatesOfOwnershipTab from "../components/Pages/Profile/CertificatesOfOwnershipTab";
import IPMonitorTab from "../components/Pages/Profile/IPMonitorTab";
import { TabPanel, tabProps } from "../components/UI/TabManager";
import { theme } from "../theme";

function Profile() {
  const tabs = [
    "Profile",
    "Detailed Bio",
    "Settings",
    "Certificates of Ownership",
    "IP Monitor",
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <HomeAppBar />
      <SideActions />
      <UserBanner />
      <Wrapper pt={8}>
        <ContentWrapper>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={3}
          >
            <Box display="flex">
              {tabs.map((tab, i) => (
                <Tab
                  key={i}
                  className="g-font-family-kern g-font-bold"
                  component="button"
                  mr={5}
                  align="left"
                  sx={{}}
                  {...tabProps(i, "profile")}
                  isActive={i === selectedTab}
                  onClick={() => setSelectedTab(i)}
                >
                  {tab}
                </Tab>
              ))}
            </Box>

            <StatusSymbol />
          </Box>

          <TabPanel value={selectedTab} index={0} panelName="profile">
            <ProfileTab />
          </TabPanel>

          <TabPanel value={selectedTab} index={1} panelName="profile">
            <DetailedBioTab />
          </TabPanel>

          <TabPanel value={selectedTab} index={2} panelName="profile">
            <SettingsTab />
          </TabPanel>

          <TabPanel value={selectedTab} index={3} panelName="profile">
            <CertificatesOfOwnershipTab />
          </TabPanel>

          <TabPanel value={selectedTab} index={4} panelName="profile">
            <IPMonitorTab />
          </TabPanel>
        </ContentWrapper>
      </Wrapper>

      <ProfileFooterActions />
      <FooterRoot />
    </div>
  );
}

const ContentWrapper = styled(Box)`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
`;

const Tab = styled(Typography)<{ isActive: boolean; component: string }>`
  font-size: 14px;
  color: ${(props) =>
    props.isActive ? theme.colors["primary-10"] : "#787885 "};
  border: none;
  background: transparent;
  cursor: pointer;
`;

export default Profile;
