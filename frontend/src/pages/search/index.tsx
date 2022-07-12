import React from "react";
import {
  Container,
  TextField,
  InputAdornment,
  Input,
  FormControl,
} from "@mui/material";
import HomeAppBar from "../../components/UiKit/Layout/NavBars/HomeAppBar/HomeAppbar";
import FooterRoot from "../../components/Partials/Footer/FooterRoot";
import styles from "./index.module.scss";
import { creatorsDB } from "../../../mockDb/creatorsDB";
import CircleCardSpinner from "../../components/Partials/CarouselSpinner/CircleCardSpinner";
import SectionHeader from "../../components/Partials/SectionHeader/SectionHeader";
import { Search } from "@mui/icons-material";
import { styled } from "@mui/system";

const textHeader = {
  color: " #74BEC4",
  fontWeight: "400",
  fontSize: "26px",
  textAlign: "left",
  marginBottom: "1.5rem",
};

const CssInput = styled(Input)({
  "& input": {
    color: "black",
    borderColor: "black",
    padding: "1rem 0.8rem",
  },
  "& input:focused": {
    borderColor: "black",
  },
});

const index = () => {
  return (
    <div>
      <HomeAppBar />
      <Container maxWidth="lg">
        <div className={styles["search-div"]}>
          <SectionHeader
            text="Search"
            style={{
              color: " black",
              fontWeight: "500",
              fontSize: "38px",
              textAlign: "left",
              marginBottom: "1.5rem",
            }}
          />
          <div className={styles["form"]}>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <CssInput
                id="standard-adornment-amount"
                placeholder="Search creators, curators, assets and collections"
                startAdornment={
                  <InputAdornment position="start">
                    <Search style={{ fontSize: "2rem" }} />
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>

        <div className={styles["section-div"]}>
          <SectionHeader text="ASSETS" style={textHeader} />
          <CircleCardSpinner type="buy" data={creatorsDB} />
        </div>
        <div className={styles["section-div"]}>
          <SectionHeader text="COLLECTIONS" style={textHeader} />
          <CircleCardSpinner type="follow" data={creatorsDB} />
        </div>
        <div className={styles["section-div"]}>
          <SectionHeader text="CURATORS" style={textHeader} />
          <CircleCardSpinner type="follow" data={creatorsDB} />
        </div>
        <div className={styles["section-div"]}>
          <SectionHeader text="CREATORS" style={textHeader} />
          <CircleCardSpinner type="follow" data={creatorsDB} />
        </div>
      </Container>
      <FooterRoot />
    </div>
  );
};

export default index;
