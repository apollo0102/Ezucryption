import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {ThemeProvider, createTheme} from "@mui/material/styles";
import styled from "@emotion/styled";
import WelcomePagePanel from './WelcomePagePanel';
import HomepagePagePanel from './HomePagePanel';
import AgrrementPagePanel from './AggreementsPanel';
import FiltersListPanel from './FiltersAdminPanel';


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
            <Container>{children}</Container>
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
                sx={{textTransform:'capitalize'}} 
                label={`Welcome Page`} {...tabProps(0)} /> 
            <Tab  
                sx={{textTransform:'capitalize'}} 
                label="Home Page" {...tabProps(1)} />
            <Tab
                sx={{textTransform:'capitalize'}}   
                label="Feed Page" {...tabProps(2)} />
            <Tab
                sx={{textTransform:'capitalize'}}   
                label="Featured Users" {...tabProps(3)} />
            <Tab
                sx={{textTransform:'capitalize'}}   
                label="Agreements" {...tabProps(4)} />
            <Tab
                sx={{textTransform:'capitalize'}}   
                label="Blog Pages" {...tabProps(5)} />
            <Tab
                sx={{textTransform:'capitalize'}}   
                label="PR Page" {...tabProps(6)} />
            <Tab
                sx={{textTransform:'capitalize'}}   
                label="Drops/Events" {...tabProps(7)} />

          </Tabs>
        </Box>
        <div style={{marginTop: '0px', }}>
        <TabPanel  value={value} index={0}>
            <WelcomePagePanel />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <HomepagePagePanel />
        </TabPanel>
        <TabPanel value={value} index={2}>
            
          
        </TabPanel>
        <TabPanel value={value} index={3}>
              
        </TabPanel>
        <TabPanel value={value} index={4}>
            <AgrrementPagePanel/>
        </TabPanel>
        <TabPanel value={value} index={5}>
               <h2>Blog Pages</h2>
        </TabPanel>
        <TabPanel value={value} index={6}>
               <h2>PR Page</h2>
        </TabPanel>
        <TabPanel value={value} index={7}>
                <h2>Drops/Events</h2>
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
const Container = styled.section`

`