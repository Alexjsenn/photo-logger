import React from 'react';
import tw from 'twin.macro';
import 'styled-components/macro'
import { Box, Fab, SxProps } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { globalState, getGlobalState } from '../stateInfo/globalState'
import { useNavigate } from "react-router-dom";
import ROUTES from '../config/routes';

function RollList(): JSX.Element {
    let state = getGlobalState();
    let navigate = useNavigate();

    const fabStyle = {
        position: 'absolute',
        bottom: 78,
        right: 16,
      };
      
    return (
        <>
        <Box tw="w-screen content-center mt-4 ml-4">
            <h1 tw="text-xl"> Show a list of all the rolls</h1>
            <p>{JSON.stringify(state)}</p>
        </Box>
        <Fab sx={fabStyle as SxProps} aria-label='add' color='primary' 
            onClick={() => {navigate(ROUTES.newRoll)}}>
            <AddIcon/>
        </Fab>
        </>
    )
}

export default RollList;