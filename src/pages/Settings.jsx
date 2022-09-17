import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import { getUser, updateUser } from "../api";
import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Settings() {
  const { logOut } = useContext(GeneralContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate();

  const [avatar, setAvatar] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pass, setPass] = useState("");

  const getDetails = async () => {
    try {
      const res = await getUser(localStorage.getItem("token"));
      if (res) {
        setAvatar(res.userDetails.avatar);
        setFirstName(res.userDetails.firstName);
        setLastName(res.userDetails.lastName);
        setAddress(res.userDetails.userAddress.completeAddress);
        setUser(res.username);
        setPhone(res.userDetails.phone);
        setCity(res.userDetails.userAddress.city);
        setCountry(res.userDetails.userAddress.country);
      }
    } catch (e) {
      if (e.message === "AxiosError: Request failed with status code 403") {
        logOut();
      }
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const saveButton = async () => {
    await updateUser(
      localStorage.getItem("token"),
      avatar,
      user,
      pass,
      firstName,
      lastName,
      phone,
      city,
      country,
      address
    );
    navigate("/dashboard/settings");
  };

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
              <Box sx={{ width: 150 }}></Box>
              <Avatar
                alt="avatar"
                src={avatar}
                sx={{
                  width: 170,
                  height: 170,
                }}
              />
              <Box sx={{ width: 150 }}></Box>
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
                <Link href="https://imgbb.com/upload" underline="none">
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Enter a link to your image
                  </Typography>
                  <Typography variant="caption">
                    If you have a local image, click here
                  </Typography>
                </Link>
                <Box sx={{ width: 20 }}></Box>
                <TextField
                  multiline
                  onChange={(e) => setAvatar(e.target.value)}
                  id="avatar-link"
                  variant="outlined"
                  rows={3}
                  value={avatar}
                  sx={{ width: 400 }}
                />
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
              <TextField
                onChange={(e) => setFirstName(e.target.value)}
                id="outlined-basic"
                variant="outlined"
                value={firstName}
              />{" "}
              {/*as a default value I add a backend value */}
              <Box sx={{ width: 150 }}></Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Last Name
              </Typography>
              <Box sx={{ width: 80 }}></Box>
              <TextField
                onChange={(e) => setLastName(e.target.value)}
                id="outlined-basic"
                variant="outlined"
                value={lastName}
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
              {/* Am sa pun si tara si localitatea tot aici  */}
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Address
              </Typography>
              <Box sx={{ width: 110 }}></Box>
              <TextField
                multiline
                onChange={(e) => setAddress(e.target.value)}
                id="outlined-basic"
                rows={4}
                value={address}
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
                City
              </Typography>
              <Box sx={{ width: 150 }}></Box>
              <TextField
                onChange={(e) => setCity(e.target.value)}
                id="outlined-basic"
                variant="outlined"
                value={city}
              />{" "}
              {/*as a default value I add a backend value */}
              <Box sx={{ width: 150 }}></Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Country
              </Typography>
              <Box sx={{ width: 120 }}></Box>
              <TextField
                onChange={(e) => setCountry(e.target.value)}
                id="outlined-basic"
                variant="outlined"
                value={country}
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
                Phone
              </Typography>
              <Box sx={{ width: 140 }}></Box>
              <TextField
                onChange={(e) => setPhone(e.target.value)}
                id="outlined-basic"
                variant="outlined"
                value={phone}
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
                Username
              </Typography>
              <Box sx={{ width: 140 }}></Box>
              <TextField
                onChange={(e) => setUser(e.target.value)}
                id="outlined-basic"
                variant="outlined"
                value={user}
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  New Password
                </Typography>
                <Typography variant="caption">For a new password</Typography>
              </Box>
              <Box sx={{ width: 95 }}></Box>
              <TextField
                onChange={(e) => setPass(e.target.value)}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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
              <ColorButton
                size="large"
                onClick={saveButton}
                sx={{ width: 100 }}
              >
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
