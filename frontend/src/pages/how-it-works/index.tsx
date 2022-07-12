import Head from "next/head";
import { Typography } from "@mui/material";

import HomeAppBar from "../../components/Partials/NavBars/HomeAppBar/HomeAppbar";
import FooterRoot from "../../components/Partials/Footer/FooterRoot";
import JoinWaitlist from "../../components/Partials/JoinWaitList/JoinWaitList";
import HowItWorksSection from "../../components/Pages/HowItWorks/HowItWorksSection";
import FrequentlyAskedQuestions from "../../components/Pages/HowItWorks/FrequentlyAskedQuestions";
import Wrapper from "../../components/UI/Wrapper";

export default function Home() {
  return (
    <div>
      <Head>
        <title>How it works</title>
        <meta name="description" content="how it works" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeAppBar />

      <Wrapper pt={10}>
        <Typography
          className="g-font-family-kern g-font-bold"
          sx={{ fontSize: 38 }}
          mb={4}
        >
          How It Works
        </Typography>
        <HowItWorksSection />

        <FrequentlyAskedQuestions />
      </Wrapper>

      <JoinWaitlist />
      <FooterRoot />
    </div>
  );
}
