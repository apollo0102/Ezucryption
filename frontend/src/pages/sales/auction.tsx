import React, { useState } from "react";
import { Box } from "@mui/material";

import Wrapper from "../../components/UI/Wrapper";
import LinkModal from "../../components/Partials/LinkModal";
import AuctionComponent from "../../components/Pages/Sales/Auction";
import HomeAppBar from "../../components/Partials/NavBars/HomeAppBar/HomeAppbar";
import FooterRoot from "../../components/Partials/Footer/FooterRoot";

function AuctionSale() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <HomeAppBar />
      <LinkModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <Box sx={{ width: "85%", margin: "0 auto" }}>
          <AuctionComponent />
        </Box>
      </LinkModal>

      <Wrapper pt={5} pb={8}>
        <AuctionComponent />
      </Wrapper>
      <FooterRoot />
    </div>
  );
}

export default AuctionSale;
