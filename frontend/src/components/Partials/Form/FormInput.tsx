import React, { MouseEventHandler } from "react";
import { NextPage } from "next";
import { TextField, InputAdornment } from "@mui/material";

import styles from "./FormInput.module.scss";
import { SvgIconComponent } from "@mui/icons-material";

interface FormInputProps {
  title?: string;
  name?: string;
  type?: string;
  placeHolder?: string;
  Icon?: SvgIconComponent;
  handleIconClick?: MouseEventHandler<HTMLDivElement>;
  formik?: any;
}

const FormInput: NextPage<FormInputProps> = ({
  title,
  type = "text",
  placeHolder = "",
  Icon,
  handleIconClick,
  name,
  formik,
}) => {
  const { values, handleChange, handleBlur, errors, touched } = formik;
  const isError = errors[`${name}`] && touched[`${name}`];
  return (
    <div className={styles.container}>
      <p
        className={styles.titleText}
        style={{ color: isError ? "red" : "#000" }}
      >
        {title}
      </p>
      <TextField
        style={{ padding: "0.3rem 0" }}
        InputProps={{
          name,
          onChange: handleChange,
          value: values[`${name}`],
          endAdornment: (
            <>
              {Icon && (
                <InputAdornment position="end">
                  <div
                    className={styles.iconContainer}
                    onClick={handleIconClick}
                  >
                    <Icon />
                  </div>
                </InputAdornment>
              )}
            </>
          ),
        }}
        type={type}
        fullWidth
        variant="standard"
        placeholder={placeHolder}
        error={isError}
      />
      {errors[`${name}`] && touched[`${name}`] ? (
        <div className={styles.error}>{errors[`${name}`]}</div>
      ) : null}
    </div>
  );
};

export default FormInput;
