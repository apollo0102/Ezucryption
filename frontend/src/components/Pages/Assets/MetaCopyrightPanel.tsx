import styled from "@emotion/styled";
import {FormControl,  InputLabel, Input, MenuItem  } from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';

import PrimaryButton from  '../../Partials/Buttons/PrimaryButton'

const MetaCopyrightPanel = ()=>{
    return(
        <TabContentWrapper>
            <InputWrapper>
                <ParaTag> Copyright Oowners(s)* </ParaTag>
                <FormControlWrapper>
                <FormControl fullWidth>
                    <Input style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}} id="description" type="text"  />
                    <InputLabel style={{fontSize:'14px', top:'-10px',left:'-14px', color: '#6F6F6F'}} htmlFor="description">Enter Numbers</InputLabel>
                </FormControl>
                <SpanText>Add Copyright Owner
                    <IconButton  size="small">
                    <AddIcon  sx={{color:'#8FAFC2', fontSize:"medium"}} fontSize="small" />
                    </IconButton>
                </SpanText>
            </FormControlWrapper>
          </InputWrapper>

            <InputWrapper>
            <ParaTag> Creation Date </ParaTag>
            <FormControlWrapper>
            <TextField
                id="creation-date"
                type="date"
                defaultValue="2021-08-10"
                size="small"
                sx={{ width:150, fontSize: '10px', background: "rgba(235, 218, 221, 0.5)", borderRadius: "1.97813px" }}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </FormControlWrapper>
            </InputWrapper>
            
            <InputWrapper>
            <ParaTag> Publication Date </ParaTag>
            <FormControlWrapper>
                <TextField
                    id="creation-date"
                    type="date"
                    defaultValue="2021-08-10"
                    size="small"
                    sx={{ width:150, fontSize: '10px', background: "rgba(235, 218, 221, 0.5)", borderRadius: "1.97813px" }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </FormControlWrapper>
            </InputWrapper>
            
          
        <InputWrapper>
            <ParaTag> Place of Publication </ParaTag>
            <FormControlWrapper>
            <FormControl fullWidth>
                <Input style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}} id="description" type="text"  />
                <InputLabel style={{fontSize:'14px',top:'-10px',left:'-14px', color: '#6F6F6F'}} htmlFor="description">Country</InputLabel>
            </FormControl>
            </FormControlWrapper>
        </InputWrapper>
        <InputWrapper>
            <ParaTag></ParaTag>
            <FormControlWrapper>
            <FormControl fullWidth>
                <Input style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}} id="description" type="text"  />
                <InputLabel style={{fontSize:'14px',top:'-10px',left:'-14px', color: '#6F6F6F'}} htmlFor="description">City</InputLabel>
            </FormControl>
            </FormControlWrapper>
        </InputWrapper>
        <InputWrapper> 
            <ParaTag> Blockchain Enabled </ParaTag>
            <FormControlWrapper>
              <Switch />
            </ FormControlWrapper>
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

export default  MetaCopyrightPanel;

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
  margin-top:50px;
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

const SpanText = styled('div')`
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: #000000;
    font-family: 'Kern';
    flex:3;
    text-align: right;
    margin-top: 2px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    width: 60%;
    position: absolute;
    right:0;
    padding-right:0;


  @media screen and (min-width: 768px) {
   
  }
`;