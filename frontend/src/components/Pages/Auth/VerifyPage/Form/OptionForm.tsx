import { useState } from "react";
import { useDispatch } from "react-redux";
import { NextPage } from "next";
import clsx from "clsx";

import GreyButton from "../../../../UI/Buttons/GreyButton";
import TransparentBorderButton from "../../../../UI/Buttons/TranparentBorderButton";

import Role, { IOptions } from "../../../../../typings/Role";
import { AddVerificationType } from "../../../../../store/user/action";

import styles from "./Form.module.scss";

interface OptionFormProps {
  options: Array<IOptions>;
  onSuccess: Function;
  onBack: Function;
}

const OptionForm: NextPage<OptionFormProps> = ({
  options,
  onSuccess,
  onBack,
}) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(1);

  const renderOptionBox = ({ name, id }: { name: String; id: number }) => {
    return (
      <div
        onClick={() => setSelectedOption(id)}
        className={clsx(
          styles.options,
          id === selectedOption && styles.activeOption
        )}
      >
        <p className={styles.optionText}>{name}</p>
      </div>
    );
  };

  const handleSubmit = () => {
    dispatch(
      AddVerificationType(
        options.find((x) => x.id === selectedOption)?.value
      ) as any
    );
    onSuccess();
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.optionsContainer}>
        {options.map((eachOption) => {
          return renderOptionBox({ name: eachOption.name, id: eachOption.id });
        })}
      </div>
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

export default OptionForm;
