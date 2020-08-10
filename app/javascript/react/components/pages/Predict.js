import React, { useState } from "react";
import {
  Typography,
  Button,
  LinearProgress,
  Zoom,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TranslationField from "../ui/TranslationField";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "8%",
    textAlign: "center",
  },
  button: {
    marginTop: "3%",
  },
  pageContent: {
    textAlign: "center",
  },
  progress: {
    height: "50px",
    justifyContent: "space-between",
    width: "80%",
    marginLeft: "10%",
  },
}));

const Predict = () => {
  const classes = useStyles();
  const [showProgress, setShowProgress] = useState(false);

  const think = () => {
    setShowProgress(!showProgress);
  };

  return (
    <div className={classes.pageContent}>
      <Typography variant="h4" className={classes.title}>
        Predict
      </Typography>
      <TranslationField />
      <Button className={classes.button} variant="contained" onClick={think}>
        Write my code!
      </Button>
      <br />
      <br />
      {showProgress && (
        <div className={classes.progress}>
          <Zoom in={showProgress}>
            <Paper elevation={0}>
              <LinearProgress color="secondary" />
              <br />
              <LinearProgress color="secondary" />
              <br />
              <LinearProgress color="secondary" />
            </Paper>
          </Zoom>
        </div>
      )}
      <br />
    </div>
  );
};

export default Predict;
