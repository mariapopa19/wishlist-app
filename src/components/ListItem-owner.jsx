import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DisableButton from "./Disable-Button";

export default function ListItem({ label }) {
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
        control={<Checkbox />}
        label={
          <Typography component="div" variant="h6">
            {label}
          </Typography>
        }
      />

      <DisableButton />
    </Box>
  );
}
