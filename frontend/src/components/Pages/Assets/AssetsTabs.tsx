import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {ThemeProvider, createTheme} from "@mui/material/styles";
import AssetGenericTab from './AssetGenericTab';
import MonitorPanel from './MonitorPanel';
import styled from "@emotion/styled";
import GenericTab from './MetaAssetTab';

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
  
export default function RoyaltyTabs() {
    const [value, setValue] = React.useState(1);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
return (
    <ThemeProvider theme={tabTheme}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ backgroundColor:'rgba(227, 229, 230, 0.44);', padding:'6px 38px 12px 26px' }}>
          <Tabs 
            textColor="primary"
            indicatorColor="primary"
            variant="fullWidth"
            sx={{'& .MuiTabs-indicator': {
              width: '0px !important'
            },}}
            value={value} onChange={handleChange} aria-label="basic tabs example">
            
            <FirstTab  label="CERTIFY" {...tabProps(0)} />
            <FirstTab  label="SELL" {...tabProps(1)} />
            <FirstTab  label="MONITOR" {...tabProps(2)} />
          </Tabs>
        </Box>
        <div style={{marginTop: '0px', }}>
        <TabPanel  value={value} index={0}>
          <GenericTab
            firstTitle="METADATA"
            secondTitle="CATEGORY DETAILS"
            thirdTitle=" COPYRIGHT"
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <AssetGenericTab
                firstTitle="FIXED SALE"
                secondTitle="AUCTION"
                thirdTitle="LICENCE"
                fourthTitle="ROYALTIES"
            />
            
        </TabPanel>
        <TabPanel value={value} index={2}>
            <MonitorPanel />
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
const FirstTab = styled(Tab)`
font-family: Kern;
font-weight: 400;
color: #6F6F6F;
font-size: 20px;

&.Mui-selected {
  color: #000000;
  font-weight: 700;
  text-decoration: underline solid 10%;
},

`
