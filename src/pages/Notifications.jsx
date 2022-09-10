import {
  Box,
  ButtonBase,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";

export default function Notifications() {
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
              <ButtonBase
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
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: 'flex-start',
                      ml: 4,
                      mr: 4,
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ m: 2 }}>
                      Title
                    </Typography>{" "}
                    {/* title of the notification */}
                    {"\n"}
                    <Typography variant="body1" gutterBottom sx={{ m: 2 }}>
                      Body of the notification
                    </Typography>
                  </Box>
                </Box>
              </ButtonBase>
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
