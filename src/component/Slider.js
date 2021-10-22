import React from "react";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function valuetext(value) {
  return `${value}°C`;
}

export default function SliderMUI() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Slider and Switch in Material UI</h2>
        <h4>Slider </h4>
        <Slider
          //   step={}
          max={100}
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          style={{
            width: "20%",
          }}
        />

        <Slider defaultValue={30} step={10} marks min={10} max={100} disabled />
        <h4>Switch (toggle Button)</h4>
        <Switch />
        <h4>Switch with label</h4>
        {/* <FormGroup> */}
        <FormControlLabel control={<Switch />} label="sound on" />
        {/* </FormGroup> */}
      </header>
    </div>
  );
}
