import { Box, ButtonBase, Divider, Popover, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "../context/GeneralContext";

export default function NotificationPopover({ open, close, anchorEl }) {
  let navigate = useNavigate();

  const {notifications} = useContext(GeneralContext);


  const allNotifications = () => {
    navigate('/dashboard/notifications')
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
      <Stack divider={<Divider variant="middle" />} sx={{width: 400}}>
        {/* a map of notifications 3 max showing */}
       
        {notifications.slice(0, 3).map(elm => (
          <Typography variant="body1" sx={{ p: 2 }}>
          {elm.details}
        </Typography>))}
      </Stack>
      <ButtonBase
      onClick={allNotifications}
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
