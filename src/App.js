import "./App.css";
import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Header from "./component/Header";
import InputComponent from "./component/InputComponent";
import axios from "axios";
import Definition from "./component/Definition";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const [inputWord, setInputWord] = useState("");
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const dictionaryApi = async () => {
    try {
      setLoading(true);
      setData([]);
      if (inputWord) {
        const res = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/${language}/${inputWord}`
        );
        setData(res.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error) {
        setAlertMessage("No Data Found try another language");
        showAlert();
      }
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [language]);
  return (
    <div className="App">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {alertMessage}
        </Alert>
      </Snackbar>

      <div
        style={{
          height: "100vh",
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Container maxWidth="md">
          <Header />
          <InputComponent
            loading={loading}
            onSearch={() => {
              if (inputWord) {
                dictionaryApi();
              } else {
                setAlertMessage("Please input word");
                showAlert();
              }
            }}
            language={language}
            inputWord={inputWord}
            setInputWord={setInputWord}
            setLanguage={setLanguage}
          />
          {data && (
            <Definition
              loading={loading}
              inputWord={inputWord}
              data={data}
              language={language}
            />
          )}
        </Container>
      </div>
    </div>
  );
}

export default App;
