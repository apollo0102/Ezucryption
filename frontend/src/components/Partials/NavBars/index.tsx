import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Typography, Drawer } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import styled from "@emotion/styled";
import Router from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";

import handleRedirection from "../../../utilities/handleRedirection";

import Wrapper from "../../UI/Wrapper";
import { StrippedButton } from "../../UI/Buttons";

import Hamburger from "./Icons/Hamburger.svg";
import Search from "./Icons/Search.svg";

function MobileDrawer({
  isOpen,
  toggleDrawer,
}: {
  isOpen: boolean;
  toggleDrawer: () => void;
}) {
  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
      <Box width={"90vw"} pt={4} pl={4}>
        <Box display="flex" mb={3}>
          <Image src="/logo.svg" width={35} height={55} alt="Logo" />

          <Typography
            className="g-font-family-kern g-font-bold"
            mt={1}
            ml={1.3}
            sx={{ fontSize: 20 }}
          >
            artcryption
          </Typography>
        </Box>

        <div>
          <Link href="/how-it-works">
            <Typography className="g-font-family-kern" mb={2}>
              how it works
            </Typography>
          </Link>

          <Link href="/feed">
            <Typography className="g-font-family-kern" mb={2}>
              feed
            </Typography>
          </Link>

          <Link href="/curators">
            <Typography className="g-font-family-kern" mb={2}>
              curator
            </Typography>
          </Link>

          <Link href="/blog">
            <Typography className="g-font-family-kern" mb={4}>
              blog
            </Typography>
          </Link>
        </div>

        <div>
          <StrippedButton
            sx={{ backgroundColor: "black", color: "white", fontSize:'16px' }}
            onClick={() => handleRedirection(Router, "/auth/login")}
          >
            REGISTER/LOGIN
          </StrippedButton>
        </div>
      </Box>
    </Drawer>
  );
}

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const user: any = useSelector<any>((state) => state.user);

  useEffect(() => {
    Router.prefetch("/auth/login");
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      height={125}
      sx={{ borderBottom: ["1px solid #000", "1px solid #000", "none"] }}
    >
      <Wrapper
        display="flex"
        alignItems="center"
        height={"100%"}
        justifyContent={["space-between"]}
      >
        <Box display="flex" alignItems="center">
          <Box display="flex">
            <Box height={55} width={31} sx={{ position: "relative" }}>
              <Image src="/images/logo.png" layout="fill" />
            </Box>

            <Typography
              ml={[1, 1, 2]}
              mt={[1.05, 1.05, 0]}
              className="g-font-family-haffer g-font-bold"
              sx={{ fontSize: [20, 20, 32] }}
            >
              artcryption
            </Typography>
          </Box>

          <Box display={["none", "none", "flex"]} alignItems="center" ml={14}>
            <Link href="/how-it-works">
              <Typography
                className="g-font-family-kern g-font-medium"
                mr={5}
                sx={{ color: "#292D32" }}
              >
                how it works
              </Typography>
            </Link>

            <Link href="/feed">
              <Typography
                className="g-font-family-kern g-font-medium"
                mr={5}
                sx={{ color: "#292D32" }}
              >
                feed
              </Typography>
            </Link>

            <Link href="/curators">
              <Typography
                className="g-font-family-kern g-font-medium"
                mr={5}
                sx={{ color: "#292D32" }}
              >
                curators
              </Typography>
            </Link>

            <Link href="/blog">
              <Typography
                className="g-font-family-kern g-font-medium"
                sx={{ color: "#292D32" }}
              >
                blog
              </Typography>
            </Link>
          </Box>
        </Box>

        <Box display="flex" alignItems="center">
          <Link href="/search">
            <StrippedButton display="flex">
              <Search />
            </StrippedButton>
          </Link>

          <Box ml={1.5} display={["flex", "flex", "none"]}>
            <StrippedButton onClick={toggleDrawer}>
              <Hamburger />
            </StrippedButton>
          </Box>

          {user.isLoggedIn ? (
            <Box ml={3} display="flex" alignItems={"center"}>
              <StrippedButton display="flex" mr={3}>
                <Notifications />
              </StrippedButton>

              <StrippedButton display="flex">
                <Box
                  sx={{
                    height: 52,
                    width: 52,
                    background: "#eee",
                    borderRadius: "50%",
                  }}
                ></Box>
              </StrippedButton>
            </Box>
          ) : (
            <Box display={["none", "none", "flex"]} ml={3}>
              <AuthButton
                className="g-font-family-kern g-font-medium"
                display="flex"
                alignItems="center"
                onClick={() => handleRedirection(Router, "/auth/login")}
              >
                REGISTER/LOGIN
              </AuthButton>
            </Box>
          )}
        </Box>
      </Wrapper>

      <MobileDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </Box>
  );
}

export default NavBar;

const AuthButton = styled(StrippedButton)`
  background-color: black;
  color: white;
  height: 48px;
  font-size: 18px;
  padding: 0 20px;
  border-radius: 10px;
`;
