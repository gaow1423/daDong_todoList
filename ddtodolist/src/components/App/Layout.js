import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route } from "react-router-dom";
// import { useSelector } from 'react-redux'
// import { Redirect } from "react-router-dom";

import Header from "../Header/Header";

import CustomSeparator from "../CustomSeparator";

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  root: {
    display: "flex"
  }
}));

const Layout = ({ component: Component, path }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const classes = useStyles();

  // const username = useSelector(state => state.username);

  // return !username ? (
  //   <Redirect to="/home" />
  // ) : (
  return (
    <Route
      render={matchProps => (
        <>
          <div className={classes.root}>
            {path === "/register" || path === "/" ? (
              <div />
            ) : (
              <Header
                drawerOpen={drawerOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
              />
            )}
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <CustomSeparator path={path} />
              <Component {...matchProps} />
            </main>
          </div>
        </>
      )}
    />
  );
};

export default Layout;
