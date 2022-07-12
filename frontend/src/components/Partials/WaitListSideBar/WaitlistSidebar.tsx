import React, { useState } from "react";
import Image from "next/image";
import { Grid, CardContent, Typography, Tooltip, Button } from "@mui/material";
import styles from "./waitlistsidebar.module.scss";
import { styled } from "@mui/system";
import { NextPage } from "next";
import { FormControl, InputLabel, Input, Checkbox } from '@mui/material';
import PrimaryButton from '../Buttons/PrimaryButton';



const WaitListSideBar = () => {
  const StyledCardContent = styled(CardContent)(
    ({ theme }) => `&&{
  padding-bottom:2px;}
    `
  );
  const FormDiv = styled("div")(
    ({ theme }) => `&&{
    display:flex;
    flex-direction:column;
    width:100%;
    margin-top:28px;
    margin-bottom:20px;
    padding:0;
    position: relative;}
    `
  );

  const TitleTypography = styled(Typography)(
    ({ theme }) => `&&{
        font-family: 'Kern';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        color: #000000;
        text-transform:uppercase;
        margin-bottom:20px;

}
    `
  );
  const NFTDetailsTypographyHeader = styled(Typography)(
    ({ theme }) => `&&{\
        font-family: 'Kern';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        text-transform: uppercase;
        color: #000000;
}
    `
  );
  const DescriptionTypography = styled(Typography)(
    ({ theme }) => `&&{\
        font-family: Kern !important;
        opacity:1;
        font-family: 'Kern';
        font-style: normal;
        font-weight: 400;
        text-align:left;
        font-size: 16.614px;
        color: #000000;
    }
        `
    );


  const NFTDetailsTypography = styled(Typography)(
    ({theme})=> `&&{\
      font-family: Kern !important;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 34px;
  
  
  }
    `
);
const NFTDetailsCard = styled(Typography)(
    ({theme})=> `&&{\
      margin-bottom:25px;
  }
    `
);

const TypographyAgree = styled(Typography)(
        ({theme})=> `&&{\
            font-family: 'Kern';
            font-style: normal;
            font-weight: 400;
            font-size: 11.3311px;
            line-height: 12px;
            color: #000000;
      }
        `
);

const AcceptDiv = styled('div')(
    ({theme})=>`&&{\
        display:flex;
        align-items:center;
        margin-top:20px;
        margin-bottom:20px;

    }
    
    `
)

const Seperator = styled('div')(
    ({theme})=>`&&{\
        margin-bottom:50px;
    }`
)

  return (
    <div className={styles.waitlistSidebarContainer}>
        <div className={styles["sidebar-card"]}>
          <StyledCardContent>
            <TitleTypography>NFT drop waitlist</TitleTypography>
            <DescriptionTypography>Join the waitlist to get details of this exclusive drop, number of editions, price and other details when this NFT drops for this limited release.  You will receive a notification 7 days prior to the NFT drop. </DescriptionTypography>
            <FormDiv>
                <Seperator />
                <FormControl>
                    <InputLabel htmlFor="email-input">Enter your email address</InputLabel>
                    <Input id="email-input" />
                </FormControl>
                <Seperator />
                <FormControl>
                    <InputLabel htmlFor="name">Enter your name</InputLabel>
                    <Input id="name" />
                </FormControl>
                <Seperator />
                <PrimaryButton
                    title="Join Waitlist"
                />

                <AcceptDiv>
                    <Checkbox />
                    <TypographyAgree>I WOULD LKE TO RECEIVE NEWS, PROMOTIONS and OTHER INFORMATION </TypographyAgree>
                </AcceptDiv>
            </FormDiv>
            <NFTDetailsCard>
                <NFTDetailsTypographyHeader>NFT Details</NFTDetailsTypographyHeader>
                <NFTDetailsTypography>This NFT includes an original authentic digital replica of the work in a high res JPG format.  </NFTDetailsTypography>
            </NFTDetailsCard>
            <NFTDetailsCard>
                <NFTDetailsTypographyHeader>Experiential</NFTDetailsTypographyHeader>
                <NFTDetailsTypography>This NFT includes an exclusive invitation at the Dubai Expo 2020 to an exclusive reception with the real live version of the digital canapes.  </NFTDetailsTypography>
            </NFTDetailsCard>
            
          </StyledCardContent>
        </div>
    </div>
  );
};

export default WaitListSideBar;
