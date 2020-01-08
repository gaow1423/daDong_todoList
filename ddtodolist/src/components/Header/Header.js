import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

import Logo from "./Logo";
// import Links from "./Links";
import Search from "./Search";
import Drawer from "./Drawer";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24
    // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  }
}));

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const Header = ({ handleDrawerOpen, handleDrawerClose, drawerOpen }) => {
  const isMobile = useMediaQuery("(max-width:750px)");
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, drawerOpen && classes.appBarShift)}
      >
        <StyledToolbar>
          <div className={classes.root}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                drawerOpen && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Logo small={isMobile} />
          </div>
          {isMobile ? null : <Search />}
          {/* <Links /> */}
        </StyledToolbar>
      </AppBar>
      <Drawer open={drawerOpen} handleClose={handleDrawerClose} />
    </>
  );
};

export default Header;
