import { ButtonBase, Divider, Popover, Stack, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";

export default function ProfilePopover({ open, close, anchorEl }) {
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
        <ButtonBase>
          <HomeIcon />
          <Typography variant="body1" sx={{ py: 2, pl: 1 }}>
            Home
          </Typography>
        </ButtonBase>
        <ButtonBase>
          <SettingsIcon />
          <Typography variant="body1" sx={{ py: 2, pl: 1 }}>
            Settings
          </Typography>
        </ButtonBase>
      </Stack>
    </Popover>
  );
}
