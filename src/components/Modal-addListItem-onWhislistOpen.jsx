import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import { Checkbox, Grid, ListItemText, OutlinedInput } from "@mui/material";
import Select from "@mui/material/Select";
import { useContext, useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { addItem, addItemToWish, getAllItems } from "../api";
import { useParams } from "react-router-dom";
import { GeneralContext } from "../context/GeneralContext";

export default function AddListItem({ open, close }) {

const {id} = useParams();

  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (event, newValue) => {
    setQuantity(newValue);
  };

  function valuetext(value) {
    return `${value}`;
  }
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [details, setDetails] = useState("");
  const [size, setSize] = useState("");

  const { logOut } = useContext(GeneralContext);
  const [items, setItems] = useState([]);

  const getDetails = async () => {
    try {
      const res = await getAllItems(localStorage.getItem("token"));
      if (res) {
        setItems(res);
      }
    } catch (e) {
      if (e.message === "AxiosError: Request failed with status code 403") {
        logOut();
      }
    }
  };

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [itemName, setItemName] = useState([]);
  const handleChangeListName = (event) => {
    const {
      target: { value },
    } = event;
    setItemName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
  // ! de facut separat un modal din care isi poate alege item-urile pe care vrea sa le adauge 
  const addItemButton = async () => {
    const res = await addItem(name, details, link, size, quantity);
     await addItemToWish(res.id, id);
    close();
  };

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
                // required
                fullWidth
                onChange={e => setName(e.target.value)}
                id="item-name"
                label="Name (what is this)"
                name="item-name"
                // sx={{ m: 2 }}
              />
              <TextField
                // required
                fullWidth
                id="item-url"
                label="URL"
                name="item-url"
                onChange={e => setLink(e.target.value)}
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
                    id="item-quantity"
                    name="item-quantity"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
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
              <TextField
                // required
                fullWidth
                multiline
                rows={4}
                maxRows={4}
                onChange={e => setDetails(parseInt(e.target.value))}
                id="item-details"
                label="Details"
                name="item-details"
                // sx={{ m: 2 }}
              />
            </Box>
          </Grid>
          <Grid item lg={6}>
            {" "}
            {/*//! second column*/}
            <Box
              sx={{
                height: 500,
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
                  height: 350,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <TextField
                  fullWidth
                  id="size"
                  name="size"
                  label="Size"
                  onChange={(e) => setSize(e.target.value)}
                  // sx={{ m: 2 }}
                />
                <FormControl sx={{ width: 400, my: 1 }}>
                  <InputLabel>List Name</InputLabel>
                  <Select
                    id="demo-multiple-checkbox"
                    multiple
                    value={itemName}
                    onChange={handleChangeListName}
                    input={<OutlinedInput label="Item Name" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {items.map((name) => (
                      <MenuItem key={name.name} value={name.name}>
                        <Checkbox checked={itemName.indexOf(name.name) > -1} />
                        <ListItemText primary={name.name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* <Box>
                  <InputLabel>
                    If the items are not aviable, give some alternatives
                  </InputLabel>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    id="item-details"
                    name="item-details"
                    // sx={{ m: 2 }}
                  />
                </Box> */}
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
