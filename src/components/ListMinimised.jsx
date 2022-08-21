import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

export default function ListMinimised() {
    return (
        <Card
            sx={{
                ml: 6,
            }}
        >
            <CardContent>
                <FormControl>
                    <Typography variant='h4' sx={{ color: '#0e5c1f' }}>Birthday</Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            label='dress'
                        >
                        </FormControlLabel>
                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            label='car'
                        >
                        </FormControlLabel>
                    </FormGroup>
                </FormControl>
            </CardContent>
        </Card>
    );
}