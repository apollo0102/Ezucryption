import Link from "next/link";
import styled from "@emotion/styled";

const SettngsNav = () => {
    return (
        <NavContainer>
            <NavItem>
                <Link href={"/admin"} >Notifications </Link>
                <Span>67</Span>
            </NavItem>
            <NavItem>
            <Link href={"/admin/settings/service-fees"}>Service Fees & Retail Royalties</Link>
            </NavItem>
            <NavItem>
            <Link href={"/admin/settings/subscription-pricing"}>Subscription Pricing</Link>
            </NavItem>  
        </NavContainer>
    );
    }
export default SettngsNav;
const NavContainer = styled.div`
display:flex;
justify-content:left;
width:90%;
margin:0 auto;
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