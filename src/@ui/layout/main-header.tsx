import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import SideMenu from "@ui/components/side-menu";
import Drawer from "@material-ui/core/Drawer";

export default function MainHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="card vh-100 shadow primary-bg-color"
      style={{ width: "80px" }}
    >
      <div className="card secondary-bg-color">
        <div className="d-flex justify-content-center ms-2 mt-3 mb-3">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(!open)}
          >
            <MenuOpenIcon></MenuOpenIcon>
          </IconButton>
        </div>
        <Drawer anchor={"right"} open={open} onClick={() => setOpen(!open)}>
          <SideMenu></SideMenu>
        </Drawer>
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
