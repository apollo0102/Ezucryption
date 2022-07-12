import React, { useState } from "react";
import { Box } from "@mui/material";

import FixedComponent from "../../components/Pages/Sales/Fixed";
import HomeAppBar from "../../components/Partials/NavBars/HomeAppBar/HomeAppbar";
import FooterRoot from "../../components/Partials/Footer/FooterRoot";
import Wrapper from "../../components/UI/Wrapper";
import LinkModal from "../../components/Partials/LinkModal";

function FixedSale() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <HomeAppBar />
      <LinkModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <Box sx={{ width: "85%", margin: "0 auto" }}>
          <FixedComponent />
        </Box>
      </LinkModal>

      <Wrapper pt={5} pb={8}>
        <FixedComponent />
      </Wrapper>
      <FooterRoot />
    </div>
  );
}

export default FixedSale;
