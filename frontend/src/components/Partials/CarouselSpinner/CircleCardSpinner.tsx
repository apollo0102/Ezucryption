import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "./spinner.module.scss";
import { NextPage } from "next";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import CircleCard from "../AssetCards/CircleCard";
import ICard from "../../../typings/Card";
import { theme } from "../../../theme";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

interface CircleCardSpinnerProps {
  type: "artist" | "buy" | "follow";
  data: ICard[];
}

const CircleCardSpinner: NextPage<CircleCardSpinnerProps> = (props) => {
  const { data, type } = props;

  const responsivefeatures = {
    0: {
      items: 1,
    },
    450: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  };

  return (
    <div className={styles["asset-card-row-root"]}>
      <StyledOwlCarousel
        className="owl-theme"
        margin={15}
        responsive={responsivefeatures}
        nav={true}
        dots={false}
        autoplay
        navText={[
          '<img src="/icons/ArrowLeft.svg" />',
          '<img src="/icons/ArrowRight.svg" />',
        ]}
      >
        {data.slice(0, 8).map((s, i) => (
          <div key={`random-${i}`}>
            <CircleCard
              artist={s.artist}
              price={s.price}
              name={s.name}
              image={s.image}
              type={type}
            />
          </div>
        ))}
      </StyledOwlCarousel>
    </div>
  );
};

export default CircleCardSpinner;

const StyledOwlCarousel = styled(OwlCarousel)`
  .owl-carousel {
    position: relative;
  }
  .owl-next,
  .owl-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
  }
  .owl-next {
    right: -10px;
    display: flex;
  }
  .owl-prev {
    left: -10px;
    display: flex;
  }

  @media screen and (min-width: 1200px) {
    .owl-next {
      right: -30px;
    }
    .owl-prev {
      left: -30px;
    }
  }
`;
