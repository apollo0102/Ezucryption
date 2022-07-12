import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {ThemeProvider, createTheme} from "@mui/material/styles";
import styled from "@emotion/styled";
import CuratorRequestTable from './CuratorRequestTable'
import SectionTitle from './SectionHeading'


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

const tabTheme = createTheme({
    palette: {
      primary: {
        main: "#000000",
        dark: "#000000",
        contrastText: "#fff"
      }
    }
});

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`Currator-tabpanel-${index}`}
        aria-labelledby={`Currator-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div >
            <Typography>{children}</Typography>
          </div>
        )}
      </div>
    );
}
  
function tabProps(index: number) {
    return {
      id: `Currator-tab-${index}`,
      'aria-controls': `Currator-tabpanel-${index}`,
    };
}
  
export default function SectionTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
return (
    <ThemeProvider theme={tabTheme}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ marginTop:'60px' }}>
        <SectionTitle heading="Currator / Creator Requests"  />
          <Tabs 
            textColor="primary"
            indicatorColor="primary"
            variant="fullWidth"
            value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab  label="CURATORS REQUEST" {...tabProps(0)} />
            <Tab  label="CURATORS REQUEST" {...tabProps(1)} />
            <Tab  label="PAYMENT SPLIT SUMMARY" {...tabProps(2)} />
          </Tabs>
        </Box>
        <div style={{marginTop: '0px', }}>
        <TabPanel  value={value} index={0}>
             <CuratorRequestTable /> 
        </TabPanel>
        <TabPanel value={value} index={1}>
            <CuratorRequestTable /> 
        </TabPanel>
        <TabPanel value={value} index={2}>
            <CuratorRequestTable /> 
        </TabPanel>
        </div>
      </Box>
    </ThemeProvider>
    );
}


