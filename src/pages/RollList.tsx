import React from "react";
import tw from "twin.macro";
import "styled-components/macro";
import {
  Box,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
} from "@mui/material";
import CameraRollOutlinedIcon from "@mui/icons-material/CameraRollOutlined";
import AddIcon from "@mui/icons-material/Add";
import {
  globalState,
  getGlobalState,
  setGlobalState,
} from "../stateInfo/globalState";
import { useNavigate } from "react-router-dom";
import ROUTES from "../config/routes";
import { Roll } from "../stateInfo/Roll";

function RollList(): JSX.Element {
  let navigate = useNavigate();

  let state = getGlobalState();
  let rolls = state.rollList;

  const fabStyle = {
    position: "absolute",
    bottom: 78,
    right: 16,
  };

  return (
    <>
      <Box sx={{ alignContent: "center" }} tw="w-screen">
        <List>{rolls.map((roll) => item(roll, state, navigate))}</List>
      </Box>
      <Fab
        sx={fabStyle as SxProps}
        aria-label="add"
        color="primary"
        onClick={() => {
          navigate(ROUTES.newRoll);
        }}
      >
        <AddIcon />
      </Fab>
    </>
  );
}

function item(roll: Roll, state: any, navigate: any): JSX.Element {
  let prim = roll.name;
  let second = "iso: " + roll.iso + ", size: " + roll.size;
  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => {
          state.rollView = roll.id;
          state.rollName = roll.name;
          setGlobalState(state);
          navigate(ROUTES.photoList);
        }}
      >
        <ListItemIcon>
          <CameraRollOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={prim} secondary={second} />
      </ListItemButton>
    </ListItem>
  );
}

export default RollList;
