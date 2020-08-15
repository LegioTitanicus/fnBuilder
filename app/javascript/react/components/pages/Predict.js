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
  const handleSubmit = () => {
    event.preventDefault();
    fetch(`https://automl.googleapis.com/v1beta1/{parent}/datasets`, {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify({
        language: language,
        codeBlock: codeBlock,
        translation: translationField,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        setNotice(body.notice);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

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
