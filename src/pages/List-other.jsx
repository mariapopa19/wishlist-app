import { Grid } from "@mui/material";
import NavBar from "../layout/NavBar";
import Typography from '@mui/material/Typography';

export default function ListOther ({namePerson, nameList}) {
    return(
        <Grid container>
            <Grid item lg={12}>
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
                <Typography variant='h2' gutterBottom sx={{ my: { xs: 2 }, ml: { xs: 2 }, textTransform: 'capitalize', }}>{namePerson}'s</Typography>
                <Typography variant='h2' gutterBottom sx={{ m: { xs: 2 }, }}>{nameList} list</Typography>

            </Grid>

        </Grid>
    );
}