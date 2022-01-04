import React from 'react';
import tw from 'twin.macro';
import 'styled-components/macro'
import { Box } from '@mui/material';

function RollList(): JSX.Element {
    return (
        <Box tw="w-screen content-center mt-4 ml-4">
            <h1 tw="text-xl"> Show a list of all the rolls</h1>
        </Box>
    )
}

export default RollList;