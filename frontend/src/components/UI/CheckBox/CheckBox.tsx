import React, { ChangeEventHandler, FormEventHandler } from "react";
import { NextPage } from "next";
import { Checkbox, FormControlLabel, withStyles } from "@mui/material";

import styles from './CheckBox.module.scss'

interface CheckBoxProps {
    label: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    checked : boolean;
}

const CustomCheckBox: NextPage<CheckBoxProps> = ({ label, value, onChange, checked  }) => {
    return (
        <FormControlLabel
            className={styles.checkBoxContainer}
            control={<Checkbox checked={checked}  style={{padding : '0px 10px 0px 10px'}} value={value} onChange={onChange} />}
            label={ 
                <p className={styles.label}>
                    {label}
                </p>
            }
        />
    )
};

export default CustomCheckBox;
