import { fontSize, textAlign } from "@mui/system";
import React from "react";
import styles from "./SectionHeader.module.scss";
import { NextPage } from "next";

interface SectionHeaderProps {
  style?: {};
  text: string;
}

const SectionHeader: NextPage<SectionHeaderProps> = ({ style, text }) => {
  return (
    <div style={style} className={styles["header"]}>
      {text}
    </div>
  );
};

export default SectionHeader;
