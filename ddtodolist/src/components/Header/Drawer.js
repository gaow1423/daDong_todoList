import React from "react";
import clsx from "clsx";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListSubheader from "@material-ui/core/ListSubheader";

import homePage from "../../assets/icons/首页.png";
import currentProject from "../../assets/icons/当前所有项目.png";
import peopleAssign from "../../assets/icons/人员分配.png";
import history from "../../assets/icons/历史记录.png";
import personalInfo from "../../assets/icons/个人信息.png";
import management from "../../assets/icons/管理页面.png";

const HomePageIcon = styled.img.attrs({
  src: homePage,
  // src: "https://img.icons8.com/ios/50/000000/steak-rare.png",
  // https://img.icons8.com/ios/50/000000/steak-rare.png
  alt: "homePage logo"
})`
  height: 30px;
  margin: 3px;
`;

const CurrentProjectIcon = styled.img.attrs({
  src: currentProject,
  alt: "currentProject logo"
})`
  height: 30px;
  margin: 3px;
`;

const PeopleAssignIcon = styled.img.attrs({
  src: peopleAssign,
  alt: "peopleAssign logo"
})`
  height: 30px;
  margin: 3px;
`;

const HistoryIcon = styled.img.attrs({
  src: history,
  alt: "history logo"
})`
  height: 30px;
  margin: 3px;
`;

const PersonalInfoIcon = styled.img.attrs({
  src: personalInfo,
  alt: "personalInfo logo"
})`
  height: 30px;
  margin: 3px;
`;

const ManagementIcon = styled.img.attrs({
  src: management,
  alt: "management logo"
})`
  height: 30px;
  margin: 3px;
`;

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  }
}));

// const StyledDrawer = styled(Drawer).attrs({
//   variant: 'persistent',
// })`
//   .MuiDrawer-paper {
//     width: ${theme.drawerWidth}px;
//   }
// `

const BigDrawer = ({ handleClose, open }) => {
  const classes = useStyles();
  return (
    <>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>
            {/* <ListSubheader inset>Executive Reporting</ListSubheader> */}
            <ListItem button component={Link} to={"/home"}>
              <ListItemIcon>
                <HomePageIcon />
              </ListItemIcon>
              <ListItemText primary="首页" />
            </ListItem>
            <ListItem button component={Link} to={"/current_project"}>
              <ListItemIcon>
                <CurrentProjectIcon />
              </ListItemIcon>
              <ListItemText primary="目前所有项目" />
            </ListItem>
            <ListItem button component={Link} to={"/people_assign"}>
              <ListItemIcon>
                <PeopleAssignIcon />
              </ListItemIcon>
              <ListItemText primary="人员分配" />
            </ListItem>
            <ListItem button component={Link} to={"/history"}>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="历史记录" />
            </ListItem>
          </div>
        </List>
        <Divider />
        <List>
          <div>
            <ListSubheader inset>设置管理</ListSubheader>
            <ListItem button>
              <ListItemIcon>
                <PersonalInfoIcon />
              </ListItemIcon>
              <ListItemText primary="个人信息设置" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ManagementIcon />
              </ListItemIcon>
              <ListItemText primary="管理者页面" />
            </ListItem>
          </div>
        </List>
      </Drawer>
    </>
  );
};

export default BigDrawer;
