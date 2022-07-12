import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

import convertToRem from "../../../utilities/convertToRem";
import { theme } from "../../../theme";

import UploadCloud from "./SvgImage/UploadCloud.svg";

function Banner() {
  return (
    <Wrapper>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <UploadCloud />
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  height: ${convertToRem(346)};
  background-color: ${theme.colors["success-10"]};
`;

export default Banner;
