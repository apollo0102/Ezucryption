import { Grid, Typography,Input, FormControl, InputLabel  } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";
import { NextPage } from "next";

interface RoyaltyMediaCardProps {
    image: string;
    title:string;
  }


const RoyaltiesMediaCard : NextPage <RoyaltyMediaCardProps> = ({
        image,
        title,
    })=>{
    return(
        <CardWrapper>
            <StyledHeading>{title}</StyledHeading>
            <ImageContainer>
              <Image
                 src={`/images/vitamins/${image}`}
                layout="responsive"
                alt={image}
                height="100%"
                width="100%"
               />
            </ImageContainer>
            
        </CardWrapper>
    )

}   
export default RoyaltiesMediaCard


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:60px;
  width:50%;
  @media screen and (max-width: 850px) {
    width:100%;
  }
`;

const StyledHeading = styled('h2')`
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 50px;
    text-transform: uppercase;
    color: #000000;
    margin-bottom:65px;

  @media screen and (min-width: 768px) {
   
  }
`;

const ImageContainer = styled('h4')`
   height:370px;
   width:370px;

  @media screen and (min-width: 768px) {
   
  }
`;
const Descriptions = styled('h3')`
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    color: #000000;
    padding-bottom:30px;
  @media screen and (min-width: 768px) {
   
  }
`;

