import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { setTimeout } from "timers";

import AssetCard from "../../components/UiKit/AssetCards/AssetCard";
import AuthenticationFooter from "../../components/UiKit/Layout/Footer/AuthenticationFooter";
import ResetPasswordForm from "../../components/Pages/Auth/ResetPasswordPage/Form/ResetPasswordForm";

import styles from "../../components/Pages/Auth/ResetPasswordPage/ResetPassword.module.scss";
import {AssetsBoxContainer, FooterContainer, ExtendedContainer, LogoText, LeftContainer, Container, LogoContainer, MainContainer, RightContainer, Header} from "../../components/Pages/Auth/styled";
import AuthHeader from "../../components/Pages/Auth/AuthHeader";

const ResetPassword = () => {
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (success) {
      router.prefetch("/");
      setTimeout(() => {
        router.push("/");
      }, 5000);
    }
  }, [success]);
  return (
    <Container>
      <MainContainer>
      <Header>
      <AuthHeader />
      </Header>
        <LeftContainer>
          <div>
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
          {!success ? (
            <ExtendedContainer>
              <p className={styles.joiningText}>
                Create New Password
              </p>
              <ResetPasswordForm onSuccess={() => setSuccess(true)} />
            </ExtendedContainer>
          ) : (
            <ExtendedContainer>
              <p className={styles.joiningText}>
                Password Reset Successfully
              </p>
              <p className={styles.verifySuccessText}>
                You have successfully rest your password, you would be
                redirected to the home page
              </p>
            </ExtendedContainer>
          )}
        </RightContainer>
      </MainContainer>
      <FooterContainer>
        <AuthenticationFooter />
      </FooterContainer>
    </Container>
  );
};

export default ResetPassword;
