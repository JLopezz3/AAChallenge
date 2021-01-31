import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/American_Airlines-Logo.png";

import axios from "axios";
import { useHistory } from "react-router-dom";

import Alert from "@material-ui/lab/Alert";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Jerel Lopez, Tri Nham, & Seung Jung
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1563724576495-4bb026cc9133?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  logo: {
    backgroundRepeat: "no-repeat",
    height: "10vh",
    width: "20vw",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#07A1DA",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#07A1DA",
  },
}));

//   let history = useHistory();

// const [loginInfo, setLoginInfo] = useState({
//   cus_email: "",
//   cus_password: ""
// });

// const handleChange = (e) => {
//   setLoginInfo({
//     ...loginInfo,
//     [e.target.name]: e.target.value,
//   });
// }

// const login = (e) => {
//   e.preventDefault();
//   axios
//   .post("http://localhost:5000/api/v1/customerslogin")
//   .then((res) => {
//     if(res.data) {
//       history.push("/search-tickets");
//     } else {
//       history.push("/login")
//     }
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// }

export default function Login() {
  const classes = useStyles();

  let history = useHistory();

  const [error, setError] = useState("");

  const [cus_email, setCusEmail] = useState("");
  const [cus_password, setCusPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/customerslogin", {
        cus_email: cus_email,
        cus_password: cus_password,
      })
      .then((res) => {
        if (res.data) {
          history.push("/search-tickets");
          console.log(res.data);
        } else {
          history.push("/login");
        }
      })
      .catch((err) => {
        //  console.log(err);
        setError(
          err.response.data.detail +
            ". Make sure your email and password is correct."
        );
      });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {error ? (
            <Alert
              className={classes.loginAlert}
              variant="filled"
              severity="error"
            >
              {error}
            </Alert>
          ) : null}
          <Link href="/home">
            <img src={Logo} alt="" className={classes.logo} />
          </Link>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={login}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setCusEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setCusPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  href="/signup"
                  variant="body2"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
