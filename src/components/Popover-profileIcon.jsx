import { ButtonBase, Divider, Popover, Stack, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

export default function ProfilePopover({ open, close, anchorEl }) {

  let navigate = useNavigate();

  const home = () => {
    navigate("/dashboard");
  };

  const settings = () => {
    navigate('/dashboard/settings')
  }


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
      </Stack>
    </Popover>
  );
}
