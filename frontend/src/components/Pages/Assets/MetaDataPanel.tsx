
import styled from "@emotion/styled";
import {FormControl,  InputLabel, Input, MenuItem  } from '@mui/material/';
import Switch from '@mui/material/Switch';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import PrimaryButton from  '../../Partials/Buttons/PrimaryButton';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const MetaDataPanel = () =>{
    return(
        <TabContentWrapper>
            <InputWrapper>
              <ParaTag> Asset Title *</ParaTag>
              <FormControlWrapper>
              <FormControl fullWidth >
                <Input
                  fullWidth
                  style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}}
                  id="description" type="text"  />
                <InputLabel
                  style={{fontSize:'14px', marginBottom: '20px', top:'-10px',left:'-14px', color: '#6F6F6F'}}
                  htmlFor="description">Enter Title</InputLabel>
            </FormControl>
            </FormControlWrapper>
            </InputWrapper>
            <InputWrapper>
              <ParaTag> Creator(s)* </ParaTag>
              <FormControlWrapper>
                <FormControl fullWidth>
                  <Input
                      style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}}
                      id="description" type="text"  />
                  <InputLabel style={{fontSize:'14px',top:'-10px',left:'-14px', color: '#6F6F6F'}} htmlFor="description">Text</InputLabel>
                </FormControl>
              </FormControlWrapper>
            </InputWrapper>
            <InputWrapper>
            <ParaTag> Psudonyms </ParaTag>
            <FormControlWrapper>
              <FormControl fullWidth>
                <Input style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}} id="description" type="text"  />
                <InputLabel style={{fontSize:'14px',top:'-10px',left:'-14px', color: '#6F6F6F'}} htmlFor="description">Text</InputLabel>
              </FormControl>
              <SpanText>Add creator & % ownership 
                <IconButton  size="small">
                  <AddIcon  sx={{color:'#8FAFC2', fontSize:"medium"}} fontSize="small" />
                </IconButton>
                </SpanText>
            </FormControlWrapper>
          </InputWrapper>
          <InputWrapper>
            <ParaTag> Current Oowners(s) </ParaTag>
            <FormControlWrapper>
              <FormControl fullWidth>
                <Input style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}} id="description" type="text"  />
                <InputLabel style={{fontSize:'14px',top:'-10px',left:'-14px', color: '#6F6F6F'}} htmlFor="description">Text</InputLabel>
              </FormControl>
              <SpanText>Add Owner
                <IconButton  size="small">
                  <AddIcon  sx={{color:'#8FAFC2', fontSize:"medium"}} fontSize="small" />
                </IconButton>
                </SpanText>
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
          <InputWrapper>  
            <ParaTag style={{marginTop:'12px'}}> Category * </ParaTag>
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
            <ParaTag> Tags </ParaTag>
            <FormControlWrapper>
            <FormControl fullWidth>
                <Input style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}} id="description" type="text"  />
                <InputLabel style={{fontSize:'14px',top:'-10px',left:'-14px', color: '#6F6F6F'}} htmlFor="description">Tags</InputLabel>
            </FormControl>
            </FormControlWrapper>
            </InputWrapper>
          <InputWrapper>
            <ParaTag> Number of Editions </ParaTag>
            <FormControlWrapper>
            <FormControl fullWidth>
                <Input style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}} id="description" type="text"  />
                <InputLabel style={{fontSize:'14px',top:'-10px',left:'-14px', color: '#6F6F6F'}} htmlFor="description">Number of Editions</InputLabel>
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
export default MetaDataPanel

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
const SpanText = styled('div')`
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: #000000;
    font-family: 'Kern';
    flex:3;
    text-align: right;
    margin-top: 4px;
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