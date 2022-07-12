import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { NextPage } from "next";
import Router from "next/router";
import Link from "next/link";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import FormInput from "../../../../Partials/Form/FormInput";
import GreyButton from "../../../../UI/Buttons/GreyButton";

import { loginWithOtp } from "../../../../../store/user/action";
import { RootState } from "../../../../../store/store";

import styles from "./Form.module.scss";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Field is Required"),
});

const LoginForm: NextPage = () => {
  const { loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      try {
        await dispatch(
          loginWithOtp({
            email: values.email,
          }) as any
        );
        Router.push(`/otp?email=${values.email}`);
      } catch (e) {
        console.log(e);
      }
    },
    validationSchema: loginSchema,
  });

  return (
    <div className={styles.formContainer}>
      <FormInput
        formik={formik}
        name={"email"}
        title={"Email Address"}
        placeHolder={"vandana@artcryption.com"}
      />
      <div className={styles.buttonContainer}>
        <GreyButton
          loading={loading}
          title="Send Code"
          customTitleClass={styles.customTitleClass}
          onClick={() => formik.handleSubmit()}
        />
        <div className={styles.fpContainer}>
          <Link href="/auth/forgot-password">
            <a className={styles.ssoText}>Forgot Password?</a>
          </Link>

          <p className={styles.signupContainer}>
            Don't have an account?{" "}
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
