import Button from '@mui/material/Button';
import { useState } from 'react';


export default function DisableButton() {

    const [disableButton, setDisableButton] = useState(false);

    return (
        <Button
            disabled={disableButton}
            onClick={() => setDisableButton(true)}
            variant='contained'
            color='inherit'
            sx={{
                textTransform: 'uppercase',
                width: 80,
                height: 35
            }}
        >
            Disable
        </Button>
    );
}