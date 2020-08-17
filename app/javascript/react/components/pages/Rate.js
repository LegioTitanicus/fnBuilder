import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, TextField } from "@material-ui/core";

import CodeEditor from "../ui/CodeEditor";
import TranslationField from "../ui/TranslationField";
import LanguageButtons from "../ui/LanguageButtons";
import Stars from "../ui/Stars";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     display: "flex",
  //     flexWrap: "wrap",
  //   },
  ratePage: {
    textAlign: "center",
  },
  textField: {
    marginLeft: "3vw",
    marginRight: "3vw",
  },
}));

const Rate = () => {
  const classes = useStyles();

  const [language, setLanguage] = useState("javascript");
  const [codeBlock, setCodeBlock] = useState("");
  const [translationField, setTranslationField] = useState("");
  const [showBlock, setShowBlock] = useState(false);

  const csrfToken = document.querySelector("[name='csrf-token']").content;

  const fetchNew = () => {
    event.preventDefault();
    setShowBlock(!showBlock);
    fetch(`/api/v1/submissions`, {
      method: "GET",
      credentials: "same-origin",
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
        setCodeBlock(body.codeBlock);
        setTranslationField(body.translation);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  const handleChange = (event) => {
    setTranslationField(event.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();
    setShowBlock(!showBlock);
    fetch(`/api/v1/submissions`)
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
        alert(body.language);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  return (
    <div className={classes.ratePage}>
      <Typography>Rate other users submissions</Typography>
      {showBlock ? (
        <div id="getNewBlock"></div>
      ) : (
        <>
          <Typography>Select Language</Typography>
          <LanguageButtons language={language} />
          <Button onClick={fetchNew} color="secondary" variant="outlined">
            Get New Block
          </Button>
        </>
      )}
      {showBlock ? (
        <>
          <CodeEditor
            language={language}
            codeBlock={codeBlock}
            readOnly={true}
          />
          <br />
          <Typography>Translation:</Typography>
          <div className={classes.textField}>
            <TextField
              id="outlined-multiline-flexible"
              label="Enter text here"
              multiline
              rowsMax={8}
              value={translationField}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </div>
          <br />
          <Stars />
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Rate
          </Button>
        </>
      ) : (
        <div id="fetchedBlockOnceTrue"></div>
      )}
    </div>
  );
};

export default Rate;
