import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {ThemeProvider, createTheme} from "@mui/material/styles";
import styled from "@emotion/styled";
import PrivacyPolicy from './PrivacyPolicyPanel';


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
        <Box sx={{ backgroundColor:'#fff', borderTop:'1px solid #D2D2D6', marginTop:'20px', }}>
          <Tabs 
            textColor="primary"
            indicatorColor="primary"
            value={value} onChange={handleChange} aria-label="basic tabs example">
            
            <Nav 
                sx={{textTransform:'capitalize', color: '#2979FF'}} 
                label={`Privacy Policy`} {...tabProps(0)} /> 
            <Nav  
                sx={{textTransform:'capitalize'}} 
                label="Terms" {...tabProps(1)} />
            <Nav
                sx={{textTransform:'capitalize'}}   
                label="IP Agreement" {...tabProps(2)} />
            <Nav
                sx={{textTransform:'capitalize'}}   
                label="Community Agreement" {...tabProps(3)} />


          </Tabs>
        </Box>
        <div style={{marginTop: '0px', }}>
        <TabPanel  value={value} index={0}>
            <PrivacyPolicy />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <PrivacyPolicy />
        </TabPanel>
        <TabPanel value={value} index={2}>
         <PrivacyPolicy />
        </TabPanel>
        <TabPanel value={value} index={3}>
        <PrivacyPolicy />
        </TabPanel>
       
        </div>
        
      </Box>
    </ThemeProvider>
    );
}



const Nav = styled(Tab)`
color: #2979FF;
font-family: 'Kern';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;

`
const Container = styled.section`

`