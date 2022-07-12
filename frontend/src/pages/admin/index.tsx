import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useRouter } from "next/router";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import ArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import List from "@mui/material/List";
import SettingsPage from "./settings/settings";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import Nav from "../../components/Partials/NavBars/HomeAppBar/HomeAppbar";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(0),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const adminRoutes = [
    { name: "Settings", route: "settings" },
    { name: "Categories, Tags and Fiters", route: "categories-tags-filters" },
    { name: "User Management", route: "user-management" },
    { name: "Page Management", route: "page-management" },
    { name: "Collection", route: "collection" },
    { name: "Transactions", route: "transactions" },
    { name: "Messages", route: "messages" },
    { name: "IP Case Management", route: "ip-management" },
    { name: "Analytics & Activities", route: "analytics-activities" },
    { name: "Drops and Events", route: "drops-and-events" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar color="inherit" position="fixed" open={open}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "#000",
              display: "flex",
              ...(open && { display: "none" }),
            }}
          >
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                mr: 2,
                ml: 2,
                color: "white",
                ...(open && { display: "none" }),
              }}
            >
              <ArrowRight />
            </IconButton>
          </div>
          <Nav />
        </div>

        {/* </Toolbar> */}
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          border: "none",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: "#000000" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ArrowLeft sx={{ color: "white" }} />
            ) : (
              <ArrowLeft />
            )}
          </IconButton>
        </DrawerHeader>
        <List sx={{ backgroundColor: "#000000", height: "100%" }}>
          {adminRoutes.map(({ name, route }, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <Link
                  sx={{
                    textDecoration: "none",
                    fontFamily: "Kern",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "22px",
                    color: "white",
                  }}
                  href={`/admin/${route}`}
                >
                  <ListItemText primary={name} />{" "}
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <SettingsPage />
      </Main>
    </Box>
  );
}
