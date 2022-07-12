import React from "react";
import { Box, Button, ButtonBase } from "@mui/material";
import styles from "./CircleCard.module.scss";
import Image from "next/image";
import { NextPage } from "next";
import IconButton from "@mui/material/IconButton";

interface CircleCardProps {
  image: string;
  artist?: string;
  price?: string;
  name?: string;
  buy?: (id: string) => void;
  type: "artist" | "buy" | "follow";
}

const CircleCard: NextPage<CircleCardProps> = ({
  image,
  artist,
  price,
  name,
  type,
  buy,
}) => {
  return (
    <div className={styles["top-card-root"]}>
      <Box display="flex" justifyContent="center">
        <div className={styles.blueSwirlHome}>
          <Box className={styles.greySwirlHome}>
            <Image
              src={`/images/vitamins/${image}`}
              layout="fill"
              alt="curator"
              className={styles.imageHome}
            />
          </Box>
        </div>
      </Box>
      {type === "artist" && <Box className={styles["name"]}>{artist}</Box>}
      {type == "buy" && (
        <div>
          <Box className={styles["price"]}>{name}</Box>
          <Box className={styles["price"]}>{price}</Box>
          <Box className={styles["btn-div"]}>
            <Button id="btn" className={styles["btn"]} variant="outlined">
              Buy now
            </Button>
          </Box>
        </div>
      )}
      {type == "follow" && (
        <div>
          <Box className={styles["price"]}>{name}</Box>
          <Box className={styles["btn-div"]}>
            <Button id="btn" className={styles["btn"]} variant="outlined">
              Follow
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
};

export default CircleCard;
