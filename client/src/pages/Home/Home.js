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
          <Link href="/search-tickets" style={{textDecoration: "none"}}>
          <Button className={classes.tickets} style={{width: "150%"}}>Buy Tickets</Button>
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
                  <Typography gutterBottom variant="h4" component="h2">
                    Los Angeles
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry. Near its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours.
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
                  image={Newyork}
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
                    New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.
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
                  image={Chicago}
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
                    Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower.
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
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Houston}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    Houston
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Houston is a large metropolis in Texas, extending to Galveston Bay. It’s closely linked with the Space Center Houston, the coastal visitor center at NASA’s astronaut training and flight control complex.
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
                  image={Miami}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    Miami
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Miami, officially the City of Miami, is a metropolis located in southeastern Florida in the United States. It is the third most populous metropolis on the East coast of the United States, and it is the seventh largest in the country.
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
