import { Grid, Typography,Input, FormControl, InputLabel  } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";
import ShareIcon from '../../Partials/Icons/share'
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
            <Divider />
            <WorkflowContainer>
              <WorkHeader><h3>Work Title</h3> <ShareIcon />  </WorkHeader>
            <WorkflowItem>
                <Item>Medium</Item>
                <Item>Dimension</Item>
                <Item>Edition Number</Item>
                <Item>Price</Item>
                <Item>Production Year</Item>
                
            </WorkflowItem>
            </WorkflowContainer>
            
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

const ImageContainer = styled('div')`
   width:100%;
   margin-top:-30px;
   margin-bottom:30px;
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

const Divider = styled.div`
border-bottom:1px solid #000000;
width:100%;
`
const WorkflowContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
margin-bottom:20px;
`
const WorkflowItem = styled.div`
display:flex;
flex-direction:column;
width:100%;
margin-top:20px;
`
const WorkHeader = styled.div`
display:flex;
justify-content:space-between;
margin-top:30px;
width:100%;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
text-transform: uppercase;
color: #000000;

`
const Item = styled.li`
list-style:none;
font-family: 'Kern';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 23px;
color: #000000;
margin-bottom:8px;
`