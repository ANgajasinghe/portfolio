import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import {
  Theme,
  makeStyles,
  withStyles,
  createStyles,
} from "@material-ui/core/styles";

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      width: "15px",
      height: "15px",
      backgroundColor: "#FFC107",
      color: "#FFC107",
      borderRadius: "50%",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  })
)(Badge);

export default function ProfileImage() {
  return (
    <StyledBadge
      overlap="circle"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      variant="dot"
    >
      <Avatar
        style={{ width: "90px", height: "90px" }}
        alt="Remy Sharp"
        src="../../assets/img/profile-image.png"
      />
    </StyledBadge>
  );
}
