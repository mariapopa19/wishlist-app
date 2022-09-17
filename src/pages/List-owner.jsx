import Grid from "@mui/material/Grid";
import NavBar from "../layout/NavBar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ListItem from "../components/ListItem-owner";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import PeopleMyList from "../components/People-myList";
import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import { useParams } from "react-router-dom";
import { getListDetails } from "../api";
import AskItemType from "../components/Modal-askTypeItemToAdd-onWishListOpen";


export default function ListOwner() {
  const { id } = useParams();

  const [name, setName] = useState([]);
  const [items, setItems] = useState([]);
  

  const getDetailsList = async () => {
    const res = await getListDetails(id);
    if (res) {
      setName(res.name);
      setItems(res.itemWishlist);
    }
  };

  useEffect(() => {
    getDetailsList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid item xs={12} md={12} lg={12}>
        <NavBar />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          borderBottom: "1px solid",
          borderColor: "lightgray",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{ m: { xs: 2 }, textTransform: "capitalize" }}
        >
          {name} list
        </Typography>
      </Grid>
      <Grid item lg={6} md={6} sx={{ height: 700 }}>
        <Box
          sx={{
            my: 3,
          }}
        >
          <Stack
            sx={{
              mt: 2,
            }}
          >
            {items.map((elm) => (
              <ListItem
                idList={id}
                idItem={elm.id}
                label={elm.item.name}
                details={elm.item.details}
                quantity={elm.item.quantity}
                link={elm.item.link}
                size={elm.item.size}
                isBought={elm.isBought}
              />
            ))}
          </Stack>
          <IconButton
            onClick={handleOpen}
            sx={{
              ml: 2,
            }}
          >
            <Avatar sx={{ bgcolor: "primary.main", width: 63, height: 60 }}>
              <AddCircleOutlinedIcon fontSize="large" />
            </Avatar>
          </IconButton>
        </Box>
        <AskItemType open={open} close={handleClose} />
      </Grid>
      <Grid item lg={6}>
        <Box
          sx={{
            my: 3,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Invite friends
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <AccountCircle
              fontSize="large"
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              id="invite-friends"
              label="Enter username"
              placeholder="@username"
              variant="standard"
              sx={{ width: 300 }}
            />
            <Button
              variant="outlined"
              sx={{
                textTransform: "uppercase",
                ml: 4,
              }}
            >
              Invite
            </Button>
          </Box>
        </Box>
        <Typography variant="h4" gutterBottom>
          Friends who can see
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <PeopleMyList username="cristi26" />
          <PeopleMyList username="maria19" />
          <PeopleMyList username="adina10" />
        </Box>
      </Grid>
      <Grid
        item
        lg={12}
        md={12}
        xs={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Footer sx={{ m: 4 }} />
      </Grid>
    </Grid>
  );
}
