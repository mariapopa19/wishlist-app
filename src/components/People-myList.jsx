import { Avatar, Box, Typography } from "@mui/material";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

export default function PeopleMyList ({username}) {
    return (
        <Box 
            sx={{
                display: 'flex',
                alignItems: 'center',
                m: 1,
            }}
        >
            <Avatar
                variant='rounded'
                sx={{
                    mr: 2,
                }}
            >
                <AccountBoxOutlinedIcon />
            </Avatar>
            <Typography variant='body' gutterBottom >@{username}</Typography>
        </Box>
    );
}