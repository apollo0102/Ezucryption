import { Grid, Typography,Input, FormControl, InputLabel, Box  } from "@mui/material";
import AssetContainer from './AssetContainer';
import styled from "@emotion/styled";
import Image from "next/image";
import { NextPage } from "next";
import SectionTabs from "./AssetSideSections/SectionTabs";

interface AssetManagementProps {
    image: string;
    descriptions: string;
    title:string;
    type?:string;
    creator: string;
  }


const AssetManagement : NextPage <AssetManagementProps> = ({
        image,
        descriptions,
        title,
        type = 'royalties',
        creator,
    })=>{
    return(
      <>
      <Typography className="g-font-family-haffer" sx={{ fontSize: 38 }} mb={4}>
        {title}
      </Typography>
      <Grid container>
        <Grid sm={6}>
        <Box sx={{ width: 370 }}>
            <Image
                 src={`/images/vitamins/${image}`}
                layout="responsive"
                alt={image}
                height="100%"
                width="100%"
            />
            <Creator>{creator}</Creator>
            <Descriptions>{descriptions}</Descriptions>
            
            <FormControl style={{width:'100%'}}>
                <Input
                     style={{borderBottomColor:'#6F6F6F', width: '100%', color: '#6F6F6F'}}
                id="description" type="text"  />
                <InputLabel
                    style={{fontSize:'10px',top:'-10px', left:'-14px', color: '#6F6F6F'}}
                htmlFor="description">Enter Description</InputLabel>
            </FormControl>
          </Box>
        </Grid>
        <Grid sm={6} mt={[-14, -11]} >
          <Box>
          <AssetContainer />
          </Box>
        </Grid>
      </Grid>
      <Box>
      {type === 'royalties' && <SectionTabs />}
      </Box>
      </>
    )

}   
export default AssetManagement


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:60px;
  width:50%;

  @media screen and (max-width: 850px) {
    width:100%;
  }
`;

const StyledHeading = styled('h2')`
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 50px;
    font-family: 'Haffer';
    text-transform: uppercase;
    color: #000000;
    margin-bottom:41px;

  @media screen and (min-width: 768px) {
   
  }
`;

const Creator = styled('h4')`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;
    color: #000000;
    margin-bottom:20px;
    margin-top:39px;

  @media screen and (min-width: 768px) {
   
  }
`;
const Descriptions = styled('h3')`
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    margin-top: 46.84px;
    color: #000000;
    padding-bottom:30px;
  @media screen and (min-width: 768px) {
   
  }
`;

