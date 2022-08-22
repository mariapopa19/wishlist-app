import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Group() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start'
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    width: 200,
                    height: 50,
                    p: 4,
                    m: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant='h5'
                    sx={{
                        fontWeight: 'bold'
                    }}
                >
                    Friends
                </Typography>
            </Paper>
            <Paper
                elevation={4}
                sx={{
                    width: 200,
                    height: 50,
                    p: 4,
                    m: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant='h5'
                    sx={{
                        fontWeight: 'bold'
                    }}
                >
                    Family
                </Typography>
            </Paper>
        </Box>
    );
}