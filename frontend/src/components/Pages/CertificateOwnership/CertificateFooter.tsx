import styled from '@emotion/styled'
import Image from "next/image";

const CertificateFooter=()=>{

    return( 
    <Footer>
    <Verified> <p>Verified by Artcryption</p>  </Verified>
    <BarCode>
        <Image
            src="/images/certification/qr-code.png"
            layout="responsive"
            alt="barcode"
            height="100%"
            width="100%"
        />
    </BarCode>
    <CopyRight> <p> smart contract token address | token ID | mint date</p></CopyRight>
    <Logo>
        <Image
            src="/images/certification/artcryptionlogo.png"
            layout="responsive"
            alt="logo"
            height="100%"
            width="100%"
        />
    </Logo>
    </Footer>
    )
   
}
export default CertificateFooter;
const Footer = styled.footer`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-end;
    width:100%;
    padding:0px;
    margin:0px;
    margin-bottom:60px;
    @media screen and (max-width: 850px) {
        flex-direction:column;
       
    }
`

const Verified = styled.div`
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 21px;
text-transform: uppercase;
color: #000000;
    @media screen and (max-width: 850px) {

    }
`;
const BarCode = styled.div`
    width:100px;
    height:100px;
    padding:0px;
    margin:0px;
    @media screen and (max-width: 850px) {
        width:auto;
        height:auto;
        padding:0px;
        margin:0px;
    }
`;
const CopyRight = styled.div`
    padding:0px;
    margin:0px;
    font-family: 'Kern';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #6F6F6F;
    @media screen and (max-width: 850px) {
        width:auto;
        height:auto;
        padding:0px;
        margin:0px;
    }
`;
const Logo = styled.div`
    width:100px;
    height:100px;
    padding:0px;
    margin:0px;
    @media screen and (max-width: 850px) {
        width:auto;
        height:auto;
        padding:0px;

`
