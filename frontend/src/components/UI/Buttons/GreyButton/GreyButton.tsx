import clsx from 'clsx'
import React, { MouseEventHandler } from "react";
import { styled } from "@mui/system";
import { NextPage } from "next";
import { CircularProgress } from "@mui/material";
import styles from '../Button.module.scss'
interface GreyButtonProps {
    title: string;
    customTitleClass: string;
    onClick: MouseEventHandler<HTMLDivElement>;
    loading?: boolean;
    disabled?: boolean;
}

const CustomGreyButton = styled("button")(
    ({ theme }) => `&&{
    background: #DCDCE0;
    box-shadow: 0px 1px 2px rgba(15, 15, 15, 0.1);
    border-radius: 10px;
    padding:10px;
    border: 0px;
  `
);
const GreyButton: NextPage<GreyButtonProps> = ({ title, customTitleClass, onClick, loading, disabled }) => {
    return <CustomGreyButton disabled={loading || disabled}>
        <div className={clsx(customTitleClass && customTitleClass , styles.mainContainer)} onClick={onClick}>
            {title}
            {loading && <CircularProgress size={14} />}
        </div>
    </CustomGreyButton>;
};

export default GreyButton;
