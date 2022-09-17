import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import { createUser } from "../api";

const theme = createTheme();

function SignUp() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [user, setUser] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [detailedAddress, setDetailedAddress] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit =  async (event) => {
    event.preventDefault();
    const res = await createUser(user, pass, email, firstName, lastName, phone, dob, city, country, detailedAddress);

    if(res){
      navigate('/')
    }
  
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                  fullWidth
                  id="date"
                  label="Birthday"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  required
                  fullWidth
                  id="phone"
                  label="Phone number"
                  name="phoneNo"
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => {
                    setDetailedAddress(e.target.value);
                  }}
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address-line1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  required
                  fullWidth
                  // select
                  id="country"
                  label="Country"
                  name="country"
                  autoComplete="country"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
