// import FormControl from '@mui/material/FormControl';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import DisableButton from './Disable-Button';



export default function ListItem({ label }) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                ml: 4,
                fontSize: 'h1.fontSize', // !!
                mb: 2,
            }}
        >
            <Typography component='div'>
                <FormControlLabel
                    control={<Checkbox />}
                    label={`${label}`}
                    sx={{
                        fontSize: 'h1.fontSize', // !!
                    }}
                />
            </Typography>
            <DisableButton />

        </Box>
    );
}