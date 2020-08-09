import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

import CodeEditor from "./CodeEditor";
import TranslationField from "./TranslationField";
import LanguageButtons from "./LanguageButtons";
import Stars from "./Stars";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     display: "flex",
  //     flexWrap: "wrap",
  //   },
  ratePage: {
    textAlign: "center",
  },
}));

const Rate = () => {
  const classes = useStyles();

  const [language, setLanguage] = useState("javascript");
  const [codeBlock, setCodeBlock] = useState("");
  const [translationField, setTranslationField] = useState("");
  const [showBlock, setShowBlock] = useState(false);

  const fetchNew = () => {
    setShowBlock(!showBlock);
  };

  const handleSubmit = () => {
    event.preventDefault();
    setShowBlock(!showBlock);
    fetch(`/api/v1/data`, {
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
          <TranslationField translationField={translationField} />
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
