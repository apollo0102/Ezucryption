import React from "react";
import FooterRoot from "../components/Partials/Footer/FooterRoot";
import JoinWaitlist from "../components/Partials/JoinWaitList/JoinWaitList";
import WhyArtcryption from "../components/Partials/WhyArtcryption/WhyArtcryptionRoot";
import styles from "../components/Pages/Welcome/Index.module.scss";
import Container from "@mui/material/Container";
import JoinOurCommunity from "../components/Partials/JoinOurCommunity/JoinOurCommunity";
import { Grid, Typography } from "@mui/material";
import AssetCard from "../components/Partials/AssetCards/AssetCard";
import { data } from "../../mockDb/feature";
import SectionHeader from "../components/Partials/SectionHeader/SectionHeader";
import WelcomeHero from "../components/Pages/Welcome/WelcomeHero";

const Index = () => {
  return (
    <div className={styles["welcome-root"]}>
      <div className={styles["hero-div"]}>
        <WelcomeHero />
      </div>
      <Container maxWidth="lg">
        <span className={styles["card-header"]}>
          <SectionHeader text="Digital Canapés" />
        </span>

        <Grid container columnSpacing={4.5} className={styles["card-root"]}>
          {data.slice(0, 4).map((d, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={`rand${i}${d.name}`}
              className={styles["card"]}
            >
              <AssetCard name={d.name} image={d.image} creator={d.artist} />
            </Grid>
          ))}
        </Grid>

        <WhyArtcryption />

        <JoinOurCommunity />
      </Container>

      <div className={styles["waitlist-div"]}>
        <JoinWaitlist />

        <FooterRoot />
      </div>
    </div>
  );
};

export default Index;
