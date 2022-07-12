import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { Search, Notifications } from "@mui/icons-material";
import Container from "@mui/material/Container";

import handleRedirection from "../../../../utilities/handleRedirection";
import { IState } from "../../../../store/user/reducer";

import styles from "./HomeAppBar.module.scss";

export default function HomeAppBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const user: any = useSelector<any>((state) => state.user);

  useEffect(() => {
    Router.prefetch("/auth/login");
  }, []);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Container maxWidth="lg" className={styles["app-bar-home-root"]}>
        <div className={styles["app-bar-left"]}>
          <div className={styles["app-bar-logo"]}>
            <Link href="/" passHref>
              <Image
                className={styles["logo"]}
                src="/logo.svg"
                width={35}
                height={55}
                alt="Logo"
                id="btn"
              />
            </Link>
            <Link href="/" passHref>
              <div className={styles["text"]}>artcryption</div>
            </Link>
          </div>

          <div className={styles["app-bar-nav"]}>
            <Link href="/how-it-works" passHref>
              <div id="btn" className={styles["link"]}>
                how it works
              </div>
            </Link>
            <Link href="/feed" passHref>
              <div id="btn" className={styles["link"]}>
                feed
              </div>
            </Link>
            <Link href="/curators" passHref>
              <div id="btn" className={styles["link"]}>
                curator
              </div>
            </Link>
            <Link href="/blog" passHref>
              <div id="btn" className={styles["link"]}>
                blog
              </div>
            </Link>
          </div>
        </div>

        <Box
          display="flex"
          alignItems="center"
          className={styles["app-bar-register"]}
        >
          <Link href="/search" passHref>
            <IconButton>
              <Search className={styles["icon"]} />
            </IconButton>
          </Link>

          {user.isLoggedIn ? (
            <>
              <IconButton>
                <Notifications className={styles["icon"]} />
              </IconButton>

              <IconButton>
                <Box
                  sx={{
                    height: 52,
                    width: 52,
                    background: "#eee",
                    borderRadius: "50%",
                  }}
                ></Box>
              </IconButton>
            </>
          ) : (
            <Button
              size="large"
              className={`${styles["reg-btn"]} g-font-family-kern g-font-medium`}
              variant="contained"
              id="btn"
              onClick={() => handleRedirection(Router, "/auth/login")}
            >
              REGISTER/LOGIN
            </Button>
          )}

          <div onClick={toggleDrawer} className={styles["mobi-menu"]}>
            <IconButton>
              <MenuIcon className={styles["icon"]} />
            </IconButton>
          </div>
        </Box>
      </Container>
      <Drawer
        className={styles["drawer-root"]}
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
      >
        <div className={styles["mobi-navbar-root"]}>
          <div className={styles["app-bar-logo"]}>
            <Image
              className={styles["logo"]}
              src="/logo.svg"
              width={35}
              height={55}
              alt="Logo"
            />
            <div className={styles["text"]}>artcryption</div>
          </div>

          <div className={styles["mobi-nav"]}>
            <Link href="/how-it-works" passHref>
              <div className={styles["link"]}>how it works</div>
            </Link>
            <Link href="/feed" passHref>
              <div className={styles["link"]}>feed</div>
            </Link>
            <Link href="/curators" passHref>
              <div className={styles["link"]}>curator</div>
            </Link>
            <Link href="/blog" passHref>
              <div className={styles["link"]}>blog</div>
            </Link>
          </div>

          <div className={styles["mobi-menu"]}>
            <Button
              size="small"
              className={styles["mobi-reg-btn"]}
              variant="contained"
              onClick={() => handleRedirection(Router, "/auth/login")}
            >
              REGISTER/LOGIN
            </Button>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
