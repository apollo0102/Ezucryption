import React, { useState } from "react";
import Image from "next/image";
import { Grid, CardContent, Typography, Tooltip, Button } from "@mui/material";
import styles from "./card.module.scss";
import { styled } from "@mui/system";
import { NextPage } from "next";

interface MediaCardProps {
  image: string;
  descriptions: string;
  title:string;
  creator: string;
  footerText: string;
}

const MediaCard: NextPage<MediaCardProps> = ({
  image,
  descriptions,
  title,
  creator,
  footerText
}) => {
  const StyledCardContent = styled(CardContent)(
    ({ theme }) => `&&{
    
  padding-bottom:2px;}
    `
  );
  const CardDiv = styled("div")(
    ({ theme }) => `&&{
    height:542px;
    width:100%;
    margin-top:28px;
    padding:0;
    position: relative;}
    `
  );

  const TitleTypography = styled(Typography)(
    ({ theme }) => `&&{
    padding-top: 8px;
    font-size: 16.06px;
    font-family: Kern !important;
    opacity:1;
    text-align: left;
    font-weight: 400;
    font-size: 34.7928px;
    line-height: 42px;

}
    `
  );
  const ArtistTypography = styled(Typography)(
    ({ theme }) => `&&{\
    font-family: Kern !important;
    opacity:1;
    color: #000;
    font-weight: 400
    text-align: left;
    font-style: normal;
    font-weight: 400;
    font-size: 20.0278px;
    line-height: 34px;
    margin-bottom: 40px;
}
    `
  );
  const DescriptionTypography = styled(Typography)(
    ({ theme }) => `&&{\
    font-family: Kern !important;
    font-style: normal;
    opacity:1;
    color: #000000;
    text-transform: uppercase;
    font-weight: 400
    text-align: left;
    font-weight: 400;
    font-size: 31.2934px;
    line-height: 35px;
    margin-bottom:24px;

}
    `
  );
  const ArtworkFooter = styled(Typography)(
      ({theme})=> `&&{\
        font-family: Kern !important;
        font-style: normal;
        font-weight: 400;
        font-size: 17.9409px;
        line-height: 34px;
    
    
    }
      `
  );
  

  return (
    <div className={styles.cardCustomLanding}>
        <div className={styles["asset-card"]}>
          <StyledCardContent>
            <TitleTypography>{title}</TitleTypography>
            <CardDiv>
              <Image
                 src={`/images/vitamins/${image}`}
                layout="responsive"
                alt={image}
                height="100%"
                width="100%"
              />
            </CardDiv>
            <ArtistTypography>{creator}</ArtistTypography>
            <DescriptionTypography>{descriptions}</DescriptionTypography>
            <ArtworkFooter>{footerText}</ArtworkFooter>
          </StyledCardContent>
        </div>
    </div>
  );
};

export default MediaCard;
