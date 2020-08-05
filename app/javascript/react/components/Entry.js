import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

import CodeEditor from "./CodeEditor";
import TranslationField from "./TranslationField";
import LanguageButtons from "./LanguageButtons";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     display: "flex",
  //     flexWrap: "wrap",
  //   },
  entryPage: {
    textAlign: "center",
  },
}));

const Entry = () => {
  const classes = useStyles();

  const [language, setLanguage] = useState("javascript");
  const [codeBlock, setCodeBlock] = useState("");
  const [translationField, setTranslationField] = useState("");

  const handleChange = (event) => {
    setTranslationField(event.target.value);
  };

  const onEditorChange = (newValue) => {
    setCodeBlock(newValue);
  };

  const handleLanguage = (event, newLanguage) => {
    setLanguage("");
    setLanguage(newLanguage);
  };

  const handleSubmit = () => {
    event.preventDefault();
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
    <div className={classes.entryPage}>
      <LanguageButtons handleLanguage={handleLanguage} language={language} />
      <CodeEditor
        language={language}
        codeBlock={codeBlock}
        onEditorChange={onEditorChange}
      />
      <br />
      <Typography>Enter translation below:</Typography>
      <TranslationField
        translationField={translationField}
        handleChange={handleChange}
      />
      <br />
      <Button variant="contained" color="secondary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Entry;
