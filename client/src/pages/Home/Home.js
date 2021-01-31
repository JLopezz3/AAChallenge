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

import CovidInfo from "../../components/CovidInfo/CovidInfo";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Hollywood from "../../assets/Hollywood.jpg";
import Newyork from "../../assets/NewYork.jpg";
import Chicago from "../../assets/Chicago.jpg";
import Houston from "../../assets/Houston.jpg";
import Miami from "../../assets/Miami.jpg";
import Washington from "../../assets/Washington.jpg";

import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

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
    fontFamily: "Oswald",
    textShadow: "10px 10px 10px #000000",
  },
  logIn: {
    flexGrow: 1,
    color: "#FFFFFF",
    background: "#07A1DA",
    fontFamily: "Oswald",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#FFFFFF",
      backgroundColor: "#0081b0",
    },
    borderRadius: 10,
    width: 100,
    margin: theme.spacing(1),
    letterSpacing: "2px"
  },
  intro: {
    fontFamily: "Oswald",
    background: "transparent",
    boxShadow: "none",
    flexGrow: 1,
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
  tickets: {
    background: "#FA9232",
    borderRadius: "10px",
    width: "20%",
    height: "10%",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#000000",
      backgroundColor: "#FFB800",
    },
    fontFamily: "Oswald"
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  rootTwo: {
    paddingTop: "10%",
  },
  media: {
    height: 140,
  },
  rowTwoGrid: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10)
  },
  cityTitles: {
    fontFamily: "Oswald"
  }
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

          <div className={classes.buttons}>
            <Link href="/search-tickets" style={{ textDecoration: "none" }}>
              <Button className={classes.tickets} style={{ width: "150%" }}>
                Buy Tickets <FlightTakeoffIcon />
              </Button>
            </Link>
            <CovidInfo className={classes.covid} />
          </div>
        </Grid>
        <Grid item>
          <img src={Airplane} alt="" className={classes.pic}></img>
        </Grid>
      </Grid>
      <div className={classes.rootTwo}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={3} className={classes.rowOne}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Hollywood}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h2"
                    className={classes.cityTitles}
                  >
                    Los Angeles (LAX)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Los Angeles is a sprawling Southern California city and the
                    center of the nation’s film and television industry.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link href="/search-tickets">
                  <Button size="small" color="primary">
                    Book to Los Angeles
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} className={classes.rowTwo}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Newyork}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h2"
                    className={classes.cityTitles}
                  >
                    New York City (JFK)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    New York City comprises 5 boroughs sitting where the Hudson
                    River meets the Atlantic Ocean.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link href="/search-tickets">
                  <Button size="small" color="primary">
                    Book to New York
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Chicago}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h2"
                    className={classes.cityTitles}
                  >
                    Chicago (ORD)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Chicago, on Lake Michigan in Illinois, is among the largest
                    cities in the U.S.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link href="/search-tickets">
                  <Button size="small" color="primary">
                    Book to Chicago
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          className={classes.rowTwoGrid}
        >
          <Grid item xs={3} className={classes.rowTwo}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Houston}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h2"
                    className={classes.cityTitles}
                  >
                    Houston (HOU)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Houston is a large metropolis in Texas, extending to
                    Galveston Bay.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link href="/search-tickets">
                  <Button size="small" color="primary">
                    Book to Houston
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} className={classes.rowTwo}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Miami}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h2"
                    className={classes.cityTitles}
                  >
                    Miami (MIA)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Miami, officially the City of Miami, is a metropolis located
                    in southeastern Florida in the United States.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link href="/search-tickets">
                  <Button size="small" color="primary">
                    Book to Miami
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Washington}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h2"
                    className={classes.cityTitles}
                  >
                    Washington D.C. (WAS)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Washington, DC, the U.S. capital, is a compact city on the
                    Potomac River, bordering the states of Maryland and
                    Virginia.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link href="/search-tickets">
                  <Button size="small" color="primary">
                    Book to Washington D.C.
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
