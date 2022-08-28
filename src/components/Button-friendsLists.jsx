import Button from '@mui/material/Button';

export default function ButtonLists ({name}) {
    return(
         <Button 
         variant='outlined'
         size='large'
         sx={{
            m: 2,
            p: 2,
        }}
         >
            {name}'s wishlist
        </Button>
    );
}