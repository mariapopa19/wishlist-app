import { Grid } from "@mui/material";
import NavBar from "./NavBar";
import Typography from '@mui/material/Typography';
import ButtonLists from "./Button-friendsLists";

export default function GroupPage ( {name} ) {
 return(
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
                <Typography variant='h2' gutterBottom sx={{ m: { xs: 2 }, textTransform: 'capitalize', }}>{name}</Typography>
                <Typography variant='h2' gutterBottom sx={{ m: { xs: 2 },  }}>group</Typography>

            </Grid>
            <Grid item lg={6}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <ButtonLists name={'Maria'} />
                <ButtonLists name={'Cristi'} />

            </Grid>

    </Grid> 
 );
}