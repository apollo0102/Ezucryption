import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import AssetCard from "../../components/UiKit/AssetCards/AssetCard";
import AuthenticationFooter from "../../components/UiKit/Layout/Footer/AuthenticationFooter";
import ForgotPasswordForm from "../../components/Pages/Auth/ForgotPasswordPage/Form/ForgotPasswordForm";

import styles from "../../components/Pages/Auth/ForgotPasswordPage/ForgotPassword.module.scss";
import {AssetsBoxContainer, FooterContainer, LogoText, LeftContainer, Container, LogoContainer, MainContainer, RightContainer, ExtendedContainer, Header} from "../../components/Pages/Auth/styled";
import AuthHeader from "../../components/Pages/Auth/AuthHeader";


const ForgotPassword = () => {
  const [success, setSuccess] = useState(false);

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
          <ExtendedContainer>
          <p className={styles.joiningText}>
            Forgot Password
          </p>
          {!success ? (
            <>
              <p className={styles.pageDescriptionText}>
                Please enter your email where we will send you a link to reset
                your password.{" "}
              </p>
              <ForgotPasswordForm onSuccess={() => setSuccess(true)} />
            </>
          ) : (
            <p
              className={styles.pageDescriptionText}
            >
              We have sent you an email with reset password link
            </p>
          )}
          </ExtendedContainer>
        </RightContainer>
      </MainContainer>
      <FooterContainer>
        <AuthenticationFooter />
      </FooterContainer>
    </Container>
  );
};

export default ForgotPassword;
