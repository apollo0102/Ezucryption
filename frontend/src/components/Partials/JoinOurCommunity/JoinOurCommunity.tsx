import React from "react";
import { Typography } from "@mui/material";
import styles from "./JoinOurCommunity.module.scss";
import WhiteButton from "../../UI/Buttons/WhiteButton/WhiteButton";
import {
  LINKED_IN_URL,
  INSTAGRAM_URL,
  TWITTER_URL,
  FACEBOOK_URL,
  DISCORD_URL,
} from "../../../../config/config";

const JoinOurCommunity = () => {
  return (
    <div>
      <Typography className={styles["join-text"]} variant="h5" mt={7} mb={2}>
        Join Our Community
      </Typography>
      <div className={styles["social-btn-root"]}>
        <a id="btn" target="_blank" rel="noreferrer" href={LINKED_IN_URL}>
          <WhiteButton title="LinkedIn" />
        </a>
        <a id="btn" target="_blank" rel="noreferrer" href={INSTAGRAM_URL}>
          <WhiteButton title="Instagram" />
        </a>
        <a id="btn" target="_blank" rel="noreferrer" href={DISCORD_URL}>
          <WhiteButton title="Discord" />
        </a>
        <a id="btn" target="_blank" rel="noreferrer" href={TWITTER_URL}>
          <WhiteButton title="Twitter" />
        </a>
        <a id="btn" target="_blank" rel="noreferrer" href={FACEBOOK_URL}>
          <WhiteButton title="Facebook" />
        </a>
      </div>
    </div>
  );
};

export default JoinOurCommunity;
