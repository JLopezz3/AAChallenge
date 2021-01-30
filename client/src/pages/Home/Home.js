import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Home.css";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import Logo from "../../assets/American_Airlines-Logo.png";
import Airplane from "../../assets/Airplane.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    background: "transparent",
    color: "transparent",
    boxShadow: "none",
    top: "10px",
  },
  title: {
    flexGrow: 1,
    fontFamily: "Oleo Script",
    textShadow: "10px 10px 10px #000000",
  },
  logIn: {
    flexGrow: 1,
    color: "#FFFFFF",
    background: "#07A1DA",
    fontFamily: "Oleo Script",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#FFFFFF",
      backgroundColor: "#0081b0",
    },
    borderRadius: 10,
    width: 100,
    margin: theme.spacing(1),
  },
  intro: {
    fontFamily: "Oleo Script",
    background: "transparent",
    boxShadow: "none",
    flexGrow: 1,
    textShadow: "10px 10px 10px #000000",
    color: "#000000",
    display: "flex",
    justifyContent: "flex",
    alignItems: "center",
    margin: theme.spacing(6),
  },
  calc: {
    textAlign: "center",
    marginBottom: theme.spacing(20),
  },
  button: {
    background: "#000000",
    color: "#FFFFFF",
    width: "20%",
    borderRadius: "10px",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#000000",
      backgroundColor: "#FFB800",
    },
    fontFamily: "Oleo Script",
    fontSize: "18px",
  },
  pic: {
    backgroundRepeat: "no-repeat",
    height: "30vh",
    width: "30vw",
  },
  logo: {
    backgroundRepeat: "no-repeat",
    height: "10vh",
    width: "20vw",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container class="section">
        <AppBar className={classes.navbar} position="absolute">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              <Link
                href="/"
                style={{ textDecoration: "none", color: "#FA9232" }}
              >
                <img src={Logo} alt="" className={classes.logo}></img>
              </Link>
            </Typography>
            <Link href="/login" style={{ textDecoration: "none" }}>
              <Button className={classes.logIn}>Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
        <Grid item className={classes.calc}>
          <Typography className={classes.intro} variant="h2">
            Book your travel flights now!
          </Typography>
          <Button className={classes.button}>Get Started</Button>
        </Grid>
        <Grid item>
          <img src={Airplane} alt="" className={classes.pic}></img>
        </Grid>
      </Grid>
      <div className={classes.rootTwo}>
        <Grid container>
          <Grid item>
            <h2>HELLO, THIS IS CONTAINER TWO</h2>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
