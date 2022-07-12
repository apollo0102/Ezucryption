import React from "react";
import { styled } from "@mui/system";

import styles from './SocialButton.module.scss'
import { NextPage } from "next";
import { SvgIconComponent } from "@mui/icons-material";

interface SocialButtonProps {
    title: string;
    Icon?: SvgIconComponent;
    onClick?: Function;
    disabled?: boolean
}

const CustomSocialButton = styled("button")(
    ({ theme }) => `&&{
    background: #FFFFFF;
    border: 1px solid #DFDFDF;
    border-radius: 10px;
    padding : 10px;
    color : #616161
  `
);
const SocialButton: NextPage<SocialButtonProps> = ({ title, Icon, onClick }) => {
    return <CustomSocialButton>
        <div className={styles.ButtonContainer} onClick={() => {onClick && onClick()}}>
            {
                Icon &&
                <Icon />
            }
            <div className={styles.title}>
                {title}
            </div>
        </div>
    </CustomSocialButton>;
};

export default SocialButton;
