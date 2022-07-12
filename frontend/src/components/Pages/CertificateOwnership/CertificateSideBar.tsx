import styled from "@emotion/styled";
// import MonitorTab from './MonitorTabs';
import {FormControl,  InputLabel, Input, MenuItem, TextField, Select  } from '@mui/material/';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';

const SidebarContianer = ()=>{
    return(
        <CardWrapper>
            <ListingHeading>Artist Name</ListingHeading>
            <Divider />
            <Content>
              <ContentItems>
                  <Paragraph>Creators Name(s)</Paragraph>
                  <ParaText>Vandana Taxal</ParaText>
              </ContentItems>
              <ContentItems>
                  <Paragraph>Psudonym(s)</Paragraph>
                  <ParaText className="empty">Empty</ParaText>
              </ContentItems>
              <ContentItems>
                  <Paragraph>Copyright Owner(s)</Paragraph>
                  <ParaText className="empty">Empty</ParaText>
              </ContentItems>

              <ContentItems>
                  <Paragraph>Copyright Percentages</Paragraph>
                  <ParaText>
                    <DateField>
                      Oct 10, 2021 |  Oct 10, 2021
                    </DateField>
                  </ParaText>
              </ContentItems>
              <ContentItems>
                  <Paragraph>Creation Date</Paragraph>
                  <ParaText>
                    <DateField>
                      Nov 11, 2021 |  Dec 11, 2021
                    </DateField>
                  </ParaText>
              </ContentItems>
              <ContentItems>
                  <Paragraph>Publication Date</Paragraph>
                  <ParaText>
                    <DateField>
                      Jan 01, 2022 |  May 05, 2022
                    </DateField>
                  </ParaText>
              </ContentItems>
        
              <ContentItems>
                  <Paragraph>Place of Publication</Paragraph>
                  <ParaText>Lorem</ParaText>
              </ContentItems>
              <ContentItems>
                  <Paragraph>Category</Paragraph>
                  <ParaText className="empty">Empty</ParaText>
              </ContentItems>
              <ContentItems>
                  <Paragraph>Owner</Paragraph>
                  <ParaText className="empty">Empty</ParaText>
              </ContentItems>
              <ContentItems >
                  <Paragraph className='block-chain'> <WifiTetheringIcon sx={{marginRight:'10px'}} />Ethereum Blockchain</Paragraph>
                  <ParaText className="blockchain-btn">View</ParaText>
              </ContentItems>
              <ContentItems className="description" >
                <h3>Description</h3>
                <Paragraph className="desc-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi neque quod deleniti molestiae sint alias tempora libero quam qui reiciendis exercitationem vitae facere cum atque labore facilis sit, commodi consequuntur eius in, minus fuga ex vero? Sunt consectetur, tempora quisquam debitis illo obcaecati quod numquam commodi praesentium? Eaque, maiores.
                </Paragraph>
              </ContentItems>
            </Content>
        </CardWrapper>
       
    )
 }

 export default SidebarContianer

 const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:60px;
  width:50%;
  margin-top:50px;
  

  @media screen and (max-width: 850px) {
    width:100%;
  }
`;


const ListingHeading = styled.h2`
font-style: normal;
font-weight: 300;
font-size: 36px;
line-height: 48px;
text-align: right;
text-transform: uppercase;
color: #000000
  

  @media screen and (min-width: 768px) {
    
  }
`;
const Divider = styled.div`
width: 100%;
border-bottom: 1px solid #000000;
margin-bottom: 11px;
margin-bottom: 30px;
  


`;
const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;

`
const ContentItems = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 20px;
align-items: center;
&.description{
  flex-direction:column;
  align-items:left;
  justify-content: flex-start;
  margin-top:69px;
  text-align:left;
  &>h3{
    width:100%;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    color: #000000;
    margin-bottom:18px;
  }
}

`
const Paragraph = styled.p`
font-family: 'Kern';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 23px;
color: #000000;
&.desc-para{
  font-family: 'Kern';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  text-align: justify;
  color: #000000;
}
&.block-chain{
  display:flex;
  align-items:center;
}
`
const ParaText = styled.p`
font-family: 'Kern';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 23px;
color: #000000;
&.blockchain-btn{
  border: 0.622222px solid #C4C4C4;
  border-radius: 6.22222px;
  font-family: 'Kern';
  font-style: normal;
  font-weight: 700;
  font-size: 9.95555px;
  line-height: 12px;
  font-feature-settings: 'ss01' on;
  color: #000000;
  padding:5px 15px;
  cursor:pointer;
  &:hover{
    background:#C4C4C4;
  }
}
&.empty{
  text-align: right;
  color: rgba(55, 53, 47, 0.4);

}

`
const DateField = styled.div`
background: rgba(206, 205, 202, 0.5);
border-radius: 3px;
padding:7px 15px;
font-style: normal;
font-family: 'Kern';
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #37352F
`