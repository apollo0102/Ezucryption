import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

import Wrapper from "../../UI/Wrapper";

import convertToRem from "../../../utilities/convertToRem";
import { theme } from "../../../theme";

function BannerContent() {
  return (
    <Wrapper display="flex" flexDirection={["column", "row"]}>
      <ImageHolder></ImageHolder>

      <Box pl={[0, 3]} pt={[3, 0]}>
        <AccountName
          variant="h1"
          mb={0.5}
          className="g-font-family-kern g-font-bold"
        >
          {"Display name"}
        </AccountName>

        <AccountType mb={1.5} className="g-font-family-kern g-font-bold">
          {"Curator"}
        </AccountType>

        <AccountDescription className="g-font-family-kern g-font-style-italic">
          Architects of Taste: Feeding Minds and Stomachs.
          <br /> An experience design and creative studio of artists,
          architects, chefs, designers and strategists.
        </AccountDescription>
      </Box>
    </Wrapper>
  );
}

const AccountName = styled(Typography)`
  font-size: ${convertToRem(48)};
`;

const AccountType = styled(Typography)`
  letter-spacing: 0.022em;
  color: ${theme.colors["dark-20"]};
`;

const AccountDescription = styled(Typography)`
  line-height: 25px;
  color: ${theme.colors["dark-30"]};
`;

const ImageHolder = styled(Box)`
  width: 147px;
  height: 147px;
  background: #eee;
  border-radius: 100%;
  flex: none;
  margin-top: -150px;

  @media screen and (min-width: ${theme.mediaScreens.lg}) {
    width: 300px;
    height: 300px;
  }
`;

export default BannerContent;
