import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  styled,
  TextField,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";

export default function GroupPurchaseModal({ open, close }) {
  const { setGroupPurcase } = useContext(GeneralContext);

  const groupMembersHandeler = (e) => {
    setGroupPurcase(e.target.value)
  }
  const SaveButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[700]),
    backgroundColor: blue[700],
    "&:hover": {
      backgroundColor: blue[900],
    },
  }));

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>Group purchase</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter the usernames of the other group members.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="group-member-purchase"
          label="Usernames"
          fullWidth
          variant="standard"
          onChange={groupMembersHandeler}
        />
      </DialogContent>
      <DialogActions>
        <SaveButton onClick={close}>Save</SaveButton>
      </DialogActions>
    </Dialog>
  );
}
