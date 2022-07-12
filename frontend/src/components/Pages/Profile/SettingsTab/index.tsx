import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

import { TabPanel, tabProps } from "../../../UI/TabManager";
import Notifications from "./Notifications";
import Billings from "./Billings";

import { theme } from "../../../../theme";
import convertToRem from "../../../../utilities/convertToRem";

function SettingsTab() {
  const tabs = ["Notifications", "Billings"];
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Box pt={6}>
      <Box display="flex" mb={5}>
        {tabs.map((tab, i) => (
          <Tab
            key={i}
            className="g-font-family-kern"
            component="button"
            mr={5}
            align="left"
            {...tabProps(i, "profile-settings")}
            isActive={i === selectedTab}
            onClick={() => setSelectedTab(i)}
          >
            {tab}
          </Tab>
        ))}
      </Box>

      <TabPanel value={selectedTab} index={0} panelName="profile-settings">
        <Typography
          className="g-font-family-kern"
          sx={{ color: "rgba(0, 0, 0, 0.49)", fontSize: 14 }}
          mb={4}
        >
          Select the notifications you wish to receive
        </Typography>

        <Notifications />
      </TabPanel>
      <TabPanel value={selectedTab} index={1} panelName="profile-settings">
        <Billings />
      </TabPanel>
    </Box>
  );
}

export default SettingsTab;

const Tab = styled(Typography)<{ isActive: boolean; component: string }>`
  font-size: ${convertToRem(20)};
  color: ${(props) => (props.isActive ? theme.colors["dark-40"] : "#787885 ")};
  font-weight: ${(props) => (props.isActive ? 700 : 400)};
  border: none;
  background: transparent;
  cursor: pointer;
  border-bottom: ${(props) => (props.isActive ? "1.5px solid" : "")};
`;
