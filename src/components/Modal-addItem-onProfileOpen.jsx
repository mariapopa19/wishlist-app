import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import { Grid } from "@mui/material";
import Select from "@mui/material/Select";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import { addItem, addItemToWish, getList, getUser } from "../api";
import { GeneralContext } from "../context/GeneralContext";

export default function AddItem({ open, close }) {
  const [quantity, setQuantity] = useState(1);

  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [details, setDetails] = useState("");
  const [size, setSize] = useState("");

  const handleChangeQuantity = (event, newValue) => {
    setQuantity(newValue);
  };

  function valuetext(value) {
    return `${value}`;
  }

  // ! select the list name
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

  // const handleChecked = (position) => {
  //   const updatedCheckedState = listChecked.map((item, index) =>
  //     index === position ? !item : item
  //   );
  //   setListChecked(updatedCheckedState);
  // };

  // const addItemButton = async () => {
  //   const res = await addItem(name, details, link, size, quantity);
  //   const idLists = await Promise.all( listName.map( async (elm) => {
  //     const res = await getList(localStorage.getItem("token"), elm)
  //     if (res) {
  //       return res.id;
  //     }
  //   }))
  //   console.log(res)

  //   await addItemToWish(idLists, res.id);
  //   close();
  // };

   const addItemButton = async () => {
    const res = await addItem(name, details, link, size, quantity);
    const idLists = [];
    for(let name of listName) {
      let list = await getList(name);
      idLists.push(list.id);
    }

    await addItemToWish(idLists, res.id);
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

  // const lists = ["Birthday", "Christmas", "Name day"];

  return (
    <Modal open={open} onClose={close}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1000,
          height: 600,
          background: "white",
          borderRadius: 5,
          boxShadow: 24,
        }}
      >
        <Grid container>
          <Grid item lg={6}>
            <Box
              sx={{
                m: 4,
                width: 400,
                height: 500,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <TextField
                required
                fullWidth
                onChange={(e) => setName(e.target.value)}
                id="item-name"
                label="Name (what is this)"
                name="item-name"
                // sx={{ m: 2 }}
              />
              <TextField
                required
                fullWidth
                id="item-url"
                label="URL"
                name="item-url"
                onChange={(e) => setLink(e.target.value)}
                // sx={{ m: 2 }}
              />
              <Box>
                <InputLabel sx={{ width: "100%" }}>Quantity</InputLabel>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    // required
                    onChange={(e) => setQuantity(e.target.value)}
                    id="item-quantity"
                    name="item-quantity"
                    value={quantity}
                    sx={{ width: 100 }}
                  />
                  <Box sx={{ width: 260 }}>
                    <Slider
                      defaultValue={1}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      min={1}
                      max={50}
                      onChange={handleChangeQuantity}
                    />
                  </Box>
                </Box>
              </Box>
              {/* <TextField
                required
                fullWidth
                multiline
                rows={4}
                onChange={(e) => setDetails(e.target.value)}
                id="item-details"
                label="Details"
                name="item-details"
                // sx={{ m: 2 }}
              /> */}
            </Box>
          </Grid>
          <Grid item lg={6}>
            {" "}
            {/*//! second column*/}
            <Box
              sx={{
                height: 550,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  m: 4,
                  width: 400,
                  height: 600,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  onChange={(e) => setDetails(e.target.value)}
                  id="item-details"
                  label="Details"
                  name="item-details"
                  // sx={{ m: 2 }}
                />
                <TextField
                  fullWidth
                  id="size"
                  name="size"
                  label="Size"
                  onChange={(e) => setSize(e.target.value)}
                  // sx={{ m: 2 }}
                />
                {/*// ! where i chose in witch list my item to be*/}
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
              </Box>

              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={addItemButton}
                sx={{
                  mr: 4,
                }}
              >
                Add Item
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
