import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function ListOfWish ({open, anchorEl, close, name}) {

    const maria = ['birthday', 'christmas']
    const cristi = ['birthday', 'for pc', 'clothing']
    const list = name==='maria'? maria : cristi


    return(
        <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={close}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
    >
        <Stack
        divider={<Divider flexItem />}
        sx={{
            width: 300,
            // borderRadius: 15,
        }}
        >
            {list.map(element => <Button color='inherit' sx={{p:2}}>{element} list</Button> )}
        </Stack>
    </Popover>
    );
}