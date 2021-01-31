import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(3),
  },
  title: {
    marginTop: 30,
  },
}));

const TicketSearch4 = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography variant="h2" align="center">
        Thank you!
      </Typography>
      <Typography component="h4" align="center" className={classes.title}>
        You have successfully booked your flight. Thanks for booking with
        American Airlines!
      </Typography>
    </Box>
  );
};

export default TicketSearch4;
