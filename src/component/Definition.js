import React from "react";
import { Typography } from "@material-ui/core";
import Loader from "./Loader";
function Definition({ loading, inputWord, data, language }) {
  if (loading) {
    return (
      <div className="definition">
        <Loader />;
      </div>
    );
      
  }
  return (
    <>
      <div className="definition">
        {inputWord && language === "en" && data[0] && (
          <audio
            style={{ width: "100%", borderRadius: "20px" }}
            src={data[0].phonetics[0] && data[0].phonetics[0].audio}
            controls
          >
            Your browser not support audio
          </audio>
        )}
        {language !== "en" && inputWord && data[0] && (
          <p>Audio Not available please try with english</p>
        )}

        {inputWord === "" ? (
          <Typography
            color="secondary"
            style={{
              textAlign: "center",
              margin: "40px 0",
              fontSize: "18px",
            }}
          >
            Start by typing a word inside the search box
          </Typography>
        ) : (
          data.map((mean) =>
            mean.meanings.map((item) =>
              item.definitions.map((def) => (
                <div className="single_meaning">
                  <b>Definition :</b>
                  <Typography component="body2"> {def.definition}</Typography>
                  <hr style={{ backgroundColor: "black", width: "100%" }} />
                  {def.example && (
                    <span>
                      <b>Example :</b> {def.example}
                    </span>
                  )}
                  {def.synonyms && (
                    <span>
                      <b>Synonyms :</b> {def.synonyms.map((s) => `${s},`)}
                    </span>
                  )}
                </div>
              ))
            )
          )
        )}
      </div>
    </>
  );
}

export default Definition;
