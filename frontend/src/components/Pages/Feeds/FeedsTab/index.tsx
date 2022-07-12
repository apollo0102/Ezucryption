import React from "react";
import styled from "@emotion/styled";

import styles from "./feeds-tab.module.scss";

interface IProps {
  onChange: (value: string) => void;
  selectedTab: string;
}

function FeedsTabs(props: IProps) {
  const items = ["Featured", "Activity", "💥 Hot", "⚡ Trending"];
  const { onChange, selectedTab } = props;

  return (
    <Tab>
      {items.map((item, i) => (
        <TabItem
          key={i}
          isActive={item.toLowerCase() === selectedTab}
          onClick={() => onChange(item.toLowerCase())}
        >
          {item}
        </TabItem>
      ))}
    </Tab>
  );
}

export default FeedsTabs;

const Tab = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: unset;
  }
`;

const TabItem = styled.li<{ isActive: boolean }>`
  list-style: none;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#000" : "#6f6f6f")};
  margin-bottom: 1rem;

  &:hover {
    color: black;
  }

  @media screen and (min-width: 768px) {
    margin-left: 2rem;
    margin-bottom: unset;

    &:first-child {
      margin-left: 0;
    }
  }
`;
