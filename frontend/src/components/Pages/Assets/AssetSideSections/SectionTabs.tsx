import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {ThemeProvider, createTheme} from "@mui/material/styles";
import styled from "@emotion/styled";
import Link from "next/link";
import PrimaryRoyaltyTable from './PrimaryTable'
import SecondaryTable from './SecondaryTable'

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
        id={`Royalty-tabpanel-${index}`}
        aria-labelledby={`Royalty-tab-${index}`}
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
      id: `Royalty-tab-${index}`,
      'aria-controls': `Royalty-tabpanel-${index}`,
    };
}
  
export default function SectionTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
return (
    <ThemeProvider theme={tabTheme}>
      <Box sx={{ width: '100%'}}>
        <Box sx={{ marginTop:'100px', borderTop:'1px solid'  }}>
          <Tabs 
            textColor="primary"
            indicatorColor="primary"
            variant="fullWidth"
            sx={{'& .MuiTabs-indicator': {
              width: '0px !important'
            }}}
            value={value} onChange={handleChange} aria-label="basic tabs example">
            
            <SecondTab  label="PRIMARY SALES ROYALTIES SPLIT" {...tabProps(0)} />
            <SecondTab  label="RESALE ROYALTIES SPLIT" {...tabProps(1)} />
            <SecondTab  label="REQUESTS HISTORY" {...tabProps(2)} />
          </Tabs>
        </Box>
        <div style={{marginTop: '0px', }}>
        <TabPanel  value={value} index={0}>
             <SecondaryTable /> 
        </TabPanel>
        <TabPanel value={value} index={1}>
            <SecondaryTable /> 
        </TabPanel>
        <TabPanel value={value} index={2}>
            <SecondaryTable /> 
        </TabPanel>
        </div>
        <LinksContainer>
            </LinksContainer>
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
const SecondTab = styled(Tab)`
font-family: Haffer;
font-weight: 300;
color: #6F6F6F;
font-size: 18px;

&.Mui-selected {
  font-family: Kern;
  color: #000000;
  font-weight: 500;
  text-decoration: underline solid 20%;
},

`