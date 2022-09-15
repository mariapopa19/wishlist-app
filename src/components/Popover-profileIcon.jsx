import { ButtonBase, Divider, Popover, Stack, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { singOut } from "../api";
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";

export default function ProfilePopover({ open, close, anchorEl }) {
  let navigate = useNavigate();

  const home = () => {
    navigate("/dashboard");
  };

  const settings = () => {
    navigate("/dashboard/settings");
  };

  const { token, setToken } = useContext(GeneralContext);

  const logOut = async () => {
    console.log(token);
    await singOut(token);
    localStorage.clear();
    setToken(null);
    navigate("/");
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={close}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Stack divider={<Divider variant="middle" />} sx={{ width: 150 }}>
        <ButtonBase onClick={home}>
          <HomeIcon />
          <Typography variant="body1" sx={{ py: 2, pl: 1 }}>
            Home
          </Typography>
        </ButtonBase>
        <ButtonBase onClick={settings}>
          <SettingsIcon />
          <Typography variant="body1" sx={{ py: 2, pl: 1 }}>
            Settings
          </Typography>
        </ButtonBase>
        <ButtonBase onClick={logOut} >
          <LogoutIcon />
          <Typography variant="body1" sx={{ py: 2, pl: 1 }}>
            Logout
          </Typography>
        </ButtonBase>
      </Stack>
    </Popover>
  );
}
