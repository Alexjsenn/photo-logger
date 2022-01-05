import React from 'react';
import tw from 'twin.macro';
import 'styled-components/macro'
import { Box, Grid, TextField } from '@mui/material';

function NewRoll(): JSX.Element {
    let name = '';
    let iso: number = null;
    let size: number = null;
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Box tw="w-screen content-center mt-4 ml-4">
                <h1 tw="text-center text-2xl">Add a new roll!</h1>
            </Box>
            <Box component="form">
                <div>
                    <TextField
                        id="name-input"
                        label="Name"
                        variant="standard"
                        onChange={(event) => {
                            name = event.target.value;
                        }}
                        required
                    />
                </div>
                <div>
                    <TextField
                        id="iso-input"
                        label="ISO"
                        type="number"
                        variant="standard"
                        onChange={(event) => {
                            iso = +event.target.value;
                        }}
                        required
                    />
                </div>
                <div>
                    <TextField
                        id="size-input"
                        label="Number of photos"
                        type="number"
                        variant="standard"
                        onChange={(event) => {
                            size = +event.target.value;
                        }}
                        required
                    />
                </div>
            </Box>
        </Grid>
    )
}

export default NewRoll;