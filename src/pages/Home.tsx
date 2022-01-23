import * as React from "react";
import {
  globalState,
  getGlobalState,
  setGlobalState,
} from "../stateInfo/globalState";
import tw from "twin.macro";
import "styled-components/macro";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import CameraOutlinedIcon from "@mui/icons-material/CameraOutlined";
import CameraRollOutlinedIcon from "@mui/icons-material/CameraRollOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import ROUTES from "../config/routes";
import { Roll } from "../stateInfo/Roll";

export default function NestedList() {
  let navigate = useNavigate();
  let state = getGlobalState();
  let rolls = state.rollList;

  const [openCameras, setOpenCameras] = React.useState(false);
  const handleClickCameras = () => {
    setOpenCameras(!openCameras);
  };

  const [openLenses, setOpenLenses] = React.useState(false);
  const handleClickLenses = () => {
    setOpenLenses(!openLenses);
  };

  const [openFilmRolls, setOpenFilmRolls] = React.useState(false);
  const handleClickFilmRolls = () => {
    setOpenFilmRolls(!openFilmRolls);
  };

  return (
    <>
      <Box sx={{ alignContent: "center" }} tw="w-screen">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Photo Logger v-0.2
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleClickCameras}>
            <ListItemIcon>
              <PhotoCameraOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Cameras" />
            {openCameras ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openCameras} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  navigate(ROUTES.newRoll);
                }}
              >
                <ListItemIcon>
                  <AddCircleOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Add New" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickLenses}>
            <ListItemIcon>
              <CameraOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Lenses" />
            {openLenses ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openLenses} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  navigate(ROUTES.newLens);
                }}
              >
                <ListItemIcon>
                  <AddCircleOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Add New" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickFilmRolls}>
            <ListItemIcon>
              <CameraRollOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Film Rolls" />
            {openFilmRolls ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openFilmRolls} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  navigate(ROUTES.newRoll);
                }}
              >
                <ListItemIcon>
                  <AddCircleOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Add New" />
              </ListItemButton>
              {rolls.map((roll) => itemFilmRoll(roll, state, navigate))}
            </List>
          </Collapse>
        </List>
      </Box>
    </>
  );

  function itemFilmRoll(roll: Roll, state: any, navigate: any): JSX.Element {
    let prim = roll.name;
    let second = "ISO: " + roll.iso + ", Size: " + roll.size;
    return (
      <ListItemButton
        sx={{ pl: 4 }}
        onClick={() => {
          state.rollView = roll.id;
          state.rollName = roll.name;
          setGlobalState(state);
          navigate(ROUTES.photoList);
        }}
      >
        <ListItemText primary={prim} secondary={second} />
      </ListItemButton>
    );
  }
}
