import React, { useState } from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

import Footer from "../components/UiKit/Layout/Footer";
import HomeAppBar from "../components/Partials/NavBars/HomeAppBar/HomeAppbar";

function Blog() {
  const [posts, setPosts] = useState([1, 2, 3]);
  const [categories, setCategories] = useState([
    "Digital Canapes (5)",
    "Photos (4)",
    "Videos (13)",
    "Design (7)",
  ]);
  return (
    <div>
      <HomeAppBar />
      <Box
        display="flex"
        alignItems="center"
        sx={{ height: 110, backgroundColor: "#f7f7f7" }}
      >
        <Container maxWidth="lg">
          <span>Blog</span> {">"} <span>List</span>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container pt={10}>
          <Grid md={8} sm={12}>
            {posts.map((post, i) => (
              <Box mb={14}>
                <Box
                  sx={{
                    width: "100%",
                    height: 480,
                    background: "#eee",
                    position: "relative",
                  }}
                  mb={4.5}
                >
                  <Image
                    src="/images/blog/placeholder-image.jpg"
                    layout="fill"
                  />
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography mr={10} className="g-font-family-kern">
                    May 7, 2021
                  </Typography>
                  <Typography className="g-font-family-kern">
                    Digital Canapes
                  </Typography>
                </Box>

                <Typography
                  sx={{ fontSize: 51 }}
                  className="g-font-family-kern"
                  mb={1.5}
                >
                  CRYPTO CANAPE SUBMISSION
                </Typography>

                <Typography
                  sx={{ lineHeight: "27px" }}
                  className="g-font-family-kern"
                >
                  Immersive culinary experts Bompas & Parr to bring exclusive
                  experience to Expo a unique Future of Food dining concept will
                  lead guests on multi-sensory journey. Experience to include
                  Digital Canapés, part of a collaboration with new platform,
                  Artcryption
                </Typography>
              </Box>
            ))}
          </Grid>

          <Grid md={4} sm={12} pl={[0, 7]}>
            <div>
              <Typography
                className="g-font-family-kern g-font-medium"
                mb={1.1}
                sx={{ fontSize: 18 }}
              >
                Search
              </Typography>

              <SearchInput placeholder="Search" />

              <Box mt={6}>
                <Typography
                  className="g-font-family-kern g-font-medium"
                  sx={{ fontSize: 18 }}
                  mb={1.8}
                >
                  Related Posts
                </Typography>

                {posts.slice(0, 2).map((post, i) => (
                  <Box display="flex" alignItems="center" mb={4}>
                    <Box
                      sx={{ width: 50, height: 50, position: "relative" }}
                      mr={2}
                    >
                      <Image
                        src="/images/blog/placeholder-image.jpg"
                        layout="fill"
                      />
                    </Box>

                    <Box>
                      <Typography className="g-font-family-kern">
                        May 7, 2021
                      </Typography>
                      <Typography className="g-font-family-kern">
                        The best art tips
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box>
                <Typography
                  className="g-font-family-kern g-font-medium"
                  sx={{ fontSize: 18 }}
                  mb={2}
                >
                  Categories
                </Typography>

                <Box display="flex" flexDirection="column">
                  {categories.map((category, i) => (
                    <a
                      key={i}
                      style={{ display: "inline-block", marginBottom: 7 }}
                    >
                      {category}
                    </a>
                  ))}
                </Box>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Blog;

const SearchInput = styled.input`
  width: 299px;
  height: 33px;

  background: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  padding: 0.5rem 1rem;
`;
