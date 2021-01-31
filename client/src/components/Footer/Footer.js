import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import Logo from "../../assets/American_Airlines-Logo.png";

function Copyright() {
  return (
    <Typography
      variant="body2"
      style={{ color: "#115798", fontWeight: "bold" }}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://american-airlines-challenge.herokuapp.com/"
      >
        Jerel Lopez, Tri Nham, & Seung Jung
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // minHeight: "60vh",
    width: "100%",
    flex: "1 0 auto",
  },
  rootGrid: {
    flexGrow: 1,
  },
  footer: {
    padding: "1em",
    marginTop: "auto",
    backgroundColor: "#b8b8b8",
  },
  footerRelated: {
    color: "#FFFFFF",
  },
  footerText: {
    color: "#115798",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  image: {
    width: "50%",
    float: "left",
    objectFit: "contain",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={4}
          className={classes.rootGrid}
        >
          <Grid item xs={3}>
            <img className={classes.image} alt="" src={Logo}></img>
          </Grid>
          <Grid item xs={2}>
            <Link
              href="https://american-airlines-challenge.herokuapp.com/employee-login"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="body1" className={classes.footerText}>
                Employee Login
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              href="https://american-airlines-challenge.herokuapp.com/about-us"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="body1" className={classes.footerText}>
                About Us
              </Typography>
            </Link>
          </Grid>
          {/* <Grid item xs={3}>
            <Link
              to="/report-bug"
              href="/report-bug"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="body1" className={classes.footerRelated}>
                Report an Issue
              </Typography>
            </Link>
          </Grid> */}
          <Grid item xs={4}>
            <Copyright />
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}
