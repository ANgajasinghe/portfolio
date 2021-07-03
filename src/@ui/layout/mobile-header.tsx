import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { PathNames } from "../../@core/utility/header.data";
import PersonalDetails from "./personal-details";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

 // Determine whether the sentiment of text is positive
 // Use a web service 
 

  return (
    <header className="d-lg-none">
      <AppBar color="default" position="sticky">
        <Toolbar className="d-flex justify-content-md-between">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(!open)}
          >
            <MoreVertIcon fontSize="small" />
          </IconButton>

          <div>Logo</div>

          <div className="d-none d-sm-block">
            <div className="d-flex justify-content-center gap-3">
              {PathNames.map(({ path, label }, i) => (
                <Link
                  activeClass="active"
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  key={i}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="d-none d-md-block">Get Start</div>
        </Toolbar>
      </AppBar>

      <Drawer
        className="d-lg-none"
        anchor={"left"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <PersonalDetails />
      </Drawer>
    </header>
  );
}
