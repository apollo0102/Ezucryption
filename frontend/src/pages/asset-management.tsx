import { useState } from "react";
import HomeAppBar from "../components/Partials/NavBars/HomeAppBar/HomeAppbar";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import AssetManagement from '../components/Pages/Assets/AssetManagement';
import Footer from "../components/UiKit/Layout/Footer";

import LinkModal from "../components/Partials/LinkModal";
import Wrapper from "../components/UI/Wrapper";

const AssetManagementSales = ()=>{
  const [isOpen, setIsOpen] = useState(true);
    return(
        <div>
           <HomeAppBar />
           <LinkModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
           <Box sx={{ width: "85%", margin: "0 auto" }}>
           
               <AssetManagement
                   title ="ASSET MANAGEMENT"
                   creator="AIMSIR Studio"
                   descriptions="DESCRIPTION"
                   image="VITAMIN-D-2.png"
                   />          
        </Box>
           </LinkModal>
           <Wrapper pt={5} pb={8}>
               <AssetManagement
                   title ="ASSET MANAGEMENT"
                   creator="AIMSIR Studio"
                   descriptions="DESCRIPTION"
                   image="VITAMIN-D-2.png"
                   />              
      </Wrapper>
           <Footer />

        </div>
    )

}   
export default AssetManagementSales


const ListingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 90px;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    box-shadow: 0px 3.43177px 3.43177px rgba(0, 0, 0, 0.25);
    padding: 54px;
  }
`;
