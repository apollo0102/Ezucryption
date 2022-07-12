import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import AssetCard from "../../components/UiKit/AssetCards/AssetCard";

import AuthenticationFooter from "../../components/UiKit/Layout/Footer/AuthenticationFooter";
import SocialLoginBox from "../../components/Partials/SocialLoginBox";
import LoginForm from "../../components/Pages/Auth/OtpLoginPage/Forms/LoginForm";

import styles from "../../components/Pages/Auth/OtpLoginPage/OtpLoginPage.module.scss";
import {AssetsBoxContainer, FooterContainer, LogoText, LeftContainer, Container, LogoContainer, MainContainer, RightContainer, Header} from "../../components/Pages/Auth/styled";
import AuthHeader from "../../components/Pages/Auth/AuthHeader";


const OptLoginPage = () => {
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
          <p className={styles.joiningText}>Welcome Back to Artcryption</p>
          <LoginForm />
          <div className={styles.sectionBreakContainer}>
            <div className={styles.line}></div>
            <p className={styles.orText}>or</p>
            <div className={styles.line}></div>
          </div>
          <SocialLoginBox />
          <div className={styles.sectionBreakContainer}>
            <div className={styles.line}></div>
            <p className={styles.orText}>or</p>
            <div className={styles.line}></div>
          </div>
          <Link href="/auth/login">
            <a className={styles.otpText}>Login with Password</a>
          </Link>
        </RightContainer>
      </MainContainer>
      <FooterContainer>
        <AuthenticationFooter />
      </FooterContainer>
    </Container>
  );
};

export default OptLoginPage;
