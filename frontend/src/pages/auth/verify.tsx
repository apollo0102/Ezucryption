import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/router";

import AssetCard from "../../components/UiKit/AssetCards/AssetCard";
import AuthenticationFooter from "../../components/UiKit/Layout/Footer/AuthenticationFooter";
import TermsForm from "../../components/Pages/Auth/VerifyPage/Form/TermsForm";
import OptionForm from "../../components/Pages/Auth/VerifyPage/Form/OptionForm";
import { options, IdOptions } from "../../components/Pages/Auth/VerifyPage";
import VerifyIDForm from "../../components/Pages/Auth/VerifyPage/Form/VerifyIDForm";
import PersonalDetailForm from "../../components/Pages/Auth/VerifyPage/Form/PersonalDetailForm";
import { Roles } from "../../components/Pages/Auth/VerifyPage";

import { loginWithKey } from "../../store/user/action";
import { RootState } from "../../store/store";
import { errorToaster } from "../../utilities/loggerUtils";

import styles from "../../components/Pages/Auth/VerifyPage/VerifyPage.module.scss";
import {AssetsBoxContainer, FooterContainer, LogoText, LeftContainer, Container, LogoContainer, MainContainer, RightContainer, Header} from "../../components/Pages/Auth/styled";
import AuthHeader from "../../components/Pages/Auth/AuthHeader";


const steps = [
  {
    id: 1,
    headingText: "Join Artcryption",
  },
  {
    id: 2,
    headingText: "Intellectual Property Rights",
  },
  {
    id: 3,
    headingText: "What would you like to do?",
  },
  {
    id: 4,
    headingText: "Verify your ID",
  },
  {
    id: 6,
    headingText: "Verified Successfully",
  },
];

const VerifyPage = () => {
  const [currentStep, setCurrentStep] = useState(steps[0]);

  const user = useSelector((state: RootState) => state.user.user);
  const router = useRouter();
  const { key } = router.query;

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentStep.id === 6) {
      router.prefetch("/");
      setTimeout(() => {
        router.push("/");
      }, 4000);
    }
  }, [currentStep]);

  useEffect(() => {
    if (key) {
      //to get token and save by valdiation key
      try {
        dispatch(loginWithKey(key as any) as any);
      } catch (e) {
        //error invalid key
        errorToaster("Invalid verify URI");
        Router.push("/signup");
      }
    }
  }, [key]);

  const onSuccess = () => {
    if (currentStep.id < 5) {
      setCurrentStep(steps[currentStep.id]);
    }
  };

  const onBack = () => {
    if (currentStep.id < 1) {
      setCurrentStep(steps[currentStep.id - 2]);
    }
  };

  return (
    <Container>
      <MainContainer>
      <Header>
      <AuthHeader />
      </Header>
        <LeftContainer>
          <div className={styles.leftMainContainer}>
            <LogoContainer>
              <Link href="/" passHref>
                <Image
                  className={styles["logo"]}
                  src="/logo.svg"
                  width={35}
                  height={55}
                  alt="Logo"
                  id="btn"
                />
              </Link>
              <LogoText>artcryption</LogoText>
            </LogoContainer>
            <AssetsBoxContainer>
              <AssetCard
                name={"Canapé#2"}
                image={"Egg4.svg"}
                creator={"Jérémy Hervo"}
              />
            </AssetsBoxContainer>
          </div>
        </LeftContainer>
        <RightContainer>
          <p className={styles.joiningText}>{currentStep?.headingText}</p>
          {currentStep.id === 1 ? (
            <PersonalDetailForm
              Roles={Roles}
              policyAccepted={true}
              onSuccess={onSuccess}
            />
          ) : currentStep.id === 2 ? (
            <TermsForm onBack={onBack} onSuccess={onSuccess} />
          ) : currentStep.id === 3 ? (
            <OptionForm
              onBack={onBack}
              onSuccess={onSuccess}
              options={options}
            />
          ) : currentStep.id === 4 ? (
            <VerifyIDForm onSuccess={onSuccess} options={IdOptions} />
          ) : (
            <p className={styles.verifySuccessText}>
              You have successfully verified, you would be redirected to the
              home page
            </p>
          )}
        </RightContainer>
      </MainContainer>
      <FooterContainer>
        <AuthenticationFooter />
      </FooterContainer>
    </Container>
  );
};

export default VerifyPage;
