import { NextPage } from "next";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Facebook, Google, Instagram, Twitter } from "@mui/icons-material";

import SocialButton from "../../UiKit/Buttons/SocialButton";
import { loginFacebook, loginGoogle } from "../../../store/user/action";

import styles from "./SocialLoginBox.module.scss";

interface SocialLoginBoxProps {}

const SocialLoginBox: NextPage<SocialLoginBoxProps> = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const authHandler = (err: any, data: any) => {
    console.log(err, data);
  };

  const responseGoogle = (response: any, failed: boolean) => {
    if (failed) {
      console.log("failed res[", response);
    }
    console.log("gogllllllllleeeeeeeeeeeeeeee", response);
    if (
      response?.accessToken ||
      response?.profileObj ||
      response?.profileObj?.email
    ) {
      try {
        dispatch(loginGoogle(response) as any);
        router.push("/");
      } catch (e) {
        //exception
      }
    }
  };

  const responseInstagram = (resp: any) => {
    console.log("sdadasdad", resp);
  };

  const responseFacebook = (userInfo: any) => {
    console.log(userInfo, "LOGI");
    if (userInfo?.accessToken || userInfo?.userID || userInfo?.email) {
      try {
        dispatch(loginFacebook(userInfo) as any);
        router.push("/");
      } catch (e) {
        //exception
      }
    }
  };

  return (
    <div className={styles.socialIconContainer}>
      <GoogleLogin
        clientId="442567781720-itvtacmr3hvbcf3si843toeid30m2g0d.apps.googleusercontent.com"
        render={(renderProps) => (
          <SocialButton
            title="Continue with Google"
            Icon={Google}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          />
        )}
        onSuccess={(resp) => responseGoogle(resp, false)}
        onFailure={(resp) => responseGoogle(resp, true)}
        cookiePolicy={"single_host_origin"}
      />

      <FacebookLogin
        appId="300461864928446"
        isDisabled={false}
        callback={responseFacebook}
        containerStyle={{ display: "none" }}
        cssClass={"fb-class-id"}
        fields="name,email,picture"
      />

      <SocialButton
        title="Continue with Facebook"
        Icon={Facebook}
        onClick={() => {
          const btn = document.getElementsByClassName("fb-class-id") as any;
          btn[0].click();
        }}
      />

      <SocialButton title="Continue with Instagram" Icon={Instagram} />

      <SocialButton title="Continue with Twitter" Icon={Twitter} />

      {/* <InstagramLogin
                clientId="5734947239855299"
                onSuccess={responseInstagram}
                onFailure={responseInstagram}
                scope="likes+comments+follower_list"
            >

            </InstagramLogin> */}
    </div>
  );
};

export default SocialLoginBox;
