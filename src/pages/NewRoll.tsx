import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import 'styled-components/macro'
import { Box, Button, Grid, TextField } from '@mui/material';
import { getGlobalState, globalState, setGlobalState } from '../stateInfo/globalState';
import { useNavigate } from "react-router-dom";
import ROUTES from '../config/routes';

function NewRoll(): JSX.Element {
    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [iso, setIso] = useState(null);
    const [size, setSize] = useState(null);

    const [validName, setValidName] = useState(false);
    const [validISO, setValidISO] = useState(false);
    const [validSize, setValidSize] = useState(false);

    useEffect(() => {
        if(name == '') setValidName(false);
        else setValidName(true);
    }, [name])

    useEffect(() => {
        if(typeof(iso) != 'number') setValidISO(false);
        else setValidISO(true);
    }, [iso])

    useEffect(() => {
        if(typeof(size) != 'number') setValidSize(false);
        else setValidSize(true);
    }, [size])

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Box tw="w-screen content-center mt-4 ml-4">
                <h1 tw="text-center text-2xl">Add a new roll!</h1>
            </Box>
            <Box component="form">
                <div tw="mt-5 mb-5">
                    <TextField
                        id="name-input"
                        label="Name"
                        variant="standard"
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        required
                    />
                </div>
                <div tw="mt-5 mb-5">
                    <TextField
                        id="iso-input"
                        label="ISO"
                        type="number"
                        variant="standard"
                        onChange={(event) => {
                            if (event.target.value == '') setIso(null)
                            else setIso(+event.target.value);
                        }}
                        required
                    />
                </div>
                <div tw="mt-5 mb-5">
                    <TextField
                        id="size-input"
                        label="Number of photos"
                        type="number"
                        variant="standard"
                        onChange={(event) => {
                            if (event.target.value == '') setSize(null);
                            else setSize(+event.target.value);
                        }}
                        required
                    />
                </div>
                <div tw="mt-10">
                    {(validName && validISO && validSize)? 
                        <Button variant="contained" onClick={()=>{
                            let state = getGlobalState();
                            state.newRoll(name, iso, size);
                            setGlobalState(state);
                            navigate(ROUTES.rollList);
                        }}>Create
                        </Button> : <Button variant="contained" disabled>Create</Button>}
                    
                </div>
            </Box>
        </Grid>
    )
}

export default NewRoll;