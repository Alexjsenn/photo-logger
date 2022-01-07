import React from 'react';
import tw from 'twin.macro';
import 'styled-components/macro';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Photo } from '../stateInfo/Photo';

/*
export default function PhotoList(): JSX.Element {
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="left">Calories</TableCell>
                        <TableCell align="left">Fat&nbsp;(g)</TableCell>
                        <TableCell align="left">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="left">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


function item(photo: Photo): JSX.Element {
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
}*/

