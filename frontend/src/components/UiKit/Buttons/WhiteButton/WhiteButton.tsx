import React from "react";
import { styled } from "@mui/system";
import { NextPage } from "next";

interface WhiteButtonProps {
  title: string;
}

const CustomWhiteButtom = styled("button")(
  ({ theme }) => `&&{
    margin: 5px;
    padding: 5px;
    border: 1px solid #000000;
    padding-left: 18px;
    padding-right: 18px;
    box-shadow: none;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 22px;
    font-family: KernMedium;
    font-size: 14px;
    line-height: 24px;
    background-color: white;
  `
);
const WhiteButton: NextPage<WhiteButtonProps> = ({ title }) => {
  return <CustomWhiteButtom>{title}</CustomWhiteButtom>;
};

export default WhiteButton;
