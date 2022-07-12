import React, { useState } from "react";
import styled from "@emotion/styled";

function CustomizeFeedOptions() {
  const options = [
    "Curators",
    "Collectors (2)",
    "Categories",
    "On Sale",
    "Live Auctions",
    "Current Drops",
    "Highest Sales",
    "Collections",
    "New Listings",
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Button onClick={() => setIsOpen(!isOpen)}>
        Customize
        <br />
        feed
      </Button>

      {isOpen && (
        <OptionsWrapper>
          {options.map((option, i) => (
            <OptionButton>{option}</OptionButton>
          ))}
        </OptionsWrapper>
      )}
    </Wrapper>
  );
}

export default CustomizeFeedOptions;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 6rem;

  @media screen and (min-width: 768px) {
    position: absolute;
    left: 30px;
    width: 75px;
    top: 55%;
  }
`;

const Button = styled.button`
  width: 64px;
  height: 64px;
  background: #e7e7e7;
  border-radius: 50%;
  border: none;
  font-size: 9px;
  margin-bottom: 1.5rem;
  flex: none;
  cursor: pointer;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const OptionButton = styled.button`
  width: 75px;
  height: 75px;
  background: #e7e7e7;
  border-radius: 50%;
  border: none;
  flex: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 75px;
    height: 75px;
  }
`;
