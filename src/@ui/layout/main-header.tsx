import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { PathNames } from "../../@core/utility/header.data";

export default function MainHeader() {
  return (
    <div
      className="card vh-100 shadow primary-bg-color"
      style={{ width: "80px" }}
    >
      <div className="card secondary-bg-color">
        <div className="text-center">This is text</div>
      </div>
    </div>
  );
}

{
  /* <header>
<AppBar position="fixed">
  <Toolbar className="d-flex justify-content-md-between">
    <IconButton
      className="d-md-none"
      edge="start"
      color="inherit"
      aria-label="menu"
    >
      <MenuIcon />
    </IconButton>

    <div>Logo</div>

    <div className="d-none d-md-block">
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
</header> */
}
