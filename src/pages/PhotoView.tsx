import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import 'styled-components/macro';
import { Box, Grid, FormControl, InputAdornment, InputLabel, NativeSelect, Typography, TextField } from '@mui/material';
import { getGlobalState, setGlobalState } from '../stateInfo/globalState';
import { Photo } from '../stateInfo/Photo';


export default function PhotoView(): JSX.Element {
    let state = getGlobalState();
    let rollList = state.rollList;
    var rollIdx: number;
    var photoList: Photo[] = [];
    for (let i = 0; i < rollList.length; i++) {
        if (rollList[i].id == state.rollView) {
            rollIdx = i;
            photoList = rollList[i].photos;
            break;
        }
    }
    var photo = photoList[state.photoView];

    const rollName = rollList[rollIdx].name;
    const rollISO = rollList[rollIdx].iso;

    const [description, setDescription] = useState((photo.description == '-')? "" : photo.description);
    const [aperture, setAperture] = useState(photo.aperture);
    const [focal, setFocal] = useState(photo.focalLength);
    const [shutter, setShutter] = useState(photo.shutterSpeed);

    function savePhoto() {
        photoList[state.photoView] = photo;
        rollList[rollIdx].photos = photoList;
        state.rollList = rollList;
        setGlobalState(state);
    }

    useEffect(() => {
        photo.description = description;
        savePhoto();
    },[description]);

    useEffect(() => {
        photo.aperture = aperture;
        savePhoto();
    },[aperture]);

    useEffect(() => {
        photo.shutterSpeed = shutter;
        savePhoto();
    },[shutter]);

    useEffect(() => {
        photo.focalLength = focal;
        savePhoto();
    },[focal]);


    return (
        <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" tw="w-screen">
            <Grid item tw="pt-8">
                <FormControl>
                    <Typography variant='h6' tw="p-4">
                        Description: 
                    </Typography>
                </FormControl>
                <FormControl sx={{ m:1 }}>
                    <TextField multiline maxRows={4} size="small" value={description} 
                        onChange={(evt) => setDescription(evt.target.value)}
                    />
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl>
                    <Typography variant='h6' tw='pt-6 pl-4 pr-3'>
                        Aperture:
                    </Typography>
                </FormControl>
                <FormControl sx={{ m:1 }}>
                    <InputLabel variant="outlined">
                    </InputLabel>
                    <NativeSelect
                        defaultValue={aperture}
                        inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                        onChange: ((evt) => {setAperture(+evt.target.value)})
                        }}
                        >
                        <option value={-1}>not set</option>
                        <option value={1.8}>f/1.8</option>
                        <option value={2.4}>f/2.4</option>
                        <option value={3.5}>f/3.5</option>
                        <option value={5}>f/5</option>
                        <option value={8}>f/8</option>
                        <option value={16}>f/16</option>
                        <option value={32}>f/32</option>
                    </NativeSelect>
                </FormControl>
            </Grid>
            <Grid item tw="pt-4">
                <FormControl>
                    <Typography variant='h6' tw="p-4">
                        Shutter Speed: 
                    </Typography>
                </FormControl>
                <FormControl sx={{ m:1 }}>
                    <TextField 
                        type="number" 
                        size='small' 
                        value={shutter}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">1/</InputAdornment>,
                          }}
                        onChange={(evt) => setShutter(+evt.target.value)}
                    />
                </FormControl>
            </Grid>
            <Grid item tw="pt-4">
                <FormControl>
                    <Typography variant='h6' tw="p-4">
                        Focal Length: 
                    </Typography>
                </FormControl>
                <FormControl sx={{ m:1 }}>
                    <TextField 
                        type="number" 
                        size='small' 
                        value={focal}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">mm</InputAdornment>,
                          }}
                        onChange={(evt) => setFocal(+evt.target.value)}
                    />
                </FormControl>
            </Grid>
        </Grid>
    );
}