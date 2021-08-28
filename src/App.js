import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Header from "./component/Header";
import InputComponent from "./component/InputComponent";
import axios from "axios";
import Definition from "./component/Definition";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [inputWord, setInputWord] = useState("");
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);

  const dictionaryApi = async () => {
    setLoading(true);
    setData([]);
    if (inputWord) {
      await axios
        .get(
          `https://api.dictionaryapi.dev/api/v2/entries/${language}/${inputWord}`
        )
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          err = JSON.parse(JSON.stringify(err));
          if (err.name === "Error") {
            toast.error("Data not found plz try another word or language");
          }
        });
    }
    setLoading(false);
  };

  useEffect(() => {
    dictionaryApi();
  }, [language]);
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        newestOnTop={false}
        pauseOnHover
        theme="colored"
      />
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
                toast.error("Please input your desire word");
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
