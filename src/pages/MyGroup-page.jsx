import { AccountCircle } from "@mui/icons-material";
import { Autocomplete, Avatar, Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllUsers, getGroupDetails } from "../api";
import ListButton from "../components/Button-list-onMyGroupView";
import PeopleMyList from "../components/People-myList";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import AddAListToGroup from "../components/Modal-addAListIntoGroup";
import { GeneralContext } from "../context/GeneralContext";

export default function MyGroup() {

    const {id} = useParams();
    const [name, setName] = useState('');
    const [wishlists, setWishlists] = useState([]);
    const [people, setPeople] = useState([]);

    const [allUsers, setAllUsers] = useState([]);
    const getGroup = async () => {
      const res = await getGroupDetails(id);
      if (res) {
        setName(res.name);
        setWishlists(res.wishlists);
        setPeople(res.users);
      }
    }
    const { logOut } = useContext(GeneralContext);
    const getUsers = async () => {
      try {
        const res = await getAllUsers(localStorage.getItem("token"));
        if(res) {
          setAllUsers(res);
        }
      } catch (e) {
        if(e.message === "AxiosError: Request failed with status code 403") {
          logOut();
        }
      } 
    }
    useEffect(()=> {
      getGroup();
      getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
    <Box>
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid item lg={12} md={12} sm={12}>
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
          sx={{ my: { xs: 2 }, ml: { xs: 2 }, textTransform: "capitalize" }}
        >
          {name}
        </Typography>
        <Typography variant="h2" gutterBottom sx={{ m: { xs: 2 } }}>
          group
        </Typography>
      </Grid>
      {/* <Grid container sx={{ flexGrow: 1 }}> */}
        <Grid
          item
          lg={6}
          xs={6}
          md={6}
          sx={{
            m: 4,
          }}
        >
          <Typography variant="h4">Wishlists shared with the group</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              m: 2,
            }}
          >
            {wishlists.map(elm => 
              <ListButton idList={elm.id}  name={elm.name} />
            )}
          </Box>
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
          <AddAListToGroup open={open} close={handleClose} />
        </Grid>

        <Grid item lg={6} md={6} sx={6}>
          <Box
            sx={{
              my: 4,
              mx: 4,
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
              <Autocomplete
              freeSolo
              disableClearable
              options={allUsers.map(elm => elm.username)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                {...params}
                label="Enter username"
                placeholder="username"
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
              )}
              />
              {/* <TextField
                id="invite-friends"
                label="Enter username"
                placeholder="username"
                variant="standard"
                sx={{ width: 300 }}
              /> */}
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
            <Box sx={{m: 4}}>
          <Typography variant="h4" gutterBottom>
            Friends who can see
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {
            people.length === 0 ?
            <Typography variant='body1'>Nothing to show here</Typography>
            :
            people.map(elm =>
              <PeopleMyList username={elm.username} avatar={elm.userDetails.avatar} />
            )}
          </Box>
          </Box>
        </Grid>
      {/* </Grid> */}
      <Grid
        item
        lg={12}
        md={12}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Footer sx={{ m: 4 }} />
      </Grid>
    </Grid>
    </Box>
  );
}
