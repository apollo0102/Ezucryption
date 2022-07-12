import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import { NextPage } from "next";

interface AssetCardProps {
  image: string;
  name: string;
  creator: string;
  price?: string;
  buy?: (id: string) => void;
  waitList?: string;
}

const AssetCard: NextPage<AssetCardProps> = ({
  image,
  name,
  creator,
  price,
  buy,
  waitList,
}) => {
  return (
    <Card px={1.8} py={2}>
      <Box
        width={"100%"}
        height={193}
        sx={{ backgroundColor: "#eee", position: "relative" }}
      >
        <Image
          src={`/images/vitamins/${image}`}
          layout="fill"
          alt={image}
          objectFit="cover"
          loading="lazy"
        />
      </Box>

      <Name className="g-font-family-kern">{name}</Name>

      <Creator className="g-font-family-kern" mb={0.5}>
        {creator}
      </Creator>

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <AssetPrice className="g-font-family-kern g-font-bold">
          {price ? price : "TBD"} ETH
        </AssetPrice>

        {!waitList && (
          <Link href="/waitlist" passHref>
            <AssetCardButton
              component="button"
              px={1.8}
              py={0.4}
              className="g-font-family-kern g-font-bold"
            >
              Waitlist
            </AssetCardButton>
          </Link>
        )}
      </Box>
    </Card>
  );
};

export default AssetCard;

const Card = styled(Box)`
  background: #ffffff;
  box-shadow: 0px 6.92263px 17.3066px rgba(0, 0, 0, 0.1);
  border-radius: 17.3255px;
`;

const Name = styled(Typography)`
  padding-top: 8px;
  font-size: 18px;
  opacity: 1;
`;

const Creator = styled(Typography)`
  font-size: 11.62px;
  opacity: 1;
  color: #707070;
`;

const AssetPrice = styled(Typography)`
  font-size: 1rem;
  opacity: 1;
  color: #ba7e86;
`;

const AssetCardButton = styled(Typography)<{ component: string }>`
  background: #6f6f6f;
  border-radius: 18px;
  border-style: none;
  opacity: 1;
  cursor: pointer;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 16.06px;
  text-transform: capitalize;
`;
