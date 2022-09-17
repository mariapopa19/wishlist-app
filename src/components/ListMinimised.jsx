import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";

export default function ListMinimised({ name }) {
  return (
    <Card
      sx={{
        ml: 6,
      }}
    >
      <CardContent>
        <FormControl>
          <Typography
            variant="h4"
            sx={{ color: "#0e5c1f", textTransform: "capitalize" }}
          >
            {name}
          </Typography>
        </FormControl>
      </CardContent>
    </Card>
  );
}
