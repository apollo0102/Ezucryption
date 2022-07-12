import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";


import { theme } from "../../../theme";

export default function AuthHeader() {

  return (
      <HeaderWrapper>
        <div>
          <LogoContainer>
            <Link href="/" passHref>
              <Image
                className="logo"
                src="/logo.svg"
                width={35}
                height={55}
                alt="Logo"
                id="btn"
              />
            </Link>
            <Link href="/" passHref>
              <div className="text">artcryption</div>
            </Link>
          </LogoContainer>
          </div>
      </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1.04167px solid #000000;
    align-items: center;
    width: 100%;
    z-index: 999;
    padding: 1rem 0rem;
    margin-top: 0rem;
  

  @media screen and (max-width: ${theme.mediaScreens.md}) {
    
    width: 100%;
    top: 0;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 8px 32px 0 rgba(197, 200, 238, 0.17);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.18);
      
    }
    @media screen and (max-width: ${theme.mediaScreens.xs}) {

            margin-top: 0;
            padding: 1rem 0.6rem;
          
      
  }
  `;

const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
font-family: Kern;
cursor: pointer;
user-select: none;
-webkit-user-select: none;

.text {
  margin-left: 15.62px;
  opacity: 1;
  font-size: 20.92px;
  font-weight: 700;
  font-family: 'Haffer';
}

.text:hover {
  opacity: 0.8;
}
.text:active {
  opacity: 0.5;
}

.logo {
  width: 2rem;
  opacity: 1;
  transform: scale(1);
}

.logo:hover {
  transform: scale(1.08);
  opacity: 0.8;
}
.logo:active {
  transform: scale(1);
  opacity: 0.5;
}
@media screen and (max-width: ${theme.mediaScreens.md}) {
    margin-left: 55.46px;
    
      
  }
@media screen and (max-width: ${theme.mediaScreens.xs}) {
    margin-left: 14.46px;
    
      
  }

  `;
