import styled from "@emotion/styled";

import { theme } from "../../../theme";

export  const Header = styled.div`
display: none;
border-bottom: 1.04167px solid #000000;

  @media screen and (max-width: ${theme.mediaScreens.md}) {
 
      display: block;
      
    }
    @media screen and (max-width: ${theme.mediaScreens.xs}) {
     display: block;
      
  }
  `;
export  const Container = styled.div`


  @media screen and (max-width: ${theme.mediaScreens.md}) {
 
      background: #f7f9fa;
      
    }
    @media screen and (max-width: ${theme.mediaScreens.xs}) {
      background: #f7f9fa;
      
  }
  `;
export  const FooterContainer = styled.div`

  @media screen and (max-width: ${theme.mediaScreens.md}) {
      margin: 0px 55px 0px 55px;
  
  }
  @media screen and (max-width: ${theme.mediaScreens.xs}) {
    margin: 0px 20px 0px 20px;
  }
  `;
export  const LogoText = styled.div`
width: 169px;
height: 48px;
font-family: Kern;
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 48px;
color: #000000;

  @media screen and (max-width: ${theme.mediaScreens.md}) {
       
  }
  @media screen and (max-width: ${theme.mediaScreens.xs}) {
    
  }
  `;
export  const LeftContainer = styled.div`
display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #f7f9fa;
    flex: 1;

  @media screen and (max-width: ${theme.mediaScreens.md}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #ffff;
    flex: 1;
    order: 2;
    margin: 0px 55px 0px 55px;
    padding-bottom: 80px;
  }
  @media screen and (max-width: ${theme.mediaScreens.xs}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #ffff;
    flex: 1;
    order: 2;
    margin: 0px 20px 0px 20px;
    padding-bottom: 20px;
  }
  `;
export  const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 132px 144px 5px 71px;
  gap: 30px;
  
  @media screen and (max-width: ${theme.mediaScreens.md}) {
    display: flex;
        background-color: #ffff;
        flex-direction: column;
        margin: 80px 55px 0px 55px;
        flex: 1;
        gap: 30px;
        order: 1;
        padding: 80px;
  }
  @media screen and (max-width: ${theme.mediaScreens.xs}) {
    display: flex;
    background-color: #ffff;
    flex-direction: column;
    margin: 60px 20px 0px 20px;
    flex: 1;
    gap: 10px;
    order: 1;
    padding-bottom: 10px;
    padding: 20px;
  }
`;
export  const ExtendedContainer = styled.div`
  
  width:480px;
  
  @media screen and (max-width: ${theme.mediaScreens.md}) {
    width: 100%;
  }
  @media screen and (max-width: ${theme.mediaScreens.xs}) {
    width: 100%;
  }
`;
  export  const FormContainer = styled.div`
  
  width:480px
  
  @media screen and (max-width: ${theme.mediaScreens.xs}) {
    width:auto
    
  }
  @media screen and (max-width: ${theme.mediaScreens.md}) {
    width:auto
    
  }
`;

  export  const MainContainer = styled.div`
  display: flex;
    flex-direction: row;
    gap: 10px;
    flex: 1;
    min-height: 90vh;
  
  @media screen and (max-width: ${theme.mediaScreens.xs}) {
    display: flex;
    flex-direction: column;
    gap: 0px;
    flex: 1;
  }
  @media screen and (max-width: ${theme.mediaScreens.md}) {
    display: flex;
    flex-direction: column;
    gap: 0px;
    flex: 1;
  }
`;
  export  const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  margin: 80px;
  margin-top: 33.34px;
  
  @media screen and (max-width: ${theme.mediaScreens.xs}) {
      display: none;
      
    }
    @media screen and (max-width: ${theme.mediaScreens.md}) {
    display: none;
  }
`;
  export  const AssetsBoxContainer = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 106px;
  
  @media screen and (max-width: ${theme.mediaScreens.xs}) {
      margin-top: 0px;
      
    }
    @media screen and (max-width: ${theme.mediaScreens.md}) {
    margin-top: 0px;
  }
`;