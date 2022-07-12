import HomeAppBar from "../../components/Partials/NavBars/HomeAppBar/HomeAppbar";
import { Grid, Typography, Container } from "@mui/material";
import styled from "@emotion/styled";
import MonitorMediaCard from '../../components/Pages/Monitor/MonitorMediaCard';
import AssetContainer from '../../components/Pages/Monitor/AssetContainer';
import Footer from "../../components/UiKit/Layout/Footer";
import SectionTabs from "../../components/Pages/Monitor/MonitorSections/MonitorSectionTabs";

const Monitor = ()=>{
    return(
        <div >
           <HomeAppBar />
           <Container 
                maxWidth='lg' >
                <ListingWrapper>
                    <MonitorMediaCard
                        title ="IP MONITOR"
                        image="VITAMIN-D-2.png"
                        />
                    <AssetContainer />                    
                </ListingWrapper>
                <SectionTabs />

           </Container>
           <Footer />

        </div>
    )

}   
export default Monitor


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
