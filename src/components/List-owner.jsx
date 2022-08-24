import Grid from '@mui/material/Grid';
import NavBar from './NavBar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ListItem from './ListItem';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';


export default function ListOwner() {
    return (
        <Grid container sx={{ flexGrow: 1 }}>
            <Grid item xs={12} md={12} lg={12}>
                <NavBar />
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    borderBottom: '1px solid',
                    borderColor: 'lightgray'
                }}
            >
                <Typography variant='h2' gutterBottom sx={{ m: { xs: 2 } }}>Birthday list</Typography>
            </Grid>
            <Grid item lg={6}>
                <Stack
                    sx={{
                        fontSize: 'h1.fontSize', // !!
                        mt: 2,
                    }}
                >
                    <ListItem label={'dress'} />
                    <ListItem label={'car'} />
                </Stack>
            </Grid>
            <Grid item lg={6}>
                <Typography variant='h4' gutterBottom >Invite friends</Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', width: 300 }} >
                    <AccountCircle fontSize='large' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="invite-friends" label="Enter username" placeholder='@username' variant="standard" fullWidth />
                </Box>
            </Grid>
            <Grid item lg={6}>
                <IconButton
                    sx={{
                        ml: 2,
                    }}
                >
                    <AddCircleRoundedIcon
                        fontSize='large'
                        color='primary'
                    />
                </IconButton>
            </Grid>
        </Grid>
    );
}