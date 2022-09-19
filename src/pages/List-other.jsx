import { FormGroup, Grid } from "@mui/material";
import NavBar from "../layout/NavBar";
import Typography from "@mui/material/Typography";
import ListItemOther from "../components/ListItem-other";
// import { getGroupDetails, getListDetails } from "../api";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { getUser } from "../api";

export default function ListOther() {
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

  useEffect(()=>{
    logVerify();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {id, namePerson, nameList} = useParams();
  
  
  // const getList = async () => {
  //   const res = await getListDetails(id);
  // }

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
          {namePerson}'s
        </Typography>
        <Typography variant="h2" gutterBottom sx={{ m: { xs: 2 }, textTransform: 'lowercase' }}>
          {nameList} list
        </Typography>
      </Grid>
      <Grid
        item
        lg={6}
        sx={{
          m: 3,
        }}
      >
        <FormGroup>
          <ListItemOther name={"jeans"} />
          <ListItemOther name={"ring"} />
        </FormGroup>
      </Grid>
    </Grid>
  );
}
