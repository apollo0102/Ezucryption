import styled from "@emotion/styled";
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Image from "next/image";


interface curatorCardProps  {
    modalTitle: string
}

const CuratorRequestModal =(props: curatorCardProps ) =>{
    const {modalTitle} = props
    return(
        <ModalContainer>
            <ModalWrapper>
                <ModalHeading>
                    <H3>{modalTitle}</H3>
                    <IconButton  >
                        <CloseOutlinedIcon />
                    </IconButton>
                </ModalHeading>
                <BoxContainer>

                <SpanWarpper>
                    <Divider></Divider>
                    <Span><span style={{color: '#60B5BC'}}>Accept </span>Request</Span>
                </SpanWarpper>
                <Box>
                    <ImageContainer>
                        <div style={{width:'48px', marginRight:'16px'}}>
                            <Image
                            src={`/images/vitamins/VITAMIN-D-2.png`}
                            layout="responsive"
                            alt={`vitamin d`}
                            width='100%'
                            height='100%'

                        />
                        </div>
                        
                        <ImageContent>
                            <ImageH3>Vitamin d</ImageH3>
                            <ImageP>Vitamins Collections</ImageP>
                        </ImageContent>
                    </ImageContainer>
                    <ParaTypography>Your are about to accept the request to be a curator of the item above, view details of the request below.                    </ParaTypography>
                    <DetailsContainer>
                        <DetailsWrapper>
                            <Item>Creator</Item>
                            <Info>Kristin Watson</Info>
                        </DetailsWrapper>
                        <DetailsWrapper>
                            <Item>Transaction Hash</Item>
                            <Info>3%</Info>
                        </DetailsWrapper>
                        <DetailsWrapper>
                            <Item>Term</Item>
                            <Info>1 Year</Info>
                        </DetailsWrapper>
                        <DetailsWrapper>
                            <Item>Token Address</Item>
                            <Info>Oxe9b7...7881</Info>
                        </DetailsWrapper>
                    </DetailsContainer>
                    <Button>Accept Request</Button>
                </Box>
                
                </BoxContainer>
            </ModalWrapper>
            
        </ModalContainer>
    )
}
export default CuratorRequestModal;

const ModalContainer = styled.div`
    width:500px;
    height:100vh;
    position:relative;
    justify-content:center;
    align-items:center;
    display:flex;
    padding:20px;

`
const ModalWrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 1.78559px 1.78559px rgba(0, 0, 0, 0.25);
    width:500px;
    height:555px;
    padding:40px;

`

const ModalHeading = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`
const H3 = styled.h3`
font-family: 'Kern';
font-style: normal;
font-weight: 500;
font-size: 23px;
line-height: 36px;
text-transform: uppercase;
color: #000000;

`
const Button = styled.button`
background: #D8D8D8;
box-shadow: 0px 0.498481px 0.996962px rgba(15, 15, 15, 0.1);
border-radius: 4.98481px;
padding:10px 45px;
border:none;
font-style: normal;
font-weight: 500;
font-size: 23px;
line-height: 34px;
text-align: center;
color: #000000;
margin:0 auto;
width:100%;
`
const SpanWarpper = styled.div`
display:flex;
align-items:center;
margin-top:60px;
margin-bottom:16px; 

`
const Span = styled.div`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-transform: uppercase;

`
const Divider = styled.div`
border-bottom:1px solid #000000;
width:30px;
margin-right:15px;

`
const BoxContainer= styled.div`
display:flex;
flex-direction:column;



`
const Box = styled.div`
display:flex;
align-items:center;
flex-direction:column;
padding:0 46px;

`
const DetailsContainer=styled.div`
width:100%;
margin-bottom:20px;


`
const DetailsWrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin:10px 0;

`
const Item = styled.div`
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 16px;
color: #6F6F6F;

`
const Info = styled.div`
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 16px;
text-align: right;
color: #000000;

`
const ParaTypography = styled.p`
font-family: 'Kern';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 16px;
color: #6F6F6F;
margin:10px 0;

`
const ImageContainer = styled.div`
width:100%;
display:flex;

`
const ImageContent = styled.div`


`
const ImageH3 = styled.h3`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000000;
text-transform: capitalize;

`
const ImageP = styled.p`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
color: #6F6F6F;

`