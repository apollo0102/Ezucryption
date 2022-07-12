import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from "@emotion/styled";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import { NextPage } from "next";
import PrimaryPanel from './PrimaryPanel';
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

interface AssetsPanelProps{
  firstTitle : string;
  secondTitle: string;
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
        id={`generic-tabpanel-${index}`}
        aria-labelledby={`generic-tab-${index}`}
        {...other}
      >
        {value === index && (
          <PanelWrapper>{children}</PanelWrapper>
        )}
      </div>
    );
}
  
function tabProps(index: number) {
    return {
      id: `generic-tab-${index}`,
      'aria-controls': `generic-tabpanel-${index}`,
    };
}
  
const AssetsPanel :NextPage<AssetsPanelProps> = ({firstTitle, secondTitle,})  =>{
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
return (
    <ThemeProvider theme={tabTheme}>
      <Box sx={{ width: '100%', marginTop: '13px' }}>
          <Tabs
            sx={{ width: '100%', backgroundColor: '#F3F3F4', '& .MuiTabs-indicator': {
              width: '0px !important'
            } }} 
            variant="fullWidth"
            value={value} onChange={handleChange} aria-label="basic tabs example">
  
            <SecondTab label={firstTitle} {...tabProps(0)} />
            <SecondTab label={secondTitle} {...tabProps(1)} />
          </Tabs>
        <TabPanel  value={value} index={0}>
            <PrimaryPanel />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PrimaryPanel />
        </TabPanel>
      </Box>
    </ThemeProvider>
    );
}

export default AssetsPanel

const PanelWrapper = styled.div`

`
const SecondTab = styled(Tab)`
font-family: Haffer;
font-weight: 400;
color: #6F6F6F;
font-size: 12px;

&.Mui-selected {
  color: #000000;
  font-weight: 700;
  text-decoration: underline solid 10%;
},

`