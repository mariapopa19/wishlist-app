import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { addItemToWish } from "../api";

export default function ItemCard({
  name,
  link,
  details,
  quantity,
  size,
  idList,
  idItem,
}) {
  const [show, setShow] = useState(true);
  const handleClick = async () => {
    await addItemToWish(idList, idItem);
    setShow(false);
  };
  return (
    <Box>
      {show ? (
        <Card>
          <CardContent>
            <Typography variant="h6">{name}</Typography>
            <Typography>Link: {link}</Typography>
            <Typography>Details: {details}</Typography>
            <Typography>Quantity: {quantity}</Typography>
            <Typography>Size: {size}</Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleClick}>Add to list</Button>
          </CardActions>
        </Card>
      ) : null}
    </Box>
  );
}
