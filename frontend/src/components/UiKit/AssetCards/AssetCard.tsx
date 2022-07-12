import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Grid, CardContent, Typography, Tooltip, Button } from "@mui/material";
import styles from "./card.module.scss";
import { styled } from "@mui/system";
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
  const StyledCardContent = styled(CardContent)(
    ({ theme }) => `&&{
    
  padding-bottom:2px;}
    `
  );
  const CardDiv = styled("div")(
    ({ theme }) => `&&{
    
      height:200px;
      width:240px;
  width:100%;
  position: relative;}
    `
  );

  const TitleTypography = styled(Typography)(
    ({ theme }) => `&&{
    padding-top: 8px;
  font-size: 16.06px;
  font-family: Kern !important;
  opacity:1;
  font-weight: 900
  text-align: left;}
    `
  );
  const ArtistTypography = styled(Typography)(
    ({ theme }) => `&&{\
      font-family: Kern !important;
  font-style: normal;
  font-size: 11.62px;
  opacity:1;
  color: #707070;
font-weight: 400
  text-align: left;}
    `
  );
  const AssetPrice = styled(Typography)(
    ({ theme }) => `&&{
    font-family: Kern !important;
    font-style: normal;
    font-weight: 900
    font-size: 1rem;
    opacity:1;
    color: #BA7E86;
  
  }
    `
  );
  const AssetCardButton = styled(Button)(
    ({ theme }) => `&&{
    background: #6F6F6F;
    border-radius: 18px;
    box-shadow: none !important;
    border: none;
    opacity:1;
    padding-left: 13px;
    padding-right: 13px;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
    box-sizing: border-box;
    color: #ffffff;
    font-family: Kern !important;
    font-size: 16.06px;
    text-transform: capitalize;}
  `
  );

  return (
    <div className={styles.cardCustomLanding}>
      <Grid item>
        <div className={styles["asset-card"]}>
          <StyledCardContent>
            <CardDiv>
              <Image
                src={`/images/vitamins/${image}`}
                layout="fill"
                alt={image}
              />
            </CardDiv>
            <TitleTypography>{name}</TitleTypography>
            <ArtistTypography>{creator}</ArtistTypography>

            <div className={styles.flexContainerfeatured}>
              <AssetPrice>{price ? price : "TBD"} ETH</AssetPrice>
              <div className={styles.bidButtonCustomCardLading}>
                {!waitList && (
                  <Link href="/waitlist" passHref>
                    <AssetCardButton className={styles.buyButtonfeatured}>
                      Waitlist
                    </AssetCardButton>
                  </Link>
                )}
              </div>
            </div>
          </StyledCardContent>
        </div>
      </Grid>
    </div>
  );
};

export default AssetCard;
