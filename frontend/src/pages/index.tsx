import React, { ReactNode } from "react";
import type { NextPage } from "next";

import HomePage from "../components/Pages/HomePage/HomePage";
// import HomeAppBar from "../components/Partials/NavBars/HomeAppBar/HomeAppbar";
import Layout from "../components/Partials/Layout";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

const Home: Page = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;

Home.getLayout = Layout;
