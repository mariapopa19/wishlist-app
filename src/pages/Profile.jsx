import { Box, Grid, Typography } from "@mui/material";
import NavBar from "../layout/NavBar";
import Avatar from "@mui/material/Avatar";
import ListMinimised from "../components/ListMinimised";
import Footer from "../layout/Footer";
import Groups from "../components/Groups-whereIAmNotOwner";
import ButtonAdd from "../components/Button-add-a-list";
import { useEffect, useState } from "react";
import AddItem from "../components/Modal-addItem-onProfileOpen";
import AddAListName from "../components/Modal-addAList";
import { getUser, getUserGroupsMember, getUserGroupsOwner } from "../api";
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import GroupOwner from "../components/Groups-Owner";

export default function Profile() {
  // const {open, setOpen} = useContext(GeneralContext);
  const [openList, setOpenList] = useState(false);
  const [openItem, setOpenItem] = useState(false);

  const handleOpenList = () => {
    setOpenList(true);
  };
  const handleOpenItem = () => setOpenItem(true);

  const handleCloseList = () => setOpenList(false);
  const handleCloseItem = () => setOpenItem(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [avatar, setAvatar] = useState("");

  const [wishlist, setWishlist] = useState([]);

  const { logOut } = useContext(GeneralContext);

  // ! de ce atunci cand foloesc useEffect imi face loop

  const getDetails = async () => {
    try {
      const res = await getUser(localStorage.getItem("token"));
      if (res) {
        setFirstName(res.userDetails.firstName);
        setLastName(res.userDetails.lastName);
        setAvatar(res.userDetails.avatar);
        setDob(
          new Date(res.userDetails.dob).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        );
        setWishlist(res.wishlist);
      } 
    } catch (e) {
      if(e.message === "AxiosError: Request failed with status code 403") {
        logOut();
      }
    }
  };

  const [ownerGroups, setOwnerGroups] = useState([]);
  const getGroupsOwner = async () => {
    try {
      const res = await getUserGroupsOwner(localStorage.getItem("token"))
      if (res) {
        setOwnerGroups(res);
      }
    } catch (e) {
      if(e.message === "AxiosError: Request failed with status code 403") {
        logOut();
      }
    }
  }
  const [memberGroups, setMemberGroups] = useState([]);
  const getGroupsMember = async () => {
    try {
      const res = await getUserGroupsMember(localStorage.getItem("token"))
      if (res) {
        setMemberGroups(res);
      }
    } catch (e) {
      if(e.message === "AxiosError: Request failed with status code 403") {
        logOut();
      }
    }
  }

  useEffect(() => {
    getDetails();
    getGroupsOwner();
    getGroupsMember();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: pe butonul de pe pagina de profil sa poti adauga un item nou in oricare lista
  // TODO: iar pe butonul de pe pagina cu lista sa am o optiune inainte de a accesa modalul sau chiar in modal in care ma lasa sa selectez un item deja existent
  // TODO: dar in acelasi timp cere ca sa am o lista cu toate item-urile pe care le am deja in liste si de acolo sa selectez ce item-uri vreu sa imi fac o lista noua sau vreau sa le adaug intr-o lista deja existenta
  // TODO: in wishlist as putea sa adaug doua butoane, unul cu 'add an existing item' si celalat cu 'add a new one'

  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid item xs={12} md={12} lg={12}>
        <NavBar />
      </Grid>
      <Grid
        item
        sm={12}
        md={8}
        lg={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          alt="profile-test"
          //  src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          src={avatar}
          sx={{
            width: 500,
            height: 500,
            m: 4,
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: { xs: "flex", md: "flex" },
            flexDirection: { md: "column" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ m: { xs: 2 } }}>
            Name
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ m: { xs: 2 } }}>
            {`${lastName} ${firstName}`}
          </Typography>
          <Typography variant="h2" gutterBottom sx={{ m: { xs: 2 } }}>
            Birthday
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ m: { xs: 2 } }}>
            {`${dob}`}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          ml: 5,
          mt: 5,
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ m: { xs: 2 } }}>
          My wishlists
        </Typography>
        <Box>
          <ButtonAdd name={"Add a list"} click={handleOpenList} />
          <AddAListName open={openList} close={handleCloseList} />
        </Box>
        <Box>
          <ButtonAdd name={"Add an item"} click={handleOpenItem} />
          <AddItem open={openItem} close={handleCloseItem} />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyItems: "left",
        }}
      >
        {wishlist.map((elm, i) => <ListMinimised name={elm.name} id={elm.id} />)}
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          ml: 5,
          mt: 5,
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ m: { xs: 2 } }}>
          My groups
        </Typography>
        <ButtonAdd name={"Create a group"} />
      </Grid>
      
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyItems: "left",
          ml: 2,
        }}
      >
        {
          ownerGroups.map(elm => <GroupOwner name={elm.name} id={elm.id} />)
        }
        {/* <GroupOwner name={"friends"} />
        <GroupOwner name={"family"} /> */}
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          ml: 5,
          mt: 5,
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ m: { xs: 2 } }}>
          Groups where I am invited
        </Typography>
      </Grid>
      
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyItems: "left",
          ml: 2,
        }}
      >
        {
          memberGroups.map(elm => <Groups name={elm.name} id={elm.id} />)
        }
        {/* <Groups name={"friends"} />
        <Groups name={"family"} /> */}
      </Grid>
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
  );
  // }
}
