import React from 'react';
import tw from 'twin.macro';
import 'styled-components/macro'
import { Box, Fab, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SxProps } from '@mui/material';
import CameraRollOutlinedIcon from '@mui/icons-material/CameraRollOutlined';
import AddIcon from '@mui/icons-material/Add';
import { globalState, getGlobalState } from '../stateInfo/globalState'
import { useNavigate } from "react-router-dom";
import ROUTES from '../config/routes';
import { Roll } from '../stateInfo/Roll';

function RollList(): JSX.Element {
    let navigate = useNavigate();

    let state = getGlobalState();
    let rolls = state.rollList;

    const fabStyle = {
        position: 'absolute',
        bottom: 78,
        right: 16,
      };
      
    return (
        <>
        <Box sx={{alignContent: 'center'}} tw="w-screen">
            <List>
                {rolls.map((roll) => item(roll))}
            </List>
        </Box>
        <Fab sx={fabStyle as SxProps} aria-label='add' color='primary' 
            onClick={() => {
                navigate(ROUTES.newRoll)
                }}>
            <AddIcon/>
        </Fab>
        </>
    )
}

function item(roll: Roll): JSX.Element {
    let prim = roll.name;
    let second = "iso: " + roll.iso + ", size: " + roll.size;
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <CameraRollOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={prim} secondary={second} />
            </ListItemButton>
        </ListItem>
    )
}

export default RollList;