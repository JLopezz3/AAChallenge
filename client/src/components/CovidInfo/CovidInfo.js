import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

import { makeStyles } from "@material-ui/core/styles";

import Warning from "../../assets/warning.mp4";
import MaskVideo from "../../assets/maskvideo.mp4";
import NegativeTest from "../../assets/NegativeTest.mp4";

import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "#202020",
    background: "#FA9232",
    fontFamily: "Oswald",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#000000",
      backgroundColor: "#FFB800",
    },
    borderRadius: 10,
    width: "12rem",
    margin: theme.spacing(1),
  },
}));

const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
  return (
    <div>
      <AutoRotatingCarousel
        label="I understand"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: "absolute" }}
      >
        <Slide
          media={<video alt="" src={Warning} autoPlay />}
          mediaBackgroundStyle={{ backgroundColor: "#00678c" }}
          style={{ backgroundColor: "#00445c" }}
          title="Beware of COVID-19 Travel Restrictions!"
          subtitle="Please check your local & federal guidelines"
        />
        <Slide
          media={<video alt="" src={MaskVideo} autoPlay />}
          mediaBackgroundStyle={{ backgroundColor: "#BE2020" }}
          style={{ backgroundColor: "#AF1414" }}
          title="Face coverings required at all times"
          subtitle="Protect yourself and others by wearing a protective covering"
        />
        <Slide
          media={<video alt="" src={NegativeTest} autoPlay />}
          mediaBackgroundStyle={{ backgroundColor: "#00678c" }}
          style={{ backgroundColor: "#00445c" }}
          title="Negative Covid Test required to board flight"
          subtitle="Passengers must test negative maximum of 72hrs prior to flight"
        />
      </AutoRotatingCarousel>
    </div>
  );
};

export default function CovidInfo() {
  const classes = useStyles();
  const [handleOpen, setHandleOpen] = useState({ open: false });
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Button className={classes.button} onClick={handleClick}>
        Covid-19 Info <ErrorOutlineIcon />
      </Button>
      <AutoRotatingCarouselModal
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />
    </div>
  );
}
