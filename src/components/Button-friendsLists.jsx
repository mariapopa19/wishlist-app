import Button from '@mui/material/Button';
import { useState } from 'react';
import ListOfWish from './List-friends';


export default function ButtonLists({ namePerson, id, wish }) {

    

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Button
                variant='outlined'
                size='large'
                onClick={handleClick}
                sx={{
                    m: 2,
                    p: 2,
                }}
            >
                {namePerson}'s wishlist
            </Button>
            <ListOfWish open={open} anchorEl={anchorEl} close={handleClose} namePerson={namePerson} userId={id} wish={wish} />
        </div>
    );
}