import HomeAppBar from "../../components/Partials/NavBars/HomeAppBar/HomeAppbar";
import { Container } from "@mui/material";
import styled from "@emotion/styled";
import CertificateMediaCard from '../../components/Pages/CertificateOwnership/CertificateMediaCard';
import SidebarContianer from '../../components/Pages/CertificateOwnership/CertificateSideBar';
import CertificateFooter from '../../components/Pages/CertificateOwnership/CertificateFooter';
import Footer from "../../components/UiKit/Layout/Footer";

const Monitor = ()=>{
    return(
        <div >
           <HomeAppBar />
           <Container 
                maxWidth='lg' >
                <ListingWrapper>
                    <CertificateMediaCard
                        title ="CERTIFICATE OF OWNERSHIP"
                        image="VITAMIN-D-2.png"
                        />
                    <SidebarContianer />                    
                </ListingWrapper>
                <CertificateFooter />

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
    padding-bottom:0;
  }
`;
