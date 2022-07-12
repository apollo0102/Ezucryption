import { useState } from "react";
import { NextPage } from "next";

import GreyButton from "../../../../UI/Buttons/GreyButton";
import CheckBox from "../../../../UI/CheckBox";
import TransparentBorderButton from "../../../../UI/Buttons/TranparentBorderButton";

import styles from "./Form.module.scss";

interface TermFormProps {
  onSuccess: Function;
  onBack: Function;
}

const TermsForm: NextPage<TermFormProps> = ({ onSuccess, onBack }) => {
  const [checkBoxFlag, setCheckBoxFlag] = useState([false, false]);
  const handleSubmit = () => {
    if (checkBoxFlag[0] && checkBoxFlag[1]) {
      console.log("SUCCESS");
      onSuccess();
      return;
    }
    console.log("FAILED");
    return;
  };
  const onCheck = (index: number) => {
    let checkBoxValues = [...checkBoxFlag];
    checkBoxValues[index] = !checkBoxValues[index];
    setCheckBoxFlag(checkBoxValues);
  };
  return (
    <div className={styles.formContainer}>
      <CheckBox
        value="t"
        onChange={() => {
          onCheck(0);
        }}
        label={
          "I legally own the asset(s) and I own or control the copyright in the asset(s) I am uploading or any asset(s) that I may upload in the future.\n\nI confirm that I have the rights from the owner(s) and/or creator(s) to manage, reproduce and sell their assets on their behalf worldwide in perpetuity in any and all media now known or hereafter known.  "
        }
        checked={checkBoxFlag[0]}
      />
      <CheckBox
        value="t"
        onChange={() => {
          onCheck(1);
        }}
        label={
          "I agree to comply with Artcryption’s IP agreement,  community guidelines, terms and conditions and privacy policy. "
        }
        checked={checkBoxFlag[1]}
      />

      <div className={styles.buttonContainer}>
        <GreyButton
          title="Continue"
          customTitleClass={styles.customTitleClass}
          onClick={() => handleSubmit()}
        />
        <TransparentBorderButton
          title="Go Back"
          customTitleClass={styles.customTitleClass}
          onClick={() => onBack()}
        />
        <p className={styles.ssoText}>
          You can also continue with <b>SAML SSO</b>
        </p>
        <p className={styles.ssoText}>
          By clicking “Continue with Google/Email/SAML” above, you acknowledge
          that you have read and understood, and agree{" "}
        </p>
      </div>
    </div>
  );
};

export default TermsForm;
