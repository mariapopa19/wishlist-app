import Grid from '@mui/material/Grid';
import NavBar from './NavBar';

export default function ListOwner () {
    return(
        <Grid container sx={{ flexGrow: 1 }}>
            <Grid item xs={12} md={12} lg={12}>
                <NavBar />
            </Grid>
        </Grid>
    );
}