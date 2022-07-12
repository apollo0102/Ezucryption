import styled from "@emotion/styled";
import {FormControl,  InputLabel, Input, MenuItem  } from '@mui/material/';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import IconButton from '@mui/material/IconButton';
import { NextPage } from "next";
import PrimaryButton from  '../../Partials/Buttons/PrimaryButton'

const CategoryDetails = ()=>{
    return(
        <TabContentWrapper>
          <InputWrapper>  
            <ParaTag style={{marginTop:'12px'}}> Artwork Details   </ParaTag>
          <FormControlWrapper>
            <FormControl variant="standard" fullWidth>
            <InputLabel style={{fontSize:'14px', color: '#6F6F6F', border: 'none'}} id="category">{'(Optional)'}</InputLabel>
            <Select fullWidth style={{fontSize:'14px', color: '#6F6F6F'}} labelId="category"id="category">
              <MenuItem value="">Category One</MenuItem>
              <MenuItem value="">Category Two</MenuItem>
              <MenuItem value="">Category Three</MenuItem>
              <MenuItem value=""> Category Four</MenuItem>
            </Select>
            </FormControl>
          </FormControlWrapper>
          </InputWrapper>
          <InputWrapper>  
            <ParaTag style={{marginTop:'12px'}}> Artwork Type   </ParaTag>
          <FormControlWrapper>
            <FormControl variant="standard" fullWidth>
            <InputLabel style={{fontSize:'14px', color: '#6F6F6F'}} id="category">Choose</InputLabel>
            <Select fullWidth style={{fontSize:'14px', color: '#6F6F6F'}} labelId="category"id="category">
              <MenuItem value="">Category One</MenuItem>
              <MenuItem value="">Category Two</MenuItem>
              <MenuItem value="">Category Three</MenuItem>
              <MenuItem value=""> Category Four</MenuItem>
            </Select>
            </FormControl>
          </FormControlWrapper>
          </InputWrapper>
          <InputWrapper>
            <ParaTag> Dimension (W/H/L/D) </ParaTag>
            <FormControlWrapper>
                <FormControl fullWidth>
                    <Input style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}} id="description" type="text"  />
                    <InputLabel style={{fontSize:'14px', top:'-10px',left:'-14px', color: '#6F6F6F'}} htmlFor="description">Text</InputLabel>
                </FormControl>
            </FormControlWrapper>
            </InputWrapper>

            <InputWrapper>
            <ParaTag> Edition Numbers </ParaTag>
            <FormControlWrapper>
                <FormControl fullWidth>
                    <Input style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}} id="description" type="text"  />
                    <InputLabel style={{fontSize:'14px', top:'-10px',left:'-14px', color: '#6F6F6F'}} htmlFor="description">Enter Numbers</InputLabel>
                </FormControl>
            </FormControlWrapper>
            </InputWrapper>
            
            <InputWrapper>
            <ParaTag> Current Location </ParaTag>
            <FormControlWrapper>
                <FormControl fullWidth>
                    <Input style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}} id="description" type="text"  />
                    <InputLabel style={{fontSize:'14px',top:'-10px',left:'-14px', color: '#6F6F6F'}} htmlFor="description">Enter Location</InputLabel>
                </FormControl>
            </FormControlWrapper>
            </InputWrapper>
            
          <CloudWrapper>  
            <CloudParagraph>Chain of Title and Ownership Documents</CloudParagraph>
            <CloudContainer>
                <IconButton size="large">
                    <CloudUploadOutlinedIcon fontSize='large' />
                </IconButton>
                <Licence>Add license agreements, appraisal reports condition reports, insurance, copyright registration etc.</Licence>
            </CloudContainer>
          </CloudWrapper>
          <CloudWrapper>  
            <CloudParagraph>Additional Documents</CloudParagraph>
            <CloudContainer>
                <IconButton size="large">
                    <CloudUploadOutlinedIcon fontSize='large' />
                </IconButton>
                <Licence>Add license agreements, appraisal reports condition reports, insurance, copyright registration etc.</Licence>
            </CloudContainer>
          </CloudWrapper>
          <InputWrapper>
            <ParaTag> Other </ParaTag>
            <FormControlWrapper>
            <FormControl fullWidth>
                <Input style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}} id="description" type="text"  />
                <InputLabel style={{fontSize:'14px',top:'-10px',left:'-14px', color: '#6F6F6F'}} htmlFor="description">Tags</InputLabel>
            </FormControl>
            </FormControlWrapper>
            </InputWrapper>

          <InputWrapper>
              <PrimaryButton
                  title="Generate Certificate"
              />
          </InputWrapper>
          <FooterText> Generate a certificate of ownership to prove authenticity and ownership  </FooterText>
          </TabContentWrapper>
    )
}

export default  CategoryDetails;

const PanelWrapper = styled.div`

`
const TabContentWrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 20px;
      width:100%;


      @media screen and (min-width: 768px) {
      
      }
`
const InputWrapper = styled.div`
  font-size: 20px;
  display: flex;
  width:100%;
  margin-top:30px;
  align-items: center;


  @media screen and (min-width: 768px) {
   
  }
`;

const FooterText = styled('p')`
  margin-top: 20px;
  font-size: 10px;
  width:100%;
  text-align: center;
  color: #6F6F6F;


  @media screen and (min-width: 768px) {
   
  }
`;

const ParaTag = styled('p')`
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    color: #000000;
    font-family: 'Kern';
    padding-right:10px;
    flex:1;


  @media screen and (min-width: 768px) {
   
  }
`;
const FormControlWrapper = styled('div')`
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    color: #000000;
    position: relative;
    font-family: 'Kern';
    flex:3;


  @media screen and (min-width: 768px) {
   
  }
`;

const CloudParagraph = styled.p `
font-family: 'Kern';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #000000;

`
const CloudContainer = styled.div `
border: 0.40846px dashed #9A9A9A;
border-radius: 3.26768px;
display:flex;
align-items:center;
margin-top:15px;
`
const CloudWrapper = styled.div `
margin-top:50px;

`

const Licence = styled.p `
font-family: 'Kern';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 16px;
color: #6F6F6F;

`