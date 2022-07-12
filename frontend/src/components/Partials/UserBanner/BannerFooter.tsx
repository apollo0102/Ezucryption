import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

import Wrapper from "../../UI/Wrapper";

function BannerFooter() {
  return (
    <Wrapper
      display="flex"
      flexDirection={["column", "row"]}
      alignItems={["end", "center"]}
      justifyContent={["start", "end"]}
      pt={1}
    >
      <Box mr={[0, 4]} display="flex" alignItems="center">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.70808 11.582C2.41825 11.731 2.09008 11.4707 2.14843 11.1381L2.77072 7.59095L0.128972 5.07347C-0.117913 4.83819 0.00988702 4.40802 0.340629 4.36104L4.01449 3.83914L5.65258 0.594229C5.80014 0.301924 6.19986 0.301924 6.34742 0.594229L7.98551 3.83914L11.6594 4.36104C11.9901 4.40802 12.1179 4.83819 11.871 5.07347L9.22928 7.59095L9.85157 11.1381C9.90992 11.4707 9.58175 11.731 9.29192 11.582L6 9.89008L2.70808 11.582Z"
            fill="#ED9526"
          />
        </svg>

        <Box ml={1} sx={{ fontSize: 14 }}>
          <span className="g-font-medium">{"3,456"}</span> likes
        </Box>
      </Box>
      <Box mr={[0, 4]} sx={{ fontSize: 14 }}>
        37.5K Followers
      </Box>
      <Box sx={{ fontSize: 14 }}>wallet address</Box>{" "}
      <Box sx={{ fontSize: 14 }}>XX5550...RStu8900x</Box>
    </Wrapper>
  );
}

export default BannerFooter;
