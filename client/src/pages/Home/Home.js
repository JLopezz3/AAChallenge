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
            <Button className={classes.tickets}>Buy Tickets</Button>
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
                  <Typography gutterBottom variant="h4" component="h2">
                    Los Angeles
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} className={classes.rowTwo}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    New York City
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    Chicago
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    Chicago
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    Chicago
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
