import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

import axios from "axios";

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
  backButton: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: "#FFFFFF",
    background: "#3d3d3d",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "white",
      backgroundColor: "#292929",
    },
  },
  buttons: {
    display: "flex",
    marginTop: 20,
    justifyContent: "flex-end",
  },
  grid: {
    display: "inline-block",
    overflow: "auto",
  },
}));

// Destructure props
const Confirm = ({ handleNext, handleBack, values }) => {
  const { customer_firstname, customer_lastname, street, city, state, zipcode, full_name, card_number, exp_month, exp_year} = values;

    const handleSubmit = () => {
      axios
        .post(
          "https://american-airlines-challenge.herokuapp.com/api/v1/customerpayment",
          values
        )
        .then((res) => {
          console.log(values);
          handleNext();
        })
        .catch((err) => {
          console.log(err);
        });
    };

  const classes = useStyles();
  return (
    <>
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <List disablePadding>
                  <ListItem>
                    <ListItemText primary="First Name" secondary={customer_firstname} />
                  </ListItem>

                  <Divider />

                  <ListItem>
                    <ListItemText primary="Last Name" secondary={customer_lastname} />
                  </ListItem>

                  <Divider />

                  <ListItem>
                    <ListItemText
                      primary="Address Line 1"
                      secondary={street}
                    />
                  </ListItem>

                  <Divider />
                  <ListItem>
                    <ListItemText primary="City" secondary={city} />
                  </ListItem>

                  <Divider />
                  <ListItem>
                    <ListItemText primary="State" secondary={state} />
                  </ListItem>

                  <Divider />
                  <ListItem>
                    <ListItemText primary="Zip" secondary={zipcode} />
                  </ListItem>

                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary="Name on Card"
                      secondary={full_name}
                    />
                  </ListItem>

                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary="Card Number"
                      secondary={card_number}
                    />
                  </ListItem>

                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary="Expiry Month"
                      secondary={exp_month}
                    />
                  </ListItem>

                  <Divider />
                  <ListItem>
                    <ListItemText primary="Expiry Year" secondary={exp_year} />
                  </ListItem>

                  <Divider />
                </List>

                <div className={classes.buttons}>
                  <Button
                    className={classes.backButton}
                    variant="contained"
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    className={classes.button}
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Confirm & Continue
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </main>
      </React.Fragment>
    </>
  );
};

export default Confirm;
