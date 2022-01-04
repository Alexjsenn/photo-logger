import React from 'react';
import tw from 'twin.macro';
import 'styled-components/macro'
import { NavLink } from 'react-router-dom';
import ROUTES from '../config/routes';
import { Box, Paper, Grid } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import CameraRollOutlinedIcon from '@mui/icons-material/CameraRollOutlined';

const StyledLink = tw(
    NavLink
  )`my-2 h-12 flex justify-center items-center w-full text-gray-light`;

function GridItem(label: string, icon: any, route: string): JSX.Element {
    return (
        <NavLink to={route} tw="flex mt-2">
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item>
                    {icon}
                </Grid>
                <Grid item>
                    <div tw="font-extralight">{label}</div>
                </Grid>
            </Grid>
        </NavLink>
    )
}

export default function BottomNav(): JSX.Element {
    return (
        <Box tw="h-16 fixed bottom-0 left-0 right-0 bg-hunter-green">
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={4}>
                    {GridItem("Home", <HomeOutlinedIcon/>, ROUTES.home)}
                </Grid>
                <Grid item xs={4}>
                    {GridItem("Shoot", <CameraOutlinedIcon/>, ROUTES.shoot)}
                </Grid>
                <Grid item xs={4}>
                    {GridItem("Rolls", <CameraRollOutlinedIcon/>, ROUTES.rollList)}
                </Grid>
            </Grid>
        </Box>
    );
}