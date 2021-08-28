import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TranslateIcon from "@material-ui/icons/Translate";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import languages from "../data/Languages";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
function InputComponent({
  onSearch,
  loading,
  language,
  setLanguage,
  inputWord,
  setInputWord,
}) {
  const onHandleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <p className="welcome">
        {inputWord ? inputWord : "Welcome to word's world Dictionary"}
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <TextField
          style={{ width: "50%" }}
          value={inputWord}
          onChange={(e) => setInputWord(e.target.value)}
          id="inputWord"
          placeholder="Type word here"
          label="Word for search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TranslateIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          style={{ width: "30%" }}
          value={language}
          onChange={onHandleChange}
          select
          label="Language"
        >
          {languages.map((item) => {
            return (
              <MenuItem key={item.label} value={item.label}>
                {item.value}
              </MenuItem>
            );
          })}
        </TextField>
        <Button
          color="primary"
          style={{
            width: "10%",
            margin: "10px 0",
          }}
          variant="contained"
          onClick={onSearch}
          disabled={loading}
        >
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
}

export default InputComponent;
