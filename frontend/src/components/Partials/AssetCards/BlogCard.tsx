import React, { useState } from "react";
import Image from "next/image";
import { Grid, CardContent, Typography, Button } from "@mui/material";
import styles from "./card.module.scss";
import { styled } from "@mui/system";
import { NextPage } from "next";

interface BlogCardProps {
  title: string;
  image: string;
  date: string;
  category: string;
  id?: string;
}

const BlogCard: NextPage<BlogCardProps> = ({
  title,
  image,
  date,
  category,
  id,
}) => {
  const StyledCardContent = styled(CardContent)(
    ({ theme }) => `&&{
    
  padding-bottom:2px;}
    `
  );

  const TitleTypography = styled(Typography)(
    ({ theme }) => `&&{
      margin: 0.3rem 0;
  font-family: Kern;
  font-size: 1.2rem;}
    `
  );
  const CatTypography = styled(Typography)(
    ({ theme }) => `&&{
  font-family: Kern;
   margin-top: 0.5rem ;
  font-size: 13px;
  color: #707070;}
    `
  );
  const BlogDate = styled(Typography)(
    ({ theme }) => `&&{
      
    font-family: KernBold;
    font-style: normal;
    font-size: 0.7rem;
    opacity:1;
    color: #BA7E86;}
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
    font-family: KernBold;
    font-size: 16.06px;
    text-transform: capitalize;}
  `
  );

  return (
    <div className={styles.cardCustomLanding}>
      <Grid item>
        <div className={styles["asset-card"]}>
          <StyledCardContent>
            <div className={styles["image-div"]}>
              <Image
                src={`/images/vitamins/${image}`}
                height={500}
                width={480}
                alt={image}
              />
            </div>
            <CatTypography>{category}</CatTypography>
            <TitleTypography>{title}</TitleTypography>

            <div>
              <BlogDate>{date} </BlogDate>
            </div>
          </StyledCardContent>
        </div>
      </Grid>
    </div>
  );
};

export default BlogCard;
