import { Divider, Popover, Stack, Typography } from "@mui/material";

export default function NotificationPopover({ open, close, anchorEl }) {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={close}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Stack>
        {/* a map of notifications 3 max showing */}
        <Typography variant="body1" sx={{p:2}} >Title of the notification</Typography>
        <Divider variant="middle" />
        <Typography variant="body1" sx={{p:2}}>Title of the notification</Typography>
        <Divider variant="middle" />
        <Typography variant="body1" sx={{p:2}}>Title of the notification</Typography>
        <Divider variant="middle" />
      </Stack>
    </Popover>
  );
}
