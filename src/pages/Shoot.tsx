import React from 'react';
import tw from 'twin.macro';
import 'styled-components/macro'
import { Box } from '@mui/material';

function Shoot(): JSX.Element {
    return (
        <Box tw="w-screen content-center mt-4 ml-4">
            <h1 tw="text-xl"> Show current photo info</h1>
        </Box>
    )
}

export default Shoot;