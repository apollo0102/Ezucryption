import React, { useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import HeroSectionRoot from "./HeroSection/HeroSectionRoot";
import styles from "./HomePage.module.scss";
import JoinWaitlist from "../../Partials/JoinWaitList/JoinWaitList";
import AssetCardSpinner from "../../Partials/CarouselSpinner/AssetCardSpinner";
import { data, data2, data3 } from "../../../../mockDb/feature";
import { creatorsDB } from "../../../../mockDb/creatorsDB";
import CircleCardSpinner from "../../Partials/CarouselSpinner/CircleCardSpinner";
import OurMissionRoot from "./OurMission/OurMissionRoot";
import SellCurationCollectionRoot from "./SellCurationCollectionRoot/SellCurationCollectionRoot";
import NewsBlogRoot from "./NewsBlog/NewsBlogRoot";
import WhyArtcryptionRoot from "../../Partials/WhyArtcryption/WhyArtcryptionRoot";
import Wrapper from "../../UI/Wrapper";

interface IProps {
  data?: {}[];
  creatorsDB?: {}[];
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  return {
    props: {
      data: data,
      creators: creatorsDB,
    },
  };
};

export default function HomePage(props: IProps) {
  console.log(props);
  return (
    <div>
      <section className={styles["body-section"]}>
        <div style={{ position: "relative" }}>
          <HeroSectionRoot />
        </div>

        <Wrapper>
          <Box width={["100%", "95%"]} mx={["auto"]}>
            <Typography
              className="g-font-family-kern g-font-medium"
              sx={{ fontSize: [32] }}
              mt={10}
              mb={[10, 3]}
            >
              Featured
            </Typography>

            <div>
              <AssetCardSpinner data={data} title="Crypto Canapés" />
            </div>

            <div className={styles["asset-card-div"]}>
              <AssetCardSpinner data={data2} title="Digital Canapés" />
            </div>

            <div className={styles["asset-card-div"]}>
              <AssetCardSpinner data={data3} title="Digital Canapés" />
            </div>

            <div className={styles["top-creator-div"]}>
              <Typography
                className="g-font-family-kern g-font-bold"
                sx={{ fontSize: [32] }}
                mt={10}
                mb={10}
              >
                Top Creator
              </Typography>

              <CircleCardSpinner type="artist" data={creatorsDB} />
            </div>
          </Box>
        </Wrapper>

        <div className={styles["our-mission-div"]}>
          <OurMissionRoot />
        </div>

        <Container maxWidth="lg">
          <div className={styles["why-art-div"]}>
            <WhyArtcryptionRoot />
          </div>
          <div className={styles["buy-curate-div"]}>
            <SellCurationCollectionRoot />
          </div>

          <div className={styles["news-div"]}>
            <NewsBlogRoot />
          </div>
        </Container>

        <div className={styles["news-div"]}>
          <JoinWaitlist />
        </div>
      </section>
    </div>
  );
}
