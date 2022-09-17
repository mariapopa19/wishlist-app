import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import { singIn } from "../api";
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";


const theme = createTheme();

export default function SignIn() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const [show, setShow] = React.useState(false);

  const {token, setToken} = useContext(GeneralContext);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShow(false);
    try {
    const res = await singIn(email, pass);
    
    if (res.token) {
      setToken(res.token);
      localStorage.setItem('token', res.token)
      navigate('/dashboard');
    }
  } catch (e) {
    if(e.message === "Request failed with status code 500") {
      setShow(true);
    }
  }
  };

  React.useEffect(()=>{
    if(!token) {
      navigate('/');
    }
  }, [token, navigate]);

  // todo: salvat token-ul in session storage sau local storage si time stamp-ul si sa verific daca a trecut o ora sau sa il fac valabil o ora, dupa sa il dezactivez si automat sa interzic accesul la dashboard

  // todo: https://javascript.plainenglish.io/basic-react-login-using-external-api-e33322e480cd - site cu login implementat

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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(e) => setPass(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
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
              id="password"
              autoComplete="current-password"
            />
            {show ? (<Typography variant='body2' sx={{
              color: 'red',
            }} >Incorrect email or password</Typography>) : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Box sx={{ width: 100 }}></Box>
              </Grid>
              <Grid item>
                <Link to="signup">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
