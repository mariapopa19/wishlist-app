import {
    Box,
    Card,
    CardContent,
    Typography,
  } from "@mui/material";
  
  export default function ItemCardDetials({
    name,
    link,
    details,
    quantity,
    size
  }) {
    return (
      <Box>
          <Card sx={{ minWidth: 100, width: 200, m:2 }}>
            <CardContent>
              <Typography variant="h6">{name}</Typography>
              <Typography>Link: {link}</Typography>
              <Typography>Details: {details}</Typography>
              <Typography>Quantity: {quantity}</Typography>
              <Typography>Size: {size}</Typography>
            </CardContent>
            </Card>
      </Box>
      );
  }
  