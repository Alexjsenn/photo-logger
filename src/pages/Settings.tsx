import React from 'react';
import tw from 'twin.macro';
import 'styled-components/macro'
import { Button, Grid } from '@mui/material';
import { eraseGlobalState } from '../stateInfo/globalState';

export function Settings(): JSX.Element {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={0}>
            <Grid item xs={4}>
                <Button variant="contained" color='error' tw="m-5" onClick={()=>{
                    eraseGlobalState();}}>Erase and Restore
                </Button>
            </Grid>
            <Grid item xs={8}>
                <p tw="ml-6 mr-6">This will erase all stored information and reset the state of the application.
                    The new state will be initialized with the camera information provided in the
                    configuration file.
                </p>
            </Grid>
            
        </Grid>
    )
}