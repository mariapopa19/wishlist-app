import { Grid } from "@mui/material";
import NavBar from "../layout/NavBar";
import Typography from '@mui/material/Typography';
import ButtonLists from "../components/Button-friendsLists";
import Footer from "../layout/Footer";

export default function GroupPage({ name }) {
    return (
        <Grid container>
            <Grid item lg={12} md={12} sm={12}>
                <NavBar />
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    borderBottom: '1px solid',
                    borderColor: 'lightgray',
                }}
            >
                <Typography variant='h2' gutterBottom sx={{ my: { xs: 2 }, ml: { xs: 2 }, textTransform: 'capitalize', }}>{name}</Typography>
                <Typography variant='h2' gutterBottom sx={{ m: { xs: 2 }, }}>group</Typography>

            </Grid>
            <Grid item lg={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    m: 2,
                    height: 700,
                }}
            >
                <ButtonLists name={'maria'} />
                <ButtonLists name={'cristi'} />

            </Grid>
            <Grid item lg={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Footer />
            </Grid>

        </Grid>
    );
}