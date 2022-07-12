import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { NextPage } from "next";
import clsx from "clsx";

import GreyButton from "../../../../UI/Buttons/GreyButton";
import Role from "../../../../../typings/Role";

import {
  addVerificationDetails,
  AddVerificationPhotoId,
} from "../../../../../store/user/action";
import { RootState } from "../../../../../store/store";

import styles from "./Form.module.scss";

interface VerifyIDFormProps {
  onSuccess: Function;
  options: Array<Role>;
}

const VerifyIDForm: NextPage<VerifyIDFormProps> = ({ options, onSuccess }) => {
  const [selectedOption, setSelectedOption] = useState(1);
  const payload = useSelector(
    (state: RootState) => state.user.verificationInfo
  );
  const inputFile = useRef(null);

  const dispatch = useDispatch();

  const handleOnClick = (id: any) => {
    setSelectedOption(id);
    if (inputFile) {
      let _temp: any = inputFile;
      _temp.current.click();
    }
  };

  const onImageUpload = async (e: any) => {
    const file = e.target.files[0];
    const base64: any = await convertToBase64(file);
    dispatch(AddVerificationPhotoId(base64) as any);
    try {
      dispatch(addVerificationDetails(payload as any) as any);
    } catch (e) {
      console.log("verification error", e);
    }

    Router.push("/");
  };

  const convertToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const renderOptionBox = ({
    name,
    id,
    image,
  }: {
    name: string;
    id: number;
    image: string | undefined;
  }) => {
    return (
      <div
        onClick={() => handleOnClick(id)}
        className={clsx(
          styles.optionsImage,
          id === selectedOption && styles.activeOptionsImage
        )}
      >
        <img src={`/icons/verify/${image}`} style={{ width: 80, height: 80 }} />
        <p className={styles.optionText}>{name}</p>
      </div>
    );
  };

  const handleSubmit = () => {
    onSuccess();
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.optionsContainer}>
        {options.map((eachOption) => {
          return renderOptionBox({
            name: eachOption.name,
            id: eachOption.id,
            image: eachOption.image,
          });
        })}
      </div>
      <p className={styles.hyperLinkText}>Why Do We need to Verify Your ID?</p>
      {/* <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} accept="image/png, image/gif, image/jpeg" onChange={e => onImageUpload(e)} /> */}
      <div className={styles.buttonContainer}>
        <GreyButton
          title="Verify ID Later"
          customTitleClass={styles.customTitleClass}
          onClick={() => handleSubmit()}
        />
      </div>
      <p className={styles.skipText} onClick={() => handleSubmit()}>
        Skip for now
      </p>
    </div>
  );
};

export default VerifyIDForm;
