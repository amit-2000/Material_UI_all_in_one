import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";
export default function CheckBox() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h2>Check-Box in material UI</h2>
          <Checkbox />
          <Checkbox checked="true" />
          <Checkbox checked="true" color="primary">
            Marks
          </Checkbox>
          <Checkbox defaultChecked indeterminate color="secondary"></Checkbox>
          {/*  */}
          <h2>Check-box with label</h2>
          <FormControlLabel control={<Checkbox />} label="Check_Box_Label" />
        </header>
      </div>
    </div>
  );
}
