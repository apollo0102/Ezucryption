import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

import { TabPanel, tabProps } from "../../../UI/TabManager";
import Offers from "./Offers";
import Analytics from "./Analytics";
import PriceHistory from "./PriceHistory";
import Traits from "./Traits";
import { theme } from "../../../../theme";

function AuctionComponent() {
  const tabs = ["PRICE HISTORY", "OFFERS", "ANALYTICS", "TRAITS"];
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Typography className="g-font-family-haffer" sx={{ fontSize: 38 }} mb={4}>
        AUCTION
      </Typography>

      <Grid container>
        <Grid sm={6}>
          <Box sx={{ width: 370 }}>
            <Box sx={{ height: 370, background: "#eee" }} mb={2}></Box>

            <Box
              display="flex"
              alignItems="center"
              justifyContent={["space-between"]}
              mb={6.3}
            >
              <Typography className="g-font-family-kern" sx={{ fontSize: 13 }}>
                AIMSIR Studio
              </Typography>

              <Box display="flex" alignItems="center">
                <CustomButton className="g-font-family-kern">buy</CustomButton>

                <CustomButton ml={3} className="g-font-family-kern">
                  licence
                </CustomButton>
              </Box>
            </Box>

            <Box>
              <Typography
                className="g-font-family-haffer"
                sx={{ fontSize: 18 }}
                mb={2.3}
              >
                ARTWORK DESCRIPTION
              </Typography>

              <Typography
                className="g-font-family-kern"
                sx={{ fontSize: 14, lineHeight: "23px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pharetra semper tempor libero dolor luctus. Adipiscing amet,
                quis enim, pellentesque in dolor.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid sm={6} mt={[14, 0]}>
          <Box
            display="flex"
            justifyContent={["space-between"]}
            alignItems="baseline"
            sx={{ borderBottom: "1px solid" }}
            pb={0.6}
          >
            <Typography
              className="g-font-family-kern g-font-medium"
              sx={{ fontSize: 12, color: "#a1a1a1" }}
            >
              Edition 1 of 14
            </Typography>

            <Typography className="g-font-family-haffer" sx={{ fontSize: 36 }}>
              {"VITAMIN D"}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="end" mt={1.3}>
            <Typography
              className="g-font-family-kern g-font-medium"
              sx={{ fontSize: 10 }}
            >
              Ending in 2h 57min 31sec
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection={["column"]}
            alignItems="end"
            mt={3}
          >
            <Typography
              className="g-font-family-kern"
              sx={{ fontSize: 18, color: "#46A8E0" }}
            >
              CURRENT BID
            </Typography>

            <Typography
              className="g-font-family-haffer g-font-medium"
              sx={{
                color: "#46A8E0",
                fontSize: 64,
                padding: 0,
              }}
            >
              1.576 ETH
            </Typography>

            <Typography
              className="g-font-family-kern g-font-medium"
              sx={{ fontSize: 12, color: "#a1a1a1" }}
              mb={1.5}
            >
              450 USD
            </Typography>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7487 0.0304833C8.93746 0.259566 6.96151 0.951724 5.56933 1.84489C2.82948 3.60258 0.916108 6.36762 0.189628 9.61921C-0.0662299 10.7644 -0.0625538 13.2251 0.196898 14.44C0.527503 15.9882 1.30651 17.8423 1.85 18.3748C2.236 18.7528 2.56096 18.8344 3.42158 18.7693C4.26782 18.7053 4.61362 18.5847 4.80943 18.2854C4.93499 18.0933 4.94864 17.7365 4.94864 14.6442V11.216L5.13489 10.939C5.42514 10.5076 5.60094 10.4575 6.82754 10.4575C8.02129 10.4575 8.20943 10.5065 8.49437 10.8907C8.66004 11.1143 8.6669 11.2311 8.70644 14.5028L8.74728 17.8839L9.25794 17.7267C10.1068 17.4656 10.048 17.8141 10.0952 12.7643L10.136 8.39548L10.4028 8.15674L10.6696 7.918H11.9163C13.2802 7.918 13.415 7.9563 13.6493 8.40996C13.7524 8.60983 13.7713 9.23635 13.7713 12.4563C13.7713 14.8671 13.8005 16.2661 13.8506 16.2661C14.0627 16.2661 14.8248 15.8526 14.9821 15.6522L15.1601 15.4256L15.1604 10.751C15.1606 6.20679 15.1653 6.06897 15.3256 5.80559C15.5759 5.39399 15.901 5.29897 17.058 5.29897C18.2081 5.29897 18.5146 5.40259 18.7686 5.87696C18.9068 6.13526 18.9179 6.429 18.9179 9.86606V13.5764L19.1833 13.3911C20.3198 12.598 22.4602 10.5479 23.0327 9.70425C23.5733 8.90766 23.5333 8.44082 22.7889 6.85754C22.2064 5.6189 21.4477 4.54854 20.4345 3.5367C18.7122 1.81641 16.7463 0.748668 14.3243 0.217825C13.5833 0.0554459 11.4396 -0.0569266 10.7487 0.0304833ZM23.3738 12.0176C22.0038 13.8558 20.0995 15.6095 17.9378 17.0238C15.1583 18.8422 12.0243 20.1749 8.46162 21.0532C7.40544 21.3135 5.24537 21.75 5.01287 21.75C4.83013 21.75 5.6762 22.2925 6.56917 22.7478C7.55232 23.2492 8.5523 23.6021 9.68699 23.8485C10.2273 23.9659 10.7348 23.9994 11.9743 24C13.7554 24.0008 14.3244 23.9146 15.8128 23.4185C19.8269 22.0804 22.8599 18.6526 23.7365 14.4634C23.8989 13.6869 24.0738 11.2739 23.9676 11.2739C23.9459 11.2739 23.6787 11.6086 23.3738 12.0176Z"
                fill="black"
                fill-opacity="0.5"
              />
            </svg>
          </Box>

          <Box>
            <Typography
              className="g-font-family-haffer"
              mb={10}
              mt={5}
              sx={{ fontSize: 18 }}
            >
              BID SUCCESSFUL
            </Typography>

            <Typography
              className="g-font-family-haffer"
              mb={2}
              sx={{ fontSize: 18 }}
            >
              ADDITIONAL CONTENT
            </Typography>

            <Typography className="g-font-family-kern" sx={{ fontSize: 14 }}>
              This NFT includes an exclusive invitation at the Dubai Expo 2020
              to an exclusive reception with the real live version of the
              digital canapes.{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        display="flex"
        flexDirection={["column", "row"]}
        alignItems={["end", "center"]}
        justifyContent="end"
        mt={10}
      >
        <ActionButton
          className="g-font-family-kern g-font-medium"
          style={{ height: 48 }}
          display="flex"
          alignItems="center"
          px={10}
          mr={[0, 3]}
          mb={[2, 0]}
        >
          Buy Now
        </ActionButton>

        <ActionButton
          className="g-font-family-kern g-font-medium"
          outlined
          style={{ height: 48 }}
          display="flex"
          alignItems="center"
          px={10}
        >
          Bid
        </ActionButton>
      </Box>

      <Box pt={1.7} mt={16} sx={{ borderTop: "1px solid" }}>
        <Box
          display="flex"
          flexDirection={["column", "row"]}
          alignItems={["flex-start"]}
          mb={4}
        >
          {tabs.map((tab, i) => (
            <Tab
              key={i}
              className="g-font-family-haffer"
              component="button"
              mr={5}
              mb={[2, 0]}
              align="left"
              {...tabProps(i, "auction-sale")}
              isActive={i === selectedTab}
              onClick={() => setSelectedTab(i)}
            >
              {tab}
            </Tab>
          ))}
        </Box>

        <TabPanel value={selectedTab} index={0} panelName="auction-sale">
          <PriceHistory />
        </TabPanel>

        <TabPanel value={selectedTab} index={1} panelName="auction-sale">
          <Offers />
        </TabPanel>

        <TabPanel value={selectedTab} index={2} panelName="auction-sale">
          <Analytics />
        </TabPanel>

        <TabPanel value={selectedTab} index={3} panelName="auction-sale">
          <Traits />
        </TabPanel>
      </Box>
    </>
  );
}

export default AuctionComponent;

const CustomButton = styled(Typography)`
  background-color: transparent;
  border-style: none;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid;
  }
`;

const ActionButton = styled(Typography)<{ outlined?: boolean }>`
  ${(props) => (props.outlined ? "border: 1px solid" : "background: #d8d8d8")};
  box-shadow: 0px 0.498481px 0.996962px rgba(15, 15, 15, 0.1);
  border-radius: 4.98481px;
`;

const Tab = styled(Typography)<{ isActive: boolean; component: string }>`
  font-size: 18px;
  color: ${(props) => (props.isActive ? theme.colors.dark : "#787885 ")};
  border-style: none;
  border-bottom: ${(props) =>
    props.isActive ? `1px solid ${theme.colors.dark}` : ""};
  background: transparent;
  cursor: pointer;
`;
