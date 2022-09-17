import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { useState } from "react";
import AddAnExistingItem from "./Modal-addAnExistingItem-onWishListOpen";
import AddListItem from "./Modal-addListItem-onWhislistOpen";

export default function AskItemType({ open, close }) {
    const [newOne, setNewOne] = useState(false);
    const [existing, setExisting] = useState(false);

    const handleOpenNew = () => setNewOne(true);
    const handleOpenExisting = () => setExisting(true);
    const handleCloseNew = () => setNewOne(false);
    const handleCloseExisting = () => setExisting(false);
  return (
    <Modal open={open} onClose={close}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 200,
          background: "white",
          borderRadius: 5,
          boxShadow: 24,
        }}
      >
        <Grid container
        sx={{
            m:6,
            display: 'flex',
            justifyContent: 'space-between'
        }}
        >
          <Grid item lg={12} md={12} sm={12}>
            <Typography variant='h5' >What type of item you want to add?</Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12}
          sx={{
            display: "flex",
            justifyContent: 'flex-end',
            mt: 6,
            mr: 10,
          }}>
            <Button onClick={handleOpenNew}>Add a new item</Button>
            <AddListItem open={newOne} close={handleCloseNew} />

            <Button onClick={handleOpenExisting}>Add an existing one</Button>
            <AddAnExistingItem open={existing} close={handleCloseExisting} />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
