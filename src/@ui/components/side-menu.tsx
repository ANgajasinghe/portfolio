import { IconButton, Tooltip } from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import WebIcon from "@material-ui/icons/Web";
import YouTubeIcon from "@material-ui/icons/YouTube";

export default function SideMenu() {
  return (
    <>
      <Tooltip title="HOME" aria-label="home">
        <IconButton>
          <HomeIcon></HomeIcon>
        </IconButton>
      </Tooltip>

      <br></br>
      <Tooltip title="PROJECTS" aria-label="projects">
        <IconButton>
          <AccountTreeIcon></AccountTreeIcon>
        </IconButton>
      </Tooltip>
      <br></br>
      <Tooltip title="BLOGS" aria-label="blogs">
        <IconButton>
          <WebIcon></WebIcon>
        </IconButton>
      </Tooltip>
      <br></br>
      <Tooltip title="TUTORIALS" aria-label="tutorials">
        <IconButton>
          <YouTubeIcon></YouTubeIcon>
        </IconButton>
      </Tooltip>
    </>
  );
}
