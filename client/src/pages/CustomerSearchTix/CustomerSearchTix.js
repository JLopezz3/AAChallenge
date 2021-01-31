import Book from "../../assets/book.jpg";

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import TextField from "@material-ui/core/TextField";

import axios from "axios";

import { useHistory } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
  },
  text: {
    position: "relative",
    paddingTop: "200px",
  },
  title_1: {
    fontFamily: "Oswald",
    color: "black",
    letterSpacing: "1px",
    fontWeight: "500",
  },
  title_2: {
    fontFamily: "Oswald",
    color: "rgba(200,16,46,1)",
    letterSpacing: "1px",
    fontWeight: "500",
  },
  content: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "900",
    color: "white",
    textShadow: "1px 1px 5px #C8102E",
  },
  paper: {
    height: "5rem",
    width: "50rem",
    borderRadius: "20px",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    background: "rgba(0,0,0,0.9)",
    color: "#FFFFFF",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  search: {
    fontFamily: "Oswald",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    color: "#FFFFFF",
    background: "#07A1DA",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#FFFFFF",
      backgroundColor: "#0081b0",
    },
    width: "20rem",
    letterSpacing: "3px",
  },
  flights: {
    margin: theme.spacing(1),
    background: "white",
  },
  header: {
    fontFamily: "Oswald",
  },
}));

function Home() {
  const classes = useStyles();
  const background = {
    imageUrl: {
      backgroundImage: `url(${Book})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "100%",
    },
  };

  let history = useHistory();

  const [departure_airport, setDeparture] = useState("");
  const [arrival_airport, setArrival] = useState("");

  const booking = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/api/v1/search", {
        departure_airport: departure_airport,
        arrival_airport: arrival_airport,
      })
      .then((res) => {
        if (res.data) {
          history.push("/checkout");
          console.log(res.data);
        } else {
          history.push("/search-tickets");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <React.Fragment>
        <Grid
          style={background.imageUrl}
          item
          xs={12}
          className={classes.root}
          component="main"
          direction="row"
          alignItems="center"
        >
          <div className={classes.text}>
            <Grid item xs={12}>
              <Typography
                className={classes.title_1}
                display="inline"
                variant="h2"
              >
                Book a Flight on
              </Typography>
              <Typography
                className={classes.title_2}
                display="inline"
                variant="h2"
              >
                &nbsp; AA
              </Typography>
            </Grid>
            <br />
            <Paper className={classes.paper}>
              <Typography className={classes.header}>
                Enter a 3 Letter Airport Code ex) LAX or JFK
              </Typography>
              <TextField
                required
                id="filled-required"
                label="Departing"
                variant="filled"
                className={classes.flights}
                onChange={(e) => setDeparture(e.target.value)}
              />
              <TextField
                required
                id="filled-required"
                label="Arriving"
                variant="filled"
                className={classes.flights}
                onChange={(e) => setArrival(e.target.value)}
              />
              <Button className={classes.search} onClick={booking}>
                Search Flight <SearchIcon />
              </Button>
            </Paper>
          </div>
        </Grid>
      </React.Fragment>
    </div>
  );
}
export default Home;
