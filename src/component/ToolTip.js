import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
export default function ToolTipMUI() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h2>Tool-Tip in Material UI</h2>
          <Tooltip title="Delete Tool_tip">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="hello name" arrow>
            <p>Hellooo</p>
          </Tooltip>
        </header>
      </div>
    </div>
  );
}
