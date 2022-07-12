import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import Router from "next/router";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import FormInput from "../../../../Partials/Form/FormInput";
import GreyButton from "../../../../UI/Buttons/GreyButton";

import { login } from "../../../../../store/user/action";
import { RootState } from "../../../../../store/store";

import styles from "./Form.module.scss";

interface LoginFormProps {}

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(14, "Too Long!")
    .required("Field is Required"),
  email: Yup.string().email("Invalid email").required("Field is Required"),
});

const LoginForm: NextPage<LoginFormProps> = () => {
  const { loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await dispatch(
          login({
            email: values.email,
            password: values.password,
          }) as any
        );
        console.log("login response", response);
        localStorage.setItem("token", response.jwtToken);
        Router.push("/profile");
      } catch (e) {
        console.log(e);
      }
    },
    validationSchema: loginSchema,
  });

  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className={styles.formContainer}>
      <FormInput
        formik={formik}
        name={"email"}
        title={"Email Address"}
        placeHolder={"vandana@artcryption.com"}
      />
      <FormInput
        formik={formik}
        name={"password"}
        title={"Password"}
        type={showPassword ? "text" : "password"}
        placeHolder={"password"}
        handleIconClick={() => setShowPassword(!showPassword)}
        Icon={showPassword ? Visibility : VisibilityOff}
      />
      <div className={styles.buttonContainer}>
        <GreyButton
          loading={loading}
          title="Continue"
          customTitleClass={styles.customTitleClass}
          onClick={() => formik.handleSubmit()}
        />
        <div className={styles.fpContainer}>
          <Link href="/auth/forgot-password">
            <a className={styles.ssoText}>Forgot Password?</a>
          </Link>

          <p className={styles.signupContainer}>
            <span className={styles.noAccount}>Don't have an account?{" "}</span>
            <Link href="/auth/signup">
              <a className={styles.otpText}> Sign Up</a>
            </Link>
          </p>
        </div>
        <p className={styles.ssoText}>
          You can also continue with <b>SAML SSO</b>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
