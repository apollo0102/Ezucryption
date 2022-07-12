import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography, Box } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import styles from "./SubmitArtWork.module.scss";
import styled from "@emotion/styled";

const SubmitArtWork = () => {
  return (
    <>
      <ShadowCircle mb={2}>
        <Typography
          className="g-font-family-kern g-font-bold"
          sx={{ fontSize: [20], lineHeight: "110%" }}
          mb={1}
        >
          Crypto Canapés
        </Typography>

        <Typography
          className="g-font-family-kern"
          sx={{ fontSize: [8], maxWidth: "50%" }}
        >
          ccurated by: Bompas & Parr MA+ World
        </Typography>
      </ShadowCircle>

      <Link href="/" passHref>
        <Box display="flex" alignItems="center" ml={[0, 10]}>
          <Typography
            className="g-font-family-kern"
            sx={{ fontSize: [14, 10] }}
            mr={1}
          >
            Submit your artwork
          </Typography>

          <Box mt={0.5}>
            <StyledArrow />
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default SubmitArtWork;

const ShadowCircle = styled(Box)`
  max-width: 8.25rem;
  width: 8.25rem;
  max-height: 8.25rem;
  height: 8.25rem;
  background: #eef8f3;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0.5rem;
  text-align: center;
  box-shadow: 7.40006px 7.40006px 0px rgba(0, 0, 0, 0.2);
`;

const StyledArrow = styled(ArrowForwardIosOutlinedIcon)`
  color: #d8d8d8;
  width: 14.7px;
  height: 14.7px;
`;
