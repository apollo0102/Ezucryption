import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {ThemeProvider, createTheme} from "@mui/material/styles";
import styled from "@emotion/styled";
import SettingsTable from './NotificationTable';
import SeviceFeePanel from './ServicefeePanel';


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
        id={`settings-tabpanel-${index}`}
        aria-labelledby={`settings-tab-${index}`}
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
      id: `settings-tab-${index}`,
      'aria-controls': `settings-tabpanel-${index}`,
    };
}
  
export default function settingsTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
return (
    <ThemeProvider theme={tabTheme}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ backgroundColor:'#fff' }}>
          <Tabs 
            textColor="primary"
            indicatorColor="primary"
            value={value} onChange={handleChange} aria-label="basic tabs example">
            
            <Tab 
                icon={<SpanContainer>4</SpanContainer>} 
                iconPosition="end"
                sx={{textTransform:'capitalize'}} 
                label={`Notifications`} {...tabProps(0)} /> 
            <Tab  
                sx={{textTransform:'capitalize'}} 
                label="Service Fees & Retail Royalties" {...tabProps(1)} />
            <Tab
                sx={{textTransform:'capitalize'}}   
                label="Subscription Pricing" {...tabProps(2)} />
          </Tabs>
        </Box>
        <div style={{marginTop: '0px', }}>
        <TabPanel  value={value} index={0}>
            <SettingsTable />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <SeviceFeePanel />
            
        </TabPanel>
        <TabPanel value={value} index={2}>
            {/* Monitor Container */}
          
        </TabPanel>
        </div>
        
      </Box>
    </ThemeProvider>
    );
}

const LinksContainer = styled.div`{
width:100%;
background:red;
display:flex;
height:800px;
}`
const SpanContainer = styled.span`
height:20px;
width:20px;
pading:10px;
font-family: 'Kern';
font-style: normal;
font-weight: 700;
margin-top:-20px;
font-size: 10px;
display:flex;
align-items:center;
justify-content:center;
line-height: 12px;
color: #FBFBFB;
border-radius:50%;
background: #FF7474;
`