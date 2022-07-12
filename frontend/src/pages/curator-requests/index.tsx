import HomeAppBar from "../../components/Partials/NavBars/HomeAppBar/HomeAppbar";
import {  Container } from "@mui/material";
import styled from "@emotion/styled";
import Footer from "../../components/UiKit/Layout/Footer";
import SectionTabs from "../../components/Pages/CuratorsRequests/CuratorsSections/SectionTabs";

const CuratorRequests = ()=>{
    return(
        <div>
           <HomeAppBar />
           <Container 
                maxWidth='lg' >
                <SectionTabs />
           </Container>
           <Footer />

        </div>
    )

}   
export default CuratorRequests


const ListingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 60px;
  gap: 90px;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    box-shadow: 0px 3.43177px 3.43177px rgba(0, 0, 0, 0.25);
    padding: 54px;
  }
`;
