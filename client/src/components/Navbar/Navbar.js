import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import Logo from "../../assets/American_Airlines-Logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "#FFFFFF",
    opacity: "0.9",
    display: "flex",
  },
  greeting: {
    display: "flex",
    justifyContent: "center",
    margin: "0",
    color: "black"
  },
  title: {
    color: "lightgray",
    flexGrow: 1,
    display: "flex-end",
    flexDirection: "flex-end",
    
  },
  logo: {
    backgroundRepeat: "no-repeat",
    height: "10vh",
    width: "20vw",
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar variant="dense">
          <Link
            to="/"
            className={classes.links}
            style={{ textDecoration: "none" }}
          >
            <img src={Logo} alt="" className={classes.logo}></img>
          </Link>
          <Typography className={classes.greeting}>
            You are logged in as:
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
