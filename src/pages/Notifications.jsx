import {
  Box,
  ButtonBase,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useContext } from "react";
import { getUser } from "../api";
import { GeneralContext } from "../context/GeneralContext";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";

export default function Notifications() {
  const { logOut, notifications } = useContext(GeneralContext);

  const logVerify = async () => {
    try {
      await getUser(localStorage.getItem("token"));
    } catch (e) {
      if (e.message === "AxiosError: Request failed with status code 403") {
        logOut();
      }
    }
  };


  useEffect(() => {
    logVerify();
    console.log(notifications);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid item xs={12} md={12} lg={12}>
        <NavBar />
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
        <Box
          sx={{
            m: 10,
            borderRadius: 10,
            width: 1500,
            height: 1000,
            boxShadow: 3,
            backgroundColor: "#f7f7f7",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              m: 3,
            }}
            gutterBottom
          >
            Notifications
          </Typography>
          <Divider variant="middle" flexItem />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack>
              {/* // ! put a map of notifications */}
              { notifications.map(elm => (<ButtonBase
                sx={{
                  borderRadius: 3,
                  m: 2,
                  width: 1000,
                  height: 130,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 3,
                    width: 1000,
                    height: 130,
                    boxShadow: 5,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: 'center',
                      ml: 4,
                      mr: 4,
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ m: 2 }}>
                    {elm.details}
                    </Typography>
                  </Box>
                </Box>
              </ButtonBase>))}
            </Stack> 
          </Box>
        </Box>
      </Grid>
      <Grid item lg={12} md={12} sm={12}>
        <Footer sx={{ m: 4 }} />
      </Grid>
    </Grid>
  );
}
