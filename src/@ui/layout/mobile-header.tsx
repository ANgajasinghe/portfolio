import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import SideMenu from "@ui/components/side-menu";
import PersonalDetails from "./personal-details";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

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

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setSideMenuOpen(!open)}
          >
            <MenuOpenIcon></MenuOpenIcon>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        className="d-lg-none"
        anchor={"left"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={{ width: "250px" }}>
          <PersonalDetails />
        </div>
      </Drawer>

      <Drawer
        anchor={"right"}
        open={sideMenuOpen}
        onClick={() => setSideMenuOpen(!sideMenuOpen)}
      >
        <div
          className="card vh-100 shadow primary-bg-color"
          style={{ width: "80px" }}
        >
          <div className="card secondary-bg-color mt-4">
            <div className="card-body">
              <SideMenu></SideMenu>
            </div>
          </div>
        </div>
      </Drawer>
    </header>
  );
}

// <div className="d-none d-sm-block">
//         <div className="d-flex justify-content-center gap-3">
//           {PathNames.map(({ path, label }, i) => (
//             <Link
//               activeClass="active"
//               to={path}
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               key={i}
//             >
//               {label}
//             </Link>
//           ))}
//         </div>
//       </div>
