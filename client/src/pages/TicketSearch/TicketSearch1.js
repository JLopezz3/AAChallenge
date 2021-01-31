import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: "#FFFFFF",
    background: "rgba(200,16,46,1)",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "white",
      backgroundColor: "#b0102a",
    },
  },
  buttons: {
    display: "flex",
    marginTop: 20,
    justifyContent: "flex-end",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

// Destructuring props
const FirstStep = ({
  handleNext,
  handleBack,
  handleChange,
  values: {
    customer_firstname,
    customer_lastname,
    street,
    city,
    state,
    zipcode,
  },
  formErrors,
}) => {
  // Check if all values are not empty or if there are some error
  //   const isValid = issue_summary.length > 0 && !formErrors.issue_summary;

  const classes = useStyles();

  return (
    <>
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="customer_firstname"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  value={customer_firstname || ""}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="customer_lastname"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  value={customer_lastname || ""}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="street"
                  label="Address line 1"
                  fullWidth
                  autoComplete="shipping address-line1"
                  value={street || ""}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                  value={city || ""}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  value={state || ""}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zipcode"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                  value={zipcode}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <div
              // style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
              className={classes.buttons}
            >
              <Button
                variant="contained"
                // disabled={!isValid}
                // onClick={isValid ? handleNext : null}
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
            </div>
          </Paper>
        </main>
      </React.Fragment>
    </>
  );
};

export default FirstStep;
