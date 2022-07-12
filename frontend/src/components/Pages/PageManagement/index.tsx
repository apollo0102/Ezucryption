import PageManagmentTabs from './PageManagmentTabs'
import styled from "@emotion/styled";

const PageManagment = () => {
    return (
        <NavContainer>
           <PageManagmentTabs />
           
        </NavContainer>
    );
    }
export default PageManagment;
const NavContainer = styled.div`
display:flex;
margin:0 auto;
margin-top:120px;
justify-content:center;
align-items:center;
width:90%;
` 
const NavItem = styled.li`
list-style:none;
margin-right:20px;
display:flex;
align-items:center;
font-family: 'Kern';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #000000;
margin-bottom:26px;


`
const Span = styled.span`
height:20px;
width:20px;
pading:10px;
font-family: 'Kern';
font-style: normal;
font-weight: 700;
margin-top:-20px;
font-size: 10px;
display:flex;
align-items:center;
justify-content:center;
line-height: 12px;
color: #FBFBFB;
border-radius:50%;
background: #FF7474;
`