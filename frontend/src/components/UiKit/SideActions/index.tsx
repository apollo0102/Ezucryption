import React from "react";
import styled from "@emotion/styled";

import Upload from "./Icons/upload.svg";
import Cards from "./Icons/cards.svg";
import Feed from "./Icons/feed.svg";
import Chart from "./Icons/chart.svg";
import Comment from "./Icons/comment.svg";
import Shopping from "./Icons/shopping.svg";
import Calendar from "./Icons/calendar.svg";
import Person from "./Icons/person.svg";

function SideActions() {
  const options = [
    <Upload />,
    <Cards />,
    <Feed />,
    <Chart />,
    <Comment />,
    <Shopping />,
    <Calendar />,
    <Person />,
  ];
  return (
    <Wrapper>
      {options.map((option, i) => (
        <Button key={i}>{option}</Button>
      ))}
    </Wrapper>
  );
}

export default SideActions;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 53px;
  position: fixed;
  right: 0;
  top: 45%;
`;

const Button = styled.button`
  height: 43px;
  background-color: #e9f4f8;
  border: none;
  font-size: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    background-color: #2b6dab;
    color: white;
  }
`;
