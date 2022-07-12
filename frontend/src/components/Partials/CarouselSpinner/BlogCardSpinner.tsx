import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

import BlogCard from "../AssetCards/BlogCard";

import styles from "./spinner.module.scss";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

interface BlogCardSpinnerProps {
  data: {
    title: string;
    category: string;
    date: string;
    image: string;
    id?: string;
  }[];
  type?: string;
  title: string;
  alignTitle?: "center" | "flex-start" | "flex-end";
  titleSize?: string;
  titleBottomMargin?: string;
}

const BlogCardSpinner: NextPage<BlogCardSpinnerProps> = (props) => {
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
      <div
        style={{
          alignItems: alignTitle ? alignTitle : "flex-end",
          marginBottom: titleBottomMargin ? titleBottomMargin : "",
        }}
        className={styles["title-div"]}
      >
        <Link href="/digital-canapes" passHref>
          <div
            id="btn"
            style={{
              fontSize: titleSize ? titleSize : "",
              fontFamily: "Kern",
            }}
            className={styles["title"]}
          >
            {title}
          </div>
        </Link>

        {type == "feed" && (
          <Link href="/digital-canapes" passHref>
            <div id="btn" className={styles["view"]}>
              view
            </div>
          </Link>
        )}
      </div>

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
          {data.map((s, i) => (
            <Box
              key={`random-${i}`}
              width={[250]}
              mx={["auto"]}
              p={[0, 0]}
              pb={[2, 3]}
            >
              <BlogCard
                key={`random-${i}${title}`}
                title={s.title}
                category={s.category}
                date={s.date}
                image={s.image}
                id={s.id}
              />
            </Box>
          ))}
        </StyledOwlCarousel>
      </div>
    </div>
  );
};

export default BlogCardSpinner;

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
