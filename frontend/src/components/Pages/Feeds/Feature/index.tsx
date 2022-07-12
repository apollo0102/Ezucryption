import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

import AssetCard from "../../../UiKit/AssetCards/AssetCard";

import { data, data2, data3 } from "../../../../../mockDb/feature";

function FeedsFeature() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <div style={{ marginBottom: "6rem" }}>
        <Title>Crypto Canapés</Title>

        <Grid container>
          {data.slice(0, 4).map((d, i) => (
            <Grid item xs={12} sm={6} md={3} key={`rand${i}${d.name}`}>
              <AssetCard name={d.name} image={d.image} creator={d.artist} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div style={{ marginBottom: "6rem" }}>
        <Title>Digital Canapés</Title>

        <Grid container>
          {data2.slice(0, 4).map((d, i) => (
            <Grid item xs={12} sm={6} md={3} key={`rand${i}${d.name}`}>
              <AssetCard name={d.name} image={d.image} creator={d.artist} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div style={{ marginBottom: "8rem" }}>
        <Title>Digital Canapés</Title>

        <Grid container>
          {data3.slice(0, 4).map((d, i) => (
            <Grid item xs={12} sm={6} md={3} key={`rand${i}${d.name}`}>
              <AssetCard name={d.name} image={d.image} creator={d.artist} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default FeedsFeature;

const Title = styled.h3`
  font-size: 28px;
  text-align: center;
  font-family: "Kern";
  font-weight:500;
  margin-bottom: 18px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    text-align: right;
  }
`;
