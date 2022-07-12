import React from "react";
import {
  ArrowForward,
  ArrowUpward,
  FacebookOutlined,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { Grid, InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TWITTER_URL,
} from "../../../../../config/config";

function Footer() {
  return (
    <div className={styles["footer-root"]}>
      <div className={styles["logo-div"]}>
        <div className={`${styles["text"]} g-font-family-haffer`}>
          artcryption
        </div>
        <div className={styles["image"]}>
          <Image
            src="/icons/home/footerLogo.svg"
            height={300}
            width={300}
            alt="logo"
          />
        </div>
      </div>
      <Grid container className={styles["form-div-root"]}>
        <Grid item md={6} sm={12} xs={12} className={styles["side-text"]}>
          Artcryption is a platfrom for creatives, artists, designers and IP
          innovators to share, protect and sell their works showcasing the best
          in creativity.
        </Grid>
        <Grid item md={2} sm={6} xs={12} className={styles["nav-div"]}>
          <Link href="/" passHref>
            <span className={styles["nav"]}> Drops</span>
          </Link>
          <Link href="/" passHref>
            <span className={styles["nav"]}> About</span>
          </Link>
          <Link href="/" passHref>
            <span className={styles["nav"]}> How it works</span>
          </Link>
          <Link href="/" passHref>
            <span className={styles["nav"]}> Curators</span>
          </Link>
          <Link href="/" passHref>
            <span className={styles["nav"]}> Feed</span>
          </Link>
        </Grid>
        <Grid item md={4} sm={6} xs={12} className={styles["form-div"]}>
          <div className={styles["header"]}>Subscribe to our newsletter</div>
          <div className={styles["form"]}>
            <TextField
              style={{ padding: "0.3rem 0" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ArrowForward className={styles["arrow"]} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              variant="standard"
              placeholder="Enter your email"
            />
          </div>
        </Grid>
      </Grid>
      <div className={styles["footer-foot"]}>
        <div className={styles["icon-div"]}>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            className={styles["icon"]}
            rel="noreferrer"
          >
            <FacebookOutlined style={{ color: "grey" }} />
          </a>
          <a
            href={TWITTER_URL}
            className={styles["icon"]}
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>
          <a
            href={INSTAGRAM_URL}
            className={styles["icon"]}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram style={{ color: "grey" }} />
          </a>
        </div>
        <div className={styles["footer-note"]}>
          © 2022. ARTCRYPTION INC., All Rights Reserved
        </div>
        <div className={styles["footer-nav-div"]}>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className={styles["nav"]}
          >
            Press
          </a>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className={styles["nav"]}
          >
            Privacy
          </a>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className={styles["nav"]}
          >
            Terms
          </a>
        </div>
      </div>
      <div className={styles["mobi-footer-note"]}>
        © 2022. ARTCRYPTION INC., All Rights Reserved{" "}
        <a href="#top" className={styles["go-up"]}>
          <ArrowUpward />
        </a>
      </div>
    </div>
  );
}

export default Footer;
