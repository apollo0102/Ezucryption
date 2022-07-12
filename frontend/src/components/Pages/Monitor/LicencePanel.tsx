
import styled from "@emotion/styled";
import {FormControl,  InputLabel, Input, MenuItem, TextField  } from '@mui/material/';
import Switch from '@mui/material/Switch';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import PrimaryButton from  '../../Partials/Buttons/PrimaryButton';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const LicencePanel = () =>{
    return(
        <TabContentWrapper>
          <InputWrapper>
              <ParaTag> Licence Fees</ParaTag>
              <FormControlWrapper>
              <FormControl fullWidth >
                <Input
                  fullWidth
                  style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}}
                  id="description" type="text"  />
                <InputLabel
                  style={{fontSize:'14px', marginBottom: '20px', color: '#6F6F6F'}}
                  htmlFor="description">Licence Fees</InputLabel>
            </FormControl>
            </FormControlWrapper>
          </InputWrapper>
          <InputWrapper>
            <ParaTag> Currency </ParaTag>
              <FormControlWrapper>
                <FormControl fullWidth>
                  <Input
                      style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}}
                      id="description" type="text"  />
                  <InputLabel style={{fontSize:'14px', color: '#6F6F6F'}} htmlFor="description">Currency</InputLabel>
                </FormControl>
              </FormControlWrapper>
          </InputWrapper>
          <InputWrapper>
            <ParaTag> Licence Period </ParaTag>
              <FormControlWrapper>
                <FormControl fullWidth>
                  <Input
                      style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}}
                      id="description" type="text"  />
                  <InputLabel style={{fontSize:'14px', color: '#6F6F6F'}} htmlFor="description">Licence Period</InputLabel>
                </FormControl>
              </FormControlWrapper>
          </InputWrapper>
          <InputWrapper>
            <ParaTag> Licence Teritory </ParaTag>
              <FormControlWrapper>
                <FormControl fullWidth>
                  <Input
                      style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}}
                      id="description" type="text"  />
                  <InputLabel style={{fontSize:'14px', color: '#6F6F6F'}} htmlFor="description">Licence Teritory</InputLabel>
                </FormControl>
              </FormControlWrapper>
          </InputWrapper>
          <InputWrapper>
            <ParaTag> Licence Advance </ParaTag>
              <FormControlWrapper>
                <FormControl fullWidth>
                  <Input
                      style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}}
                      id="description" type="text"  />
                  <InputLabel style={{fontSize:'14px', color: '#6F6F6F'}} htmlFor="description">Licence Advance</InputLabel>
                </FormControl>
              </FormControlWrapper>
          </InputWrapper>
          <InputWrapper>
            <ParaTag> Usage Right</ParaTag>
              <FormControlWrapper>
                <FormControl fullWidth>
                  <Input
                      style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}}
                      id="description" type="text"  />
                  <InputLabel style={{fontSize:'14px', color: '#6F6F6F'}} htmlFor="description">Usage Right</InputLabel>
                </FormControl>
              </FormControlWrapper>
          </InputWrapper>

          <InputWrapper>
            <ParaTag> Additional Content </ParaTag>
              <FormControlWrapper>
                <FormControl fullWidth>
                  <Input
                      style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}}
                      id="description" type="text"  />
                  <InputLabel style={{fontSize:'14px', color: '#6F6F6F'}} htmlFor="description">Add Content</InputLabel>
                </FormControl>
              </FormControlWrapper>
          </InputWrapper>
           
          <InputWrapper>
            <ParaTag> Licence </ParaTag>
            <FormControlWrapper>
                <TextField
                    id="creation-date"
                    type="date"
                    defaultValue="2021-08-10"
                    sx={{ width:150, fontSize: '10px', background: "rgba(235, 218, 221, 0.5)", borderRadius: "1.97813px" }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField
                    id="creation-date"
                    type="date"
                    defaultValue="2021-08-10"
                    sx={{ width:150, fontSize: '10px', marginLeft:'30px', background: "rgba(235, 218, 221, 0.5)", borderRadius: "1.97813px" }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </FormControlWrapper>
          </InputWrapper>
           
          <InputWrapper>
            <ParaTag> Creator's Term URL </ParaTag>
            <FormControlWrapper>
            <FormControl fullWidth>
                <Input style={{borderBottomColor:'#6F6F6F', color: '#6F6F6F'}} id="description" type="text"  />
                <InputLabel style={{fontSize:'14px', color: '#6F6F6F'}} htmlFor="description">Creator's Term URL</InputLabel>
            </FormControl>
            </FormControlWrapper>
          </InputWrapper>
          <InputWrapper>
              <PrimaryButton
                  title="Add to Listing"
              />
          </InputWrapper>
          <FooterText> By minting or hashingthe metadata on the blockchain, you will generate a hash on the blockchain and receive a Certificate of Ownership.   </FooterText>
          </TabContentWrapper>
    )
}
export default LicencePanel

const PanelWrapper = styled.div`

`
const TabContentWrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 40px;
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
    margin-top: 10px;
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