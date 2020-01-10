import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/icons/历史记录logo.png";
import StickyHeadTable from "./StickyHeadTable";
import TableInfo from "./TableInfo";
import Paper from "@material-ui/core/Paper";

const Logo = styled.img.attrs({
  src: logo,
  alt: "history page logo"
})`
  height: 60px;
`;

const useStyles = makeStyles(theme => ({
  //
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  logoPosition: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(3)
  }
}));

const History = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <Logo className={classes.logoPosition} />
              历史记录
            </Typography>
          </Container>
        </div>
        <div>
          <Container maxWidth="lg">
            <StickyHeadTable obj={TableInfo.done_project} />
            {/* <StickyHeadTable title={"已完成的个人任务"} />
            <StickyHeadTable title={"已完成的备忘录"} /> */}
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
};
export default History;
