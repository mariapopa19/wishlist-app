import Grid from '@mui/material/Grid';
import NavBar from './NavBar';
import Typography from '@mui/material/Typography';

export default function ListOwner () {
    return(
        <Grid container sx={{ flexGrow: 1 }}>
            <Grid item xs={12} md={12} lg={12}>
                <NavBar />
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start'
                }}
            >
                <Typography variant='h2' gutterBottom sx={{ m: { xs: 2 } }}>Birthday</Typography>
            </Grid>
        </Grid>
    );
}