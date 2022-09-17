import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ListMinimised({ name, id }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`my-list/${name}/${id}`)
  }
  return (
    <Card
      sx={{
        ml: 6,
      }}
      onClick={handleClick}
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
