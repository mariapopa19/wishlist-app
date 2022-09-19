import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import { createMyGroup } from "../api";

export default function AddGroupName({ open, close }) {
  let navigate = useNavigate();


  const [group, setGroup] = useState("");

  const listPage = async () => {
    const res = await createMyGroup(localStorage.getItem("token"), group);
    close();
    navigate(`my-list/${res.id}`)
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
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TextField
          required
          onChange={(e) => setGroup(e.target.value)}
          id="group-name"
          label="Group Name"
          name="group-name"
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
          Add a group
        </Button>
      </Box>
    </Modal>
  );
}
