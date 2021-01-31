import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/core/Link";
import GitHubIcon from '@material-ui/icons/GitHub';

import Grid from "@material-ui/core/Grid";

import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Bros from "../../assets/Bros.JPG"

const useStyles = makeStyles((theme) => ({
  main: {
    background: "#f5f5f5",
  },
  root: {
    display: "flex",
    width: "95vw",
    margin: theme.spacing(3),
    // background: "#f5f5f5",
    background: "#FFFFFF",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "0.6em",
    marginTop: theme.spacing(10),
    color: "#C8102E",
    letterSpacing: "2px",
    fontSize: "50px",
    fontWeight: "800",
  },
  Bros: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    padding: "20px",
    width: "50rem",
    marginLeft: "350px",

  },
  content: {
    flex: "1 0 auto",
    marginLeft: "300px",
    textAlign: "center",
  },

  cover: {
    minHeight: 256,
    minWidth: 256,
  },
  icon: {
    height: "30%",
  },
}));

export default function MediaControlCard() {
    const classes = useStyles();

    return (
    <div className={classes.main}>
        <div>
            <NavBar />
        </div>
        <div>
            <Typography className={classes.title}>ABOUT THE DEVELOPERS</Typography>
        </div>
        <div>
            <img src={Bros} alt="" className={classes.Bros} />
        </div>
        <div>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
            >
            <Grid item xs={3}>
                <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Jerel Lopez
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Senior, BS Computer Science (May 2021)
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Minor: Mathematics
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Fun Fact: I like to work on cars as a hobby
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Project Task: Full stack
                        </Typography>
                        <Link href="https://www.linkedin.com/in/jerellopez/">
                            <LinkedInIcon className={classes.icon} />
                        </Link>
                        <Link href="https://github.com/JLopezz3">
                            <GitHubIcon className={classes.icon} />
                        </Link>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    title="Jerel Lopez"
                />
                </Card>
            </Grid>

            <Grid item xs={3}>
                <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Tri Nham
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Senior, BS Computer Science (May 2021)
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Minor: Mathematics
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Fun Fact: I am an audio engineer
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Project Task: Backend
                        </Typography>
                        <Link href="https://www.linkedin.com/in/tri-nham-317b65199/">
                            <LinkedInIcon className={classes.icon} />
                        </Link>
                        <Link href="https://github.com/trinhamcity1">
                            <GitHubIcon className={classes.icon} />
                        </Link>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    title="Tri Nham"
                />
                </Card>
            </Grid>

            <Grid item xs={3}>
                <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Seung Jung
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Senior, BS Computer Science (May 2021)
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Minor: Mathematics
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Fun Fact: I like to try new food
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Project Task: Frontend
                        </Typography>
                        <Link href="https://www.linkedin.com/in/seung-jung/">
                            <LinkedInIcon className={classes.icon} />
                        </Link>
                        <Link href="https://github.com/seungej">
                            <GitHubIcon className={classes.icon} />
                        </Link>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    title="Seung Jung"
                />
                </Card>
            </Grid>

            <Footer />
            </Grid>
        </div>
    </div>
    );
}
