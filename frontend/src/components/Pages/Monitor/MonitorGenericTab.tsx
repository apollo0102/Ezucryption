import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NextPage } from "next";
import AuctionPanel from "./PrimaryPanel";
import LicencePanel from "./LicencePanel";
import FixedSalesPanel from "./FixedSalesPanel";
import RoyaltiesPanel from "../Assets/MonitorPanel";
import Link from "next/link";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface RoyaltiesGenericTabProps {
  firstTitle?: string;
  secondTitle?: string;
  thirdTitle?: string;
  fourthTitle?: string;
}
const tabTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      dark: "#000000",
      contrastText: "#fff",
    },
  },
});

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`generic-tabpanel-${index}`}
      aria-labelledby={`generic-tab-${index}`}
      {...other}
    >
      {value === index && <PanelWrapper>{children}</PanelWrapper>}
    </div>
  );
}

function tabProps(index: number) {
  return {
    id: `generic-tab-${index}`,
    "aria-controls": `generic-tabpanel-${index}`,
  };
}

const RoyaltiesGenericTab: NextPage<RoyaltiesGenericTabProps> = ({
  firstTitle,
  secondTitle,
  thirdTitle,
  fourthTitle,
}) => {
  const [value, setValue] = React.useState(3);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={tabTheme}>
      <Box sx={{ width: "100%", marginTop: "13px" }}>
        <Tabs
          sx={{ width: "100%", backgroundColor: "#F3F3F4" }}
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={firstTitle} {...tabProps(0)} />
          <Tab label={secondTitle} {...tabProps(1)} />
          <Tab label={thirdTitle} {...tabProps(2)} />
          <Tab label={fourthTitle} {...tabProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <FixedSalesPanel />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AuctionPanel />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <LicencePanel />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <RoyaltiesPanel />
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
};

export default RoyaltiesGenericTab;

const PanelWrapper = styled.div``;
