import { Grid } from "@mui/material";
import NavBar from "../layout/NavBar";
import Typography from "@mui/material/Typography";
import ButtonLists from "../components/Button-friendsLists";
import Footer from "../layout/Footer";
import { useParams } from "react-router-dom";
import { getGroupDetails, getUser } from "../api";
import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../context/GeneralContext";

export default function GroupPage() {
  const { logOut } = useContext(GeneralContext);

  const logVerify = async () => {
    try {
      await getUser(localStorage.getItem("token"));
    } catch (e) {
      if (e.message === "AxiosError: Request failed with status code 403") {
        logOut();
      }
    }
  };
  
  const { id } = useParams();

  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [allWishlists, setAllWishlists] = useState([]);

  const getGroup = async () => {
    const res = await getGroupDetails(id);
    if (res) {
      setName(res.name);
      setUsers(res.users);
      setAllWishlists(res.wishlists);
    }
  };

  useEffect(() => {
    logVerify();
    getGroup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid container>
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
      <Grid
        item
        lg={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          m: 2,
          height: 700,
        }}
      >
        {users.map((elm) => (
          <ButtonLists
            key="ceva"
            namePerson={elm.userDetails.firstName}
            id={elm.id}
            wish={allWishlists}
          />
        ))}
        {/* <ButtonLists name={'maria'} />
                <ButtonLists name={'cristi'} /> */}
      </Grid>
      <Grid
        item
        lg={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Footer />
      </Grid>
    </Grid>
  );
}
