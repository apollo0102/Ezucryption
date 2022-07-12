import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { Share, Favorite, Add } from "@mui/icons-material";

import AssetCard from "../../Partials/AssetCards/AssetCard";
import { StrippedButton } from "../../UI/Buttons";

import { data } from "../../../../mockDb/feature";
import { theme } from "../../../theme";

function PersonalCollections() {
  return (
    <CustomGrid>
      {data.map((d, i) => (
        <CardWraper key={`rand${i}${d.name}`}>
          <AssetCard name={d.name} image={d.image} creator={d.artist} />

          <Box display="flex" alignItems="center" justifyContent="end" mt={2.5}>
            <ActionButton mr={2}>
              <Share />
            </ActionButton>

            <ActionButton mr={2}>
              <Favorite />
            </ActionButton>

            <ActionButton>
              <Add />
            </ActionButton>
          </Box>
        </CardWraper>
      ))}
    </CustomGrid>
  );
}

export default PersonalCollections;

const CustomGrid = styled(Box)`
  display: grid;
  row-gap: 50px;

  @media screen and (min-width: ${theme.mediaScreens.md}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 25px;
  }

  @media screen and (min-width: ${theme.mediaScreens.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ActionButton = styled(StrippedButton)`
  color: #d2d2d6;

  &:hover {
    color: #000;
    transition: all 0.5s;
  }
`;

const CardWraper = styled(Box)`
  width: 250px;
  margin: 0 auto;

  @media screen and (min-width: ${theme.mediaScreens.md}) {
    width: 100%;
  }
`;
