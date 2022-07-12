import { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import FormInput from "../../../../Partials/Form/FormInput";
import GreyButton from "../../../../UI/Buttons/GreyButton";

import { signUp } from "../../../../../store/user/action";
import { RootState } from "../../../../../store/store";
import { errorToaster } from "../../../../../utilities/loggerUtils";

import styles from "./Form.module.scss";

interface EmailFormProps {
  onSuccess: Function;
  policyAccepted: boolean;
}

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(14, "Too Long!")
    .required("Field is Required"),
  email: Yup.string().email("Invalid email").required("Field is Required"),
});

const EmailForm: NextPage<EmailFormProps> = ({ onSuccess, policyAccepted }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      if (policyAccepted) {
        try {
          await dispatch(
            signUp({
              email: values.email,
              password: values.password,
            }) as any
          );
          onSuccess();
        } catch (e: any) {
          console.log(e);
        }
      } else {
        errorToaster("Please accept terms before proceeding signup.");
      }
    },
    validationSchema: SignupSchema,
  });
  const [showPassword, setShowPassword] = useState(false);
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
          <Link href="">
            <a className={styles.ssoText}>You can also continue with <b>SAML SSO</b></a>
          </Link>

          <p className={styles.signupContainer}>
            <span className={styles.noAccount}>Already have an account?{" "}</span>
            <Link href="/auth/login">
              <a className={styles.otpText}> Login</a>
            </Link>
          </p>
        </div>
        <p className={styles.ssoText}>
          
        </p>
      </div>
    </div>
  );
};

export default EmailForm;
