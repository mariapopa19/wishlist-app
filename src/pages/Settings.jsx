import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";

export default function Settings() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[700]),
    backgroundColor: blue[700],
    "&:hover": {
      backgroundColor: blue[900],
    },
  }));
  const DeleteButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
  }));

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
            display: "flex",
            flexDirection: "column",
            m: 10,
            borderRadius: 10,
            width: 1500,
            // height: 1000,
            boxShadow: 5,
            // backgroundColor: "#f7f7f7",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              m: 3,
              ml: 6,
            }}
            gutterBottom
          >
            Settings
          </Typography>

          <Grid
            container
            sx={{
              my: 6,
              mx: 6,
            }}
          >
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              sx={{
                display: "flex",

                alignItems: "center",
                my: 6,
                mx: 20,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Avatar
              </Typography>
              <Box sx={{ width: 200 }}></Box>
              <Avatar
                alt="avatar"
                src="../assets/profile-test.jpg"
                sx={{
                  width: 150,
                  height: 150,
                }}
              />
              <Box sx={{ width: 200 }}></Box>
              <Stack
                direction="row"
                space={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 6,
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Enter a link to your image
                </Typography>
                <Box sx={{ width: 50 }}></Box>
                <TextField multiline id="avatar-link" variant="outlined" rows={3} sx={{ width: 400 }} />
              </Stack>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              sx={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                my: 6,
                mx: 20,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                First Name
              </Typography>
              <Box sx={{ width: 80 }}></Box>
              <TextField id="outlined-basic" variant="outlined" value='Maria' /> {/*as a default value I add a backend value */}
              <Box sx={{ width: 150 }}></Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Last Name
              </Typography>
              <Box sx={{ width: 80 }}></Box>
              <TextField id="outlined-basic" variant="outlined" value='Popa' />
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              sx={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                my: 6,
                mx: 20,
              }}
            >
              {/* Am sa pun si tara si localitatea tot aici  */}
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Address
              </Typography>
              <Box sx={{ width: 110 }}></Box>
              <TextField
                multiline
                id="outlined-basic"
                rows={4}
                variant="outlined"
                sx={{ width: 500 }}
              />
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              sx={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                my: 6,
                mx: 20,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Email
              </Typography>
              <Box sx={{ width: 140 }}></Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 500 }}
              />
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              sx={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                my: 6,
                mx: 20,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Password
              </Typography>
              <Box sx={{ width: 95 }}></Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 500 }}
              />
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 6,
                mx: 20,
              }}
            >
              <DeleteButton size="large" sx={{ width: 200 }}>
                Delete account
              </DeleteButton>
              <ColorButton size="large" sx={{ width: 100 }}>
                Save
              </ColorButton>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item lg={12} md={12} sm={12}>
        <Footer sx={{ m: 4 }} />
      </Grid>
    </Grid>
  );
}
