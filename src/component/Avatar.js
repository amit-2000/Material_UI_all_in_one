import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
export default function AvatarMUI() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Avatar and Badges in Material UI</h2>
        <h4>__Avatar__</h4>
        <Avatar>G</Avatar>
        <h4>__Badges__</h4>
        <p>Icon with badge</p>
        <Badge badgeContent={7} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={100} max={50} color="primary">
          <MailIcon />
        </Badge>
        <Badge
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          color="secondary"
          badgeContent={10}
        >
          <MailIcon />
        </Badge>
      </header>
    </div>
  );
}
