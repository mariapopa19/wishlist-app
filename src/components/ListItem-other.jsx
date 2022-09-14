import {} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { useContext, useState } from "react";
import GroupPurchaseModal from "./Modal-groupPurchase";
import { GeneralContext } from "../context/GeneralContext";

export default function ListItemOther({ name }) {
  const { groupPurchase } = useContext(GeneralContext);

  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setShow(true);
  };

  const PurchasedButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[700]),
    backgroundColor: blue[700],
    "&:hover": {
      backgroundColor: blue[900],
    },
  }));

  const purchasePress = () => {
    if (checked) {
      handleOpen();
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          ml: 4,
          mb: 2,
        }}
      >
        <FormControlLabel
          control={<Checkbox />}
          label={<Typography variant="h6">{name}</Typography>}
        />
        {show ? null : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <PurchasedButton onClick={purchasePress}>Purchase</PurchasedButton>

            <Box sx={{ width: 50 }}> </Box>
            <FormControlLabel
              control={
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label={<Typography variant="h6">group purchase</Typography>}
            />
          </Box>
        )}
        <GroupPurchaseModal open={open} close={handleClose} />
      </Box>
      {show ? (
        <Box
          sx={{
              ml: 4,
              mb: 2,
            }}
        >
          {/* trebuie sa fac sa iau datele in textfield si sa le afisez aici  */}
          <Typography>Purchased by @me {groupPurchase}</Typography>
        </Box>
      ) : null}
            <Box
              sx={{
                ml: 4,
                mb: 2,
                boxShadow: 3,
                borderRadius: 5,
                width: 700,
                height: 300,
              }}
            >
              <Box
                sx={{
                  m: 6,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">URL: </Typography>
                  <Box sx={{ width: 120 }}></Box>
                  <Typography>the site link</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">Quantity:</Typography>
                  <Box sx={{ width: 80 }}></Box>
                  <Typography>The quantity</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">Size:</Typography>
                  <Box sx={{ width: 125 }}></Box>
                  <Typography>if needed</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">Details:</Typography>
                  <Box sx={{ width: 100 }}></Box>
                  <Typography>the details</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">Other options:</Typography>
                  <Box sx={{ width: 50 }}></Box>
                  <Typography>the urls</Typography>
                </Box>
              </Box>
            </Box>
    </>
  );
}
