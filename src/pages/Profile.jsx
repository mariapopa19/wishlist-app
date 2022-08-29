import { Box, Grid, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Avatar from '@mui/material/Avatar';
import ListMinimised from "../components/ListMinimised";
import Footer from "../components/Footer";
import Groups from "../components/Groups";


export default function Profile() {
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
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Avatar
                    alt='profile-test'
                    //  src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    src='../assets/profile-test.jpg'
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
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left'
                }}
            >
                <Box sx={{ width: '100%', display: { xs: 'flex', md: 'flex' }, flexDirection: { md: 'column' }, alignItems: { xs: 'center', md: 'flex-start' } }}>
                    <Typography variant="h2" gutterBottom sx={{ m: { xs: 2 } }}>Name</Typography>
                    <Typography variant="h4" gutterBottom sx={{ m: { xs: 2 } }}>Popa Maria</Typography>
                    <Typography variant="h2" gutterBottom sx={{ m: { xs: 2 } }}>Birthday</Typography>
                    <Typography variant="h4" gutterBottom sx={{ m: { xs: 2 } }}>19-01-2001</Typography>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start'
                }}
            >
                <Typography variant='h2' gutterBottom sx={{ m: { xs: 2 } }}>My wishlists</Typography>
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyItems: 'left'
                }}
            >
                <ListMinimised />
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start'
                }}
            >
                <Typography variant='h2' gutterBottom sx={{ m: { xs: 2 } }}>My gruops</Typography>
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyItems: 'left',
                }}
            >
                <Groups name={'friends'} />
                <Groups name={'family'} />
            </Grid>
            <Grid item lg={12} md={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Footer sx={{ m: 4 }} />
            </Grid>
        </Grid>
    );
}