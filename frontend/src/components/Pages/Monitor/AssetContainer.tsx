import styled from "@emotion/styled";
import MonitorTab from './MonitorTabs';


const AssetContainer = ()=>{
    return(
        <CardWrapper>
            <Preview > Preview</Preview>
            <ListingHeading>Asset Title</ListingHeading>
            <Divider />
            <MonitorTab />
        </CardWrapper>
    )
 }

 export default AssetContainer

 const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:60px;
  width:50%;
  

  @media screen and (max-width: 850px) {
    width:100%;
  }
`;


const ListingHeading = styled.h2`
font-size:3.6rem;
line-height: 48px;
text-align: right;
text-transform: uppercase;
margin-bottom: 30px;
  

  @media screen and (min-width: 768px) {
    
  }
`;
const Divider = styled.div`
width: 100%;
border-bottom: 1px solid #000000;
margin-bottom: 11px;
margin-bottom: 30px;
  


`;
const Preview = styled.h4`
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 26px;
text-align: right;
text-transform: uppercase;
color: #000000;
margin-bottom: 10px;
`