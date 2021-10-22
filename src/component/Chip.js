import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import DeleteIcon from "@material-ui/icons/Delete";
import FaceIcon from "@material-ui/icons/Face";
import { Avatar } from "@material-ui/core";
export default function ChipMUI() {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h2>Chip and Divider in Material UI</h2>
          <h4>__Chip__</h4>
          <Chip
            label="React.js"
            onDelete={handleDelete}
            variant="outlined"
            deleteIcon={<DeleteIcon />}
          ></Chip>
          <Chip label="React.js" variant="outlined" avatar={<Avatar />}></Chip>
          <Chip label="React.js" icon={<FaceIcon />}></Chip>
          <Chip label="Vue.js" onDelete={handleDelete} />
          <h4>__Divider__</h4>
          {/* <Divider textAlign="left">LEFT</Divider> */}
          <Divider orientation="horizontal" />
        </header>
      </div>
    </div>
  );
}
