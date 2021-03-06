import React, {useState} from "react";
import SideMenu from "@ui/components/side-menu";

export default function MainHeader() {
    // const [open, setOpen] = useState(false);

    return (
        <div
            className="card vh-100 border-0 d-flex justify-content-center  primary-bg-color"
            style={{width: "100px"}}
        >
            <div className="position-absolute p-1  w-100 top-0 text-center mb-3">
                <div className="d-flex nav-item-box justify-content-center">
                    <h4 className="text-yellow-400"> AG. </h4>
                </div>

            </div>

            <div className="card border-0 shadow-lg body-bg">

                <div className="card-body">
                    <SideMenu/>
                </div>
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
