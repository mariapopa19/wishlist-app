import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import NotificationPopover from "../components/Popover-notifications";
import ProfilePopover from "../components/Popover-profileIcon";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  let navigate = useNavigate();

  const home = () => {
    navigate("/dashboard");
  };

  const [anchorElNotification, setAnchorElNotification] = React.useState(null);
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);

  const handleClickNotification = (event) => {
    setAnchorElNotification(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setAnchorElNotification(null);
  };
  const handleClickProfile = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  const openNotification = Boolean(anchorElNotification);
  const openProfile = Boolean(anchorElProfile);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            variant="square"
            sx={{ mr: 1 }}
            src="data:image/png;base64,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"
            onClick={home}
          />{" "}
          <Typography
            onClick={home}
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 /*fontWeight: 'bold'*/ }}
          >
            {/* {wishlist icon or typo } */} Whislist App
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleClickNotification}
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <NotificationPopover
              open={openNotification}
              close={handleCloseNotification}
              anchorEl={anchorElNotification}
            />
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClickProfile}
            >
              <AccountCircle />
            </IconButton>
            <ProfilePopover
              open={openProfile}
              close={handleCloseProfile}
              anchorEl={anchorElProfile}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
