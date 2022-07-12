import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import style from "./banner.module.scss";

interface BannerProp {
  profileImg?: string;
  likes?: string;
  followers?: string;
  bannerImg?: string;
}
const Banner: React.FC<BannerProp> = ({ profileImg, bannerImg }) => {
  const bannerUpload: any = useRef();
  const profileUpload: any = useRef();
  return (
    <>
      <ShareButton>
        <h5>Share</h5>
        <img src="/icons/collections/heart.svg" alt="heart" />
        <h5>Follow</h5>
      </ShareButton>
      <Box className={style.banner}>
        <Box className={style.bannerContainer}>
          <input ref={bannerUpload} type="file" title="upload banner" />
          <Upload
            src="/icons/collections/upload-cloud.svg"
            title="upload-iocn"
            onClick={() => {
              bannerUpload.current.click();
            }}
          />
          <Box className={style.heading_mobile}>
            <img
              src="/icons/collections/upload-cloud.svg"
              title="upload-icon"
              onClick={() => {
                bannerUpload.current.click();
              }}
            />
          </Box>
        </Box>
      </Box>
      <Wrapper>
        <input ref={profileUpload} type="file" title="upload display" />
        <Profile
          src={profileImg}
          alt="avatar"
          title="upload display"
          onClick={() => {
            profileUpload.current.click();
          }}
        />
        <Upload
          src="/icons/collections/upload-cloud.svg"
          title="upload-display"
          onClick={() => {
            profileUpload.current.click();
          }}
        />
      </Wrapper>
    </>
  );
};

export default Banner;

const Wrapper = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  top: 280px;
  left: 60px;

  z-index: 1;
  & > input {
    display: none;
  }
  & > .user_profile {
    width: 100%;
  }
  @media screen and (max-width: 992px) {
    width: 220px;
    height: 220px;
  }
  @media screen and (max-width: 480px) {
    width: 147px;
    height: 147px;
    left: 20px;
    & > img {
      display: block;
    }
  }
`;
const Profile = styled.img`
  width: 100%;
`;
const Upload = styled.img`
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  @media screen and (max-width: 992px) {
    display: block;
    width: 40px;
    height: 40px;
  }
`;
const ShareButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: auto;
  margin-right: 100px;
  margin-bottom: 4px;
  width: 213px;
`;
