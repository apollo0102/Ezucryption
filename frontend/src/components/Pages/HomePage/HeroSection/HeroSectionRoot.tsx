import React from "react";
import { Box } from "@mui/material";
import Wrapper from "../../../UI/Wrapper";

import JoinOurCommunity from "../../../Partials/JoinOurCommunity/JoinOurCommunity";
import HelloSection from "./HelloSection";

const HeroSectionRoot = () => {
  return (
    <div>
      <HelloSection />

      <Wrapper>
        <Box display={["block", "none"]} width={["100%", "95%"]} mx={"auto"}>
          <JoinOurCommunity />
        </Box>
      </Wrapper>
    </div>
  );
};

export default HeroSectionRoot;
