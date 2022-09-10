import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function AddAListName({ open, close }) {
  let navigate = useNavigate();

  const listPage = () => {
    navigate("my-list");
  };

  return (
    <Modal open={open} onClose={close}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 450,
          height: 250,
          background: "white",
          borderRadius: 5,
          boxShadow: 24,
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <TextField
          required
          id="list-name"
          label="List Name"
          name="list-name"
          sx={{ 
            m: 4,
            width: 300,
        }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={listPage}
          sx={{
            mx: 4,
            mb: 2,
            p: 2,
          }}
        >
          Add a list
        </Button>
      </Box>
    </Modal>
  );
}
