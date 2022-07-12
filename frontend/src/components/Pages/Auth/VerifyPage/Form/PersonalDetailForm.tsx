import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import clsx from "clsx";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "../../SignupPage/Forms/Form.module.scss";
import FormInput from "../../../../Partials/Form/FormInput";
import GreyButton from "../../../../UI/Buttons/GreyButton";

import Role from "../../../../../typings/Role";
import { RootState } from "../../../../../store/store";
import { updateUser } from "../../../../../store/user/action";

interface PersonalDetailFormProps {
  Roles: Array<Role>;
  policyAccepted: boolean;
  onSuccess: Function;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const PersonalDetailSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Field is Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Field is Required"),
  nameOfOrganization: Yup.string().min(2, "Too Short!").max(100, "Too Long!"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Field is Required"),
  mobileNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Field is Required"),
  role: Yup.string().required("Field is Required"),
});

const PersonalDetailForm: NextPage<PersonalDetailFormProps> = ({
  Roles,
  policyAccepted,
  onSuccess,
}) => {
  const dispatch = useDispatch();
  const { user, token, loading } = useSelector(
    (state: RootState) => state.user
  );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      nameOfOrganization: "",
      address: "",
      mobileNumber: "",
      role: "",
    },
    onSubmit: (values) => {
      if (policyAccepted) {
        try {
          dispatch(
            updateUser(
              {
                firstName: values.firstName,
                lastName: values.lastName,
                address: values.address,
                mobile: values.mobileNumber,
                primaryRole: values.role,
                userId: user.id,
              },
              user.id
            ) as any
          );

          onSuccess();
        } catch (e: any) {
          console.log(e);
        }
      }
    },
    validationSchema: PersonalDetailSchema,
  });

  const onClickOption = (name: string) => {
    const { setFieldValue } = formik;
    setFieldValue("role", name);
  };

  const renderCustomOptions = ({ name, id }: { name: string; id: number }) => {
    const { values } = formik;
    return (
      <div
        className={clsx(
          styles.optionBox,
          name === values["role"] && styles.activeOption
        )}
      >
        <p
          className={styles.optionText}
          key={id}
          onClick={() => onClickOption(name)}
        >
          {name}
        </p>
      </div>
    );
  };
  return (
    <div className={styles.formContainer}>
      <div style={{ display: "flex", flexDirection: "row", gap: "4%" }}>
        <div style={{ width: "48%" }}>
          <FormInput
            formik={formik}
            name={"firstName"}
            title={"First Name"}
            placeHolder={"Vandana"}
          />
        </div>
        <div style={{ width: "48%" }}>
          <FormInput
            formik={formik}
            name={"lastName"}
            title={"Last Name"}
            placeHolder={"Taxali"}
          />
        </div>
      </div>
      <FormInput
        formik={formik}
        name={"nameOfOrganization"}
        title={"Name of Organization"}
        placeHolder={"Enter name or Organization"}
      />
      <FormInput
        formik={formik}
        name={"address"}
        title={"Address"}
        placeHolder={"The most creative place in the world"}
      />
      <FormInput
        formik={formik}
        name={"mobileNumber"}
        title={"Mobile Number"}
        placeHolder={"xxx-xxx-xxxx"}
      />
      <div>
        <p className={styles.titleText}>{"Select Primary Role"}</p>
        <p className={styles.descriptionText}>
          {"You can be more than one role but please select your primary role"}
        </p>
      </div>
      <div className={styles.optionsContainer}>
        {Roles.map((eachRole) =>
          renderCustomOptions({ id: eachRole.id, name: eachRole.name })
        )}
      </div>
      {formik.errors["role"] && formik.touched["role"] ? (
        <div className={styles.error}>{formik.errors["role"]}</div>
      ) : null}
      <div className={styles.buttonContainer}>
        <GreyButton
          loading={loading}
          title="Continue"
          customTitleClass={styles.customTitleClass}
          onClick={() => formik.handleSubmit()}
        />
        <p className={styles.ssoText}>
          You can also continue with <b>SAML SSO</b>
        </p>
      </div>
    </div>
  );
};

export default PersonalDetailForm;
