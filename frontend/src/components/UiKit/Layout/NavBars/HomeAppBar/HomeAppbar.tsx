import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import Image from "next/image";
import styles from "./HomeAppBar.module.scss";

export default function HomeAppBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
  }, []);
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

        <div className={styles["app-bar-register"]}>
          <IconButton>
            <Link href="/search" passHref>
              <SearchIcon className={styles["icon"]} />
            </Link>
          </IconButton>

          <Button
            size="large"
            className={styles["reg-btn"]}
            variant="contained"
            id="btn"
          >
            REGISTER/LOGIN
          </Button>

          <div onClick={toggleDrawer} className={styles["mobi-menu"]}>
            <IconButton>
              <MenuIcon className={styles["icon"]} />
            </IconButton>
          </div>
        </div>
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
            >
              REGISTER/LOGIN
            </Button>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
