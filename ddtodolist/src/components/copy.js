import React, { useState } from "react";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import logo from "../assets/image/dadong.jpg";
// import logo from "../assets/icons/当前所有项目.png";

import { Link as RouterLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
         大东智能化系统工程有限公司
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Logo = styled.img.attrs({
  src: logo,
  alt: "dadong logo"
})`
  height: 90px;
  margin: 5px;
`;

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = (infos, errors) => {
  let valid = true;
  Object.values(infos).forEach(val => {
    val.length > 0 && (valid = false);
  });
  Object.values(errors).forEach(val => {
    val == null && (valid = false);
  });
  //other validation
  return valid;
};

const handleChange = (e, setErrors, errors, setLogin, login) => {
  e.preventDefault();
  const { name, value } = e.target;
  switch (name) {
    case "email":
      setErrors({
        password: errors.password,
        email: emailRegex.test(value) ? "" : "请填写正确电子邮件格式"
      });
      break;
    default:
      break;
  }
  if (name.equals("email")) {
    setLogin({
      email: value,
      password: login.password
    });
  } else if (name.equals("password")) {
    setLogin({
      email: login.email,
      password: value
    });
  }
};
const SignIn = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Logo></Logo>
        <Typography component="h1" variant="h4">
          大东智能化代办事项登录
        </Typography>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}

        {/* <Typography component="h1" variant="h5">
          登录
        </Typography> */}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="电子邮件"
            name="email"
            // onChange={handleSubmit.bind(
            //   null,
            //   setErrors,
            //   errors,
            //   setLogin,
            //   login
            // )}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="密码"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="记住我的账号"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            to="/home"
            component={RouterLink}
          >
            登录
          </Button>
          {/* <Link to="/home" component={RouterLink}>
            {" "}
            <p>jaja</p>
          </Link> */}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                忘记密码?
              </Link>
            </Grid>
            <Grid item>
              <Link variant="body2" to="/signup" component={RouterLink}>
                {"注册新账号"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default SignIn;
