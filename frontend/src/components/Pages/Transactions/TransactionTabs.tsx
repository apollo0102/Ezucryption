import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {ThemeProvider, createTheme} from "@mui/material/styles";
import styled from "@emotion/styled";
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import AllTransactionsPanel from './AllTransactionsPanel';
// import SeviceFeePanel from './ServicefeePanel';


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
          <StyledTabs 
            textColor="primary"
            indicatorColor="primary"
            value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab 
                sx={{textTransform:'capitalize'}} 
                label={`All`} {...tabProps(0)} /> 
            <Tab  
                sx={{textTransform:'capitalize'}} 
                label="Fixed" {...tabProps(1)} />
            <Tab
                sx={{textTransform:'capitalize'}}   
                label="Auction" {...tabProps(2)} />
            <Tab
                sx={{textTransform:'capitalize'}}   
                label="License" {...tabProps(3)} />

            <SearchContainer>
                <SearchInput placeholder="Search" />
                <Button>Export CSV</Button>
                <Button><FilterListIcon sx={{marginRight:'10px'}}></FilterListIcon>Filter</Button>
                <Button><SortIcon sx={{marginRight:'10px'}} />Sort</Button>
            </SearchContainer>
          </StyledTabs>


          
          
        </Box>
        <div style={{marginTop: '0px', }}>
        <TabPanel  value={value} index={0}>
            <AllTransactionsPanel />
        </TabPanel>
        <TabPanel value={value} index={1}>
            {/* <SeviceFeePanel /> */}
            
        </TabPanel>
        <TabPanel value={value} index={2}>
            {/* Monitor Container */}
          
        </TabPanel>
        <TabPanel value={value} index={3}>
            {/* Monitor Container */}
        </TabPanel>
        </div>
        
      </Box>
    </ThemeProvider>
    );
}

const SearchContainer = styled.div`
display:flex;
position:absolute;
right:0;
height:100%;
align-items:center;
`
const StyledTabs = styled(Tabs)`
position:relative;
`
const SearchInput = styled.input`
background: #F7F9FA;
border: none;
outline: none;
padding: 10px 30px;
border-radius: 6px;

`
const Button = styled.button`
background: none;
border: none;
outline: none;
padding: 10px 15px;
cursor: pointer;
margin-left:20px;
font-family: 'Kern';
font-style: normal;
font-weight: 700;
font-size: 14px;
display:flex;
align-items:center;
justify-content:center;
`