import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Typography, Box } from "@mui/material";
import { NextPage } from "next";
import styled from "@emotion/styled";

import AssetCard from "../AssetCards/AssetCard";

import ICard from "../../../typings/Card";
import { theme } from "../../../theme";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

interface AssetCardSpinnerProps {
  data: ICard[];
  type?: string;
  title: string;
  alignTitle?: "center" | "flex-start" | "flex-end";
  titleSize?: string;
  titleBottomMargin?: string;
}

const AssetCardSpinner: NextPage<AssetCardSpinnerProps> = (props) => {
  const { data, title, alignTitle, titleSize, titleBottomMargin, type } = props;

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
    <div>
      <div>
        <Heading
          sx={{ fontSize: [20] }}
          className="g-font-family-kern g-font-medium"
          mb={1.5}
          mr={[0, 2.5]}
        >
          {title}
        </Heading>
      </div>

      <StyledOwlCarousel
        className="owl-theme"
        margin={10}
        responsive={responsivefeatures}
        nav={true}
        dots={false}
        autoplay
        navText={[
          '<img src="/icons/ArrowLeft.svg" />',
          '<img src="/icons/ArrowRight.svg" />',
        ]}
      >
        {data.map((s, i) => (
          <Box
            key={`random-${i}`}
            width={[220]}
            mx={["auto"]}
            p={[0, 0]}
            pb={[2, 3]}
          >
            <AssetCard
              name={s.name}
              image={s.image}
              creator={s.artist}
              price={s.price}
            />
          </Box>
        ))}
      </StyledOwlCarousel>
    </div>
  );
};

export default AssetCardSpinner;

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

const Heading = styled(Typography)`
  text-align: center;

  @media screen and (min-width: ${theme.mediaScreens.sm}) {
    text-align: right;
  }
`;
