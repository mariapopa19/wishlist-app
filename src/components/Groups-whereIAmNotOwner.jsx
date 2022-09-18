import { Box, styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const StyledPaper = styled(Paper)(({ theme }) => ({
    '&:hover': {
        backgroundColor: '#F4F4F4'
    }
}));

export default function Groups({ name, id }) {
    return (
        // <Link to={`${name}`} style={{ textDecoration: 'none' }}>
        <Link to={`group-invited/${id}`} style={{ textDecoration: 'none' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                }}
            >
                <StyledPaper
                    elevation={4}
                    sx={{
                        width: 200,
                        height: 50,
                        p: 4,
                        m: 4,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 15,
                    }}
                >
                    <Typography
                        variant='h5'
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'capitalize',
                        }}
                    >{name}
                    </Typography>
                </StyledPaper>
            </Box>
        </Link>
    );
}