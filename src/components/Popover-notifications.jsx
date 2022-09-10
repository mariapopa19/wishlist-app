import { Box, ButtonBase, Divider, Popover, Stack, Typography } from "@mui/material";

export default function NotificationPopover({ open, close, anchorEl }) {
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
      <Stack divider={<Divider variant="middle" />} sx={{width: 400}}>
        {/* a map of notifications 3 max showing */}
        <Typography variant="body1" sx={{ p: 2 }}>
          Title of the notification
        </Typography>
        <Typography variant="body1" sx={{ p: 2 }}>
          Title of the notification
        </Typography>
        <Typography variant="body1" sx={{ p: 2 }}>
          Title of the notification
        </Typography>
      </Stack>
      <ButtonBase
      sx={{
        width: '100%',
        borderRadius: 2,
      }}
      >
        <Box
        sx={{
          width: '100%',
          height: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: '#FF9B71',
          boxShadow: 3,
          fontWeight: 'bold',
          borderRadius: 2,
        }}
        >
          <Typography variant="button" sx={{fontWeight: 'bold'}} >View all ...</Typography>
        </Box>
      </ButtonBase>
    </Popover>
  );
}
