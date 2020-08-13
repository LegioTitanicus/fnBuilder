import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, useMediaQuery } from "@material-ui/core";

let screenSize = useMediaQuery;

const useStyles = makeStyles({
  // paper: {
  //   [theme.breakpoints.up("md")]: {
  //     width: "70%",
  //   },
  // },
});

const About = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <Paper className={classes.paper}> */}
      <Typography variant="h3">About</Typography>
      <Typography>This is</Typography>
      {/* </Paper> */}
    </div>
  );
};

export default About;
