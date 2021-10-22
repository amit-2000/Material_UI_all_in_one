import React from "react";
import Radio from "@material-ui/core/Radio";
export default function RadioButton() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Radio-Button in Material UI</h2>
        <Radio
          name="radio-button-demo"
          inputProps={{ "aria-label": "A" }}
        />
      </header>
    </div>
  );
}
