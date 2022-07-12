

import React, { MouseEventHandler } from "react";
import { styled } from "@mui/system";
import { NextPage } from "next";

interface TransparentBorderButtonProps {
    title: string;
    customTitleClass: string;
    onClick : MouseEventHandler<HTMLDivElement>
}

const CustomTransparentBorderButton = styled("button")(
    ({ theme }) => `&&{
    background: transparent;
    border: 1px solid #6F6F6F;
    border-radius: 10px;
    cursor:pointer;
    padding:10px;
    box-shadow: 0px 1px 2px rgba(15, 15, 15, 0.1);
    border-radius: 10px;
  `
);
const TransparentBorderButton: NextPage<TransparentBorderButtonProps> = ({ title, customTitleClass, onClick }) => {
    return <CustomTransparentBorderButton>
        <div className={customTitleClass} onClick={onClick}>
            {title}
        </div>
    </CustomTransparentBorderButton>;
};

export default TransparentBorderButton;
