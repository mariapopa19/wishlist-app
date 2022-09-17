import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { getItemToWish, updateItemBought } from "../api";

export default function ListItem({ label, details, link, size, isBought, quantity, idList, idItem }) {


  const [checked, setChecked] =  useState(false);

  const disableItem = async (e) => {
    setChecked(e.target.checked);
    const res = await getItemToWish(idList, idItem)
    if(res) {
      await updateItemBought(res.id);
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        ml: 4,
        mb: 2,
      }}
    >
      <FormControlLabel
        control={<Checkbox disabled={checked}  onChange={disableItem} />}
        disabled={checked}
        label={
          <Typography component="div" variant="h6">
            {label}
          </Typography>
        }
      />
  
    </Box>
  );
}
