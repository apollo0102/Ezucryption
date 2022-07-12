import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import Router from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormInput from "../../../../Partials/Form/FormInput";
import GreyButton from "../../../../UI/Buttons/GreyButton";
import TransparentBorderButton from "../../../../UI/Buttons/TranparentBorderButton";

import { forgotPassword } from "../../../../../store/user/action";
import { RootState } from "../../../../../store/store";

import styles from "./Form.module.scss";

interface ForgotPasswordFormProps {
  onSuccess: Function;
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Field is Required"),
});

const ForgotPasswordForm: NextPage<ForgotPasswordFormProps> = ({
  onSuccess,
}) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      try {
        await dispatch(
          forgotPassword({
            email: values.email,
          }) as any
        );
        onSuccess();
      } catch (e) {
        console.log(e, " ERROR IN FP");
      }
    },
    validationSchema: forgotPasswordSchema,
  });

  return (
    <div className={styles.formContainer}>
      <FormInput
        formik={formik}
        name={"email"}
        title={"Email Address"}
        placeHolder={"Email"}
      />
      <div className={styles.buttonContainer}>
        <GreyButton
          loading={loading}
          title="Send Code"
          customTitleClass={styles.customTitleClass}
          onClick={() => formik.handleSubmit()}
        />
        <TransparentBorderButton
          title="Go Back"
          customTitleClass={styles.customTitleClass}
          onClick={() => Router.back()}
        />
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
