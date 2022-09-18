import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { addListToGroup, getList, getUser } from "../api";
import { GeneralContext } from "../context/GeneralContext";
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from "@mui/material";
import { useParams } from "react-router-dom";

export default function AddAListToGroup({ open, close }) {

    const {id} = useParams();
  const { logOut } = React.useContext(GeneralContext);

  const [lists, setLists] = useState([]);

  const getDetails = async () => {
    try {
      const res = await getUser(localStorage.getItem("token"));
      if (res) {
        setLists(res.wishlist);
      }
    } catch (e) {
      if (e.message === "AxiosError: Request failed with status code 403") {
        logOut();
      }
    }
  };
  React.useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [listName, setListName] = React.useState([]);
  const handleChangeListName = (event) => {
    const {
      target: { value },
    } = event;
    setListName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const addListButton = async () => {
    const idLists = [];
    for(let name of listName) {
      let list = await getList(name);
      idLists.push(list.id);
    }
    console.log(id);
    await addListToGroup(idLists, id);
    close();
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
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
        <FormControl sx={{ width: 400, my: 1 }}>
                  <InputLabel>List Name</InputLabel>
                  <Select
                    id="demo-multiple-checkbox"
                    multiple
                    value={listName}
                    onChange={handleChangeListName}
                    input={<OutlinedInput label="List Name" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {lists.map((name) => (
                      <MenuItem key={name.id} value={name.name}>
                        <Checkbox checked={listName.indexOf(name.name) > -1} />
                        <ListItemText primary={name.name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={addListButton}
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
