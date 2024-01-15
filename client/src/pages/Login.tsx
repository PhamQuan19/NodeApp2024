import { Button, Typography } from '@mui/material';
import React from 'react';


export default function Login(){
    return (
        <>
            <Typography variant='h5' sx={{marginBottom:'10px'}}>Welcome to Note App</Typography>
            <Button variant='outlined'> Login with Google</Button>
        
        </>
    )
}