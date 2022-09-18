import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import { Grid } from "@mui/material";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { addItem, addItemToWish } from "../api";
import { useParams } from "react-router-dom";

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
                <TextField
                  fullWidth
                  id="size"
                  name="size"
                  label="Size"
                  onChange={(e) => setSize(e.target.value)}
                  // sx={{ m: 2 }}
                />
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
