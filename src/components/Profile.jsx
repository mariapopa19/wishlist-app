import { Grid, Paper } from "@mui/material";
import NavBar from "./NavBar";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';


export default function Profile() {
    return (
        <Grid container sx={{ flexGrow: 1 }}>
            <Grid item xs={12} md={12} lg={12}>
                <NavBar />
            </Grid>
            <Grid item sm={6} md={6} lg={6}>
                {/* <Paper
                    sx={{
                        height: 140,
                        width: 800,
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                /> */}
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

        </Grid>
    );
}