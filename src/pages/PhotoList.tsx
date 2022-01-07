import React from 'react';
import tw from 'twin.macro';
import 'styled-components/macro';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Photo } from '../stateInfo/Photo';
import { getGlobalState, setGlobalState } from '../stateInfo/globalState';
import PhotoIcon from '@mui/icons-material/Photo';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../config/routes';


export default function PhotoList(): JSX.Element {
    const navigate = useNavigate();
    let state = getGlobalState();
    let rollList = state.rollList;
    var idx: number;
    var photoList: Photo[] = [];
    for (let i = 0; i < rollList.length; i++) {
        if (rollList[i].id == state.rollView) {
            idx = i;
            photoList = rollList[i].photos;
            break;
        }
    }

    return(
        <Box sx={{alignContent: 'center'}} tw="w-screen">
            <List>
                {photoList.map((photo) => item(photo, state, navigate))}
            </List>
        </Box>
    )
}

function item(photo: Photo, state: any, navigate: any): JSX.Element {
    let prim: string = '';
    let second: string;
    if (photo.description == '-') {
        prim = (photo.photoNum + 1) + ":";
        second = "Uninitialized";
    } else {
        prim = (photo.photoNum + 1) + ": " + photo.description;
        second = "f" + photo.aperture + " " + photo.focalLength + "mm " + photo.shutterSpeed;
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={() => {
                state.photoView = photo.photoNum;
                setGlobalState(state);
                navigate(ROUTES.photoView);
            }}>
                <ListItemIcon>
                    <PhotoIcon />
                </ListItemIcon>
                <ListItemText primary={prim} secondary={second} />
            </ListItemButton>
        </ListItem>
    )
}

