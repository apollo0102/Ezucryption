import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { theme } from "../../../theme";

export default styled(Box)`
  width: 85%;
  margin: 0 auto;

  @media screen and (min-width: ${theme.mediaScreens.xl}) {
    width: 1200px;
    margin: 0 auto;
  }
`;
