import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import OtpInput from "react-otp-input";
import { setTimeout } from "timers";

import AssetCard from "../../components/UiKit/AssetCards/AssetCard";

import AuthenticationFooter from "../../components/UiKit/Layout/Footer/AuthenticationFooter";
import GreyButton from "../../components/UI/Buttons/GreyButton";
import { loginWithOtp, verifyOtp } from "../../store/user/action";
import { errorToaster } from "../../utilities/loggerUtils";
import { RootState } from "../../store/store";

import styles from "../../components/Pages/Auth/OtpPage/OtpPage.module.scss";
import {AssetsBoxContainer, FooterContainer, LogoText, LeftContainer, Container, LogoContainer, MainContainer, RightContainer, ExtendedContainer, Header} from "../../components/Pages/Auth/styled";
import AuthHeader from "../../components/Pages/Auth/AuthHeader";


const OtpPage = () => {
  const { loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (router) {
      router.prefetch("/login");
      router.prefetch("/signup");
      let { email } = router.query as any;
      if (!router.asPath.includes("email")) {
        errorToaster("invalid otp url");
      }
      if (email) {
        setEmail(email);
      }
    }
  }, [router]);
  useEffect(() => {
    if (success) {
      router.prefetch("/");
      setTimeout(() => {
        router.push("/");
      }, 5000);
    }
  }, [success]);
  const handleOnSubmit = async () => {
    if (otp.length === 4) {
      await dispatch(
        verifyOtp({
          email,
          otp,
        }) as any
      );
      setSuccess(true);
    }
  };

  const handleResendOtp = async () => {
    await dispatch(
      loginWithOtp({
        email,
      }) as any
    );
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
          {!success ? (
            <ExtendedContainer>
              <p className={styles.joiningText}>OTP Verification</p>
              <p className={styles.otpDescriptionText}>
                We have send you a OTP code to your email. Please enter the code
                below to confirm sign up
              </p>
              <OtpInput
                value={otp}
                onChange={(text: any) => setOtp(text)}
                numInputs={4}
                // separator={<span>-</span>}
                isInputNum={true}
                containerStyle={{ justifyContent: "center" }}
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  margin: "2rem 0.5rem",
                  fontSize: "2rem",
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.3)",
                }}
              />
              <div className={styles.buttonContainer}>
              <GreyButton
                loading={loading}
                title="Continue"
                customTitleClass={styles.customTitleClass}
                onClick={() => handleOnSubmit()}
              />
              </div>
              <p className={styles.otpDescriptionText}>
                {" "}
                It may take a few minutes to receive you code. Haven't recieved
                OTP?{" "}
                <span
                  style={{ color: "#0085ff" }}
                  onClick={() => handleResendOtp()}
                >
                  Resend OTP
                </span>
              </p>
            </ExtendedContainer>
          ) : (
            <ExtendedContainer>
              <p className={styles.joiningText}>OTP Verification Successful</p>
              <p className={styles.otpDescriptionText}>
                You will be redirected to home page.
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

export default OtpPage;
