import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import { Grid } from '@mui/material';
import Select from '@mui/material/Select';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

export default function AddListItem({ open, close }) {

    const [quantity, setQuantity] = useState(1);

    const handleChangeQuantity = (event, newValue) => {
        setQuantity(newValue);
      };

    function valuetext(value) {
        return `${value}`;
    }

    const [size, setSize] = useState('');

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    return (
        <Modal
            open={open}
            onClose={close}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 1000,
                    height: 600,
                    background: 'white',
                    borderRadius: 5,
                    boxShadow: 24,
                }}
            >
                <Grid container >
                    <Grid item lg={6} >
                        <Box
                            sx={{
                                m: 4,
                                width: 400,
                                height: 500,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly'
                            }}
                        >
                            <TextField
                                required
                                fullWidth
                                id="item-name"
                                label="Name (what is this)"
                                name="item-name"
                            // sx={{ m: 2 }}
                            />
                            <TextField
                                required
                                fullWidth
                                id="item-url"
                                label="URL"
                                name="item-url"
                            // sx={{ m: 2 }}
                            />
                            <Box>
                                <InputLabel sx={{ width: '100%' }}>Quantity</InputLabel>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >

                                    <TextField
                                        required
                                        id="item-quantity"
                                        name="item-quantity"
                                        value={quantity}
                                        sx={{ width: 100 }}
                                    />
                                    <Box sx={{ width: 260 }}>
                                        <Slider
                                            defaultValue={1}
                                            aria-label="Default"
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                            min={1}
                                            max={50}
                                            onChange={handleChangeQuantity}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            <TextField
                                required
                                fullWidth
                                multiline
                                rows={4}
                                maxRows={4}
                                id="item-details"
                                label="Details"
                                name="item-details"
                            // sx={{ m: 2 }}
                            />
                        </Box>
                    </Grid>
                    <Grid item lg={6}> {/*//! second column*/}
                        <Box
                            sx={{
                                height: 500,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box
                                sx={{
                                    m: 4,
                                    width: 400,
                                    height: 350,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly'
                                }}
                            >
                                <FormControl sx={{ minWidth: 80 }}>
                                    <InputLabel id="demo-simple-select-autowidth-label">Size</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={size}
                                        onChange={handleChange}
                                        autoWidth
                                        label="Size"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'s'}>Small</MenuItem>
                                        <MenuItem value={'m'}>Medium</MenuItem>
                                        <MenuItem value={'l'}>Large</MenuItem>

                                    </Select>
                                </FormControl>
                                <Box>
                                    <InputLabel>If the items are not aviable, give some alternatives</InputLabel>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={6}
                                        id="item-details"
                                        name="item-details"
                                    // sx={{ m: 2 }}
                                    />
                                </Box>
                            </Box>
                            <Button
                                variant='contained'
                                color='primary'
                                size='large'
                                sx={{
                                    mr: 4
                                }}
                            >Add Item</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}