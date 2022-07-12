import React from "react";
import { Dialog, Box } from "@mui/material";
import styled from "@emotion/styled";

import { theme } from "../../../theme";

function LinkModal({
  children,
  isOpen,
  handleClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}) {
  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth={false}>
      <ViewBox p={2} pb={10}>
        <svg width="27" height="24" viewBox="0 0 27 24" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.3756 0H18.6978C17.9633 0 17.3623 0.54 17.3623 1.2C17.3623 1.86 17.9633 2.4 18.6978 2.4H22.1569L15.0918 8.748C14.8381 8.964 14.6912 9.264 14.6912 9.6C14.6912 10.26 15.2922 10.8 16.0267 10.8C16.4007 10.8 16.7346 10.668 16.975 10.452L24.0401 4.092V7.2C24.0401 7.86 24.6411 8.4 25.3756 8.4C26.1102 8.4 26.7112 7.86 26.7112 7.2V1.2C26.7112 0.54 26.1102 0 25.3756 0ZM10.6845 13.2C10.3105 13.2 9.97663 13.332 9.73623 13.548L2.67112 19.908V16.8C2.67112 16.14 2.07012 15.6 1.33556 15.6C0.601002 15.6 0 16.14 0 16.8V22.8C0 23.46 0.601002 24 1.33556 24H8.01336C8.74792 24 9.34892 23.46 9.34892 22.8C9.34892 22.14 8.74792 21.6 8.01336 21.6H4.55426L11.6194 15.252C11.8731 15.036 12.02 14.736 12.02 14.4C12.02 13.74 11.419 13.2 10.6845 13.2Z"
            fill="#4A4B57"
          />
        </svg>

        {children}
      </ViewBox>
    </Dialog>
  );
}

export default LinkModal;

const ViewBox = styled(Box)`
  width: 100%;
  @media screen and (min-width: ${theme.mediaScreens.md}) {
    width: 1100px;
  }
`;
