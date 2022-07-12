import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

import Banner from "./banner";
import About from "./about";
import FeedsFeature from "../../Pages/Feeds/Feature";

import style from "./index.module.scss";

const Collections = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Banner profileImg="/icons/collections/userprofile.svg" bannerImg="" />

      <About
        status={false}
        name="Display name"
        wallet="XX5550...RStu8900x"
        likes="3,145"
        followers="11.7"
        label="Architects of Taste: Feeding Minds and Stomachs. "
        description="An experience design and creative studio of artists, architects, chefs, designers and strategists. "
      />

      <Box className={`${style.profile_container} profile-tabs-global`}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className={style.all_tabs}
          >
            <Tab label="Collections" />
            <Tab label="Minted" />
            <Tab label="Collected" />
            <Tab label="Likes" />
            <Tab label="Private" />
            <Tab label="Curating" />
            <Tab label="On Sale" />
            <Tab label="Activity" />
          </Tabs>
        </Box>
        <TabPanel className="p-0" value={value} index={0}>
          <FeedsFeature />
        </TabPanel>
        <TabPanel className="p-0" value={value} index={1}>
          Minted
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default Collections;
