import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ButtonMUI from "./component/Button.jsx";
import CheckBox from "./component/CheckBox";
// import DateAndTime from "./component/DateAndTime";
import RadioButton from "./component/RadioButton";
import SliderMUI from "./component/Slider";
import BoxMUI from "./component/Box";
import ColorMUI from "./component/Color";
import AvatarMUI from "./component/Avatar";
import ChipMUI from "./component/Chip";
import ListMUI from "./component/List";
import ToolTipMUI from "./component/ToolTip";
import TypographyMUI from "./component/Typography";
import ProgressMUI from "./component/Progress";
import ContainerMUI from "./component/Container";
import GridMUI from "./component/Grid";
ReactDOM.render(
  <React.StrictMode>
    <ButtonMUI />
    <CheckBox />
    {/* <DateAndTime /> */}
    <RadioButton />
    <SliderMUI />
    <BoxMUI />
    <ColorMUI />
    <AvatarMUI />
    <ChipMUI />
    <ListMUI />
    <ToolTipMUI />
    <TypographyMUI />
    <ProgressMUI />
    <ContainerMUI />
    <GridMUI />
  </React.StrictMode>,
  document.getElementById("root")
);
