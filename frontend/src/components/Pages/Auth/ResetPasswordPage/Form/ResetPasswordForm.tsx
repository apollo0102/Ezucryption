import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormInput from "../../../../Partials/Form/FormInput";
import GreyButton from "../../../../UI/Buttons/GreyButton";

import { errorToaster } from "../../../../../utilities/loggerUtils";
import { resetPassword } from "../../../../../store/user/action";
import { RootState } from "../../../../../store/store";

import styles from "./Form.module.scss";

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(14, "Too Long!")
    .required("Field is Required"),
});

const ResetPasswordForm = ({ onSuccess }: any) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const [params, setParams] = useState({ id: "", code: "" } as any);
  useEffect(() => {
    if (router) {
      router.prefetch("/login");
      router.prefetch("/signup");
      let { id, code } = router.query;
      if (!router.asPath.includes("id") || !router.asPath.includes("code")) {
        errorToaster("invalid reset password url");
      }
      if (id && code) {
        setParams({ id, code });
      }
    }
  }, [router]);

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await dispatch(
          resetPassword({
            ...params,
            password: values.password,
          }) as any
        );
        onSuccess();
      } catch (e) {
        console.log("ERROR");
      }
    },
    validationSchema: ResetPasswordSchema,
  });
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.formContainer}>
      <FormInput
        formik={formik}
        name={"password"}
        title={"New Password"}
        type={showPassword ? "text" : "password"}
        placeHolder={"password"}
        handleIconClick={() => setShowPassword(!showPassword)}
        Icon={showPassword ? Visibility : VisibilityOff}
      />
      <div className={styles.buttonContainer}>
        <GreyButton
          loading={loading}
          title="Create Password"
          customTitleClass={styles.customTitleClass}
          onClick={() => formik.handleSubmit()}
        />
      </div>
    </div>
  );
};

export default ResetPasswordForm;
