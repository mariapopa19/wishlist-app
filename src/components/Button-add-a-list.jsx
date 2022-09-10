import { Button, Typography } from "@mui/material";

export default function ButtonAdd ({name, click}, props) {
    return(
        <Button variant='outlined' color='inherit' onClick={click} sx={{ mx: 4, m: 2, borderRadius: 20, backgroundColor: '#F4F4F4'  }} {...props} ><Typography variant='h6' gutterBottom sx={{ m: { xs: 2 }, fontWeight: 'bold',   }}>{name}</Typography></Button>
    );
}