import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function ListButton ({idList, name}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/dashboard/my-list/${name}/${idList}`)
    }
    return(
        <Box  sx={{m:2}}>
        <Button onClick={handleClick} variant='outlined'>
            <Typography variant='h6' sx={{textTransform:'capitalize', p: 2}} >{name} list</Typography>
        </Button>
        </Box>
    );
}