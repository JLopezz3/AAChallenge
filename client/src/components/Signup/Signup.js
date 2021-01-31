import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from "../../assets/American_Airlines-Logo.png";

import axios from "axios";

import { useHistory } from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            Jerel Lopez, Tri Nham, & Seung Jung
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        backgroundRepeat: "no-repeat",
        height: "10vh",
        width: "20vw",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#07A1DA",
    },
    textField: {

    }
}));

export default function SignUp() {
    const classes = useStyles();

      let history = useHistory();

     const [cus_email, setCusEmail] = useState("");
     const [cus_password, setCusPassword] = useState("");
     const [customer_firstname, setCustomerFirstName] = useState("");
     const [customer_lastname, setCustomerLastName] = useState("");
     const [phone, setPhone] = useState("");
     const [street, setStreet] = useState("");
     const [city, setCity] = useState("");
     const [state, setState] = useState("");
     const [dob, setDob] = useState("");
     const [zipcode, setZipcode] = useState("");
     
     const signup = (e) => {
       e.preventDefault();
       axios
         .post("http://localhost:5000/api/v1/createcustomer", {
           cus_email: cus_email,
           cus_password: cus_password,
           customer_firstname: customer_firstname,
           customer_lastname: customer_lastname,
           phone: phone,
           street: street,
           city: city,
           state: state,
           dob: dob,
           zipcode: zipcode,
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
            console.log(err);

         });
     };


    return (
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <div className={classes.paper}>
          <Link href="/home">
            <img src={Logo} alt="" className={classes.logo} />
          </Link>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={signup}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => setCustomerFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={(e) => setCustomerLastName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address1"
                  label="Address1"
                  name="address1"
                  autoComplete="address"
                  onChange={(e) => setStreet(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="state"
                  label="State"
                  name="state"
                  autoComplete="state"
                  onChange={(e) => setState(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="postal"
                  label="Postal Code"
                  name="postal"
                  autoComplete="postal"
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="date"
                  label="DOB"
                  type="date"
                  fullWidth
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setCusEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setCusPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Email AAdvantage promotions, vacation picks and flight deals.
                        In addition to any email subscriptions, you’ll receive transactional emails like flight alerts, check-in reminders and account updates."
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      required="required"
                    />
                  }
                  label="I agree to the AAdvantage terms/conditions"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  href="/login"
                  variant="body2"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
}
