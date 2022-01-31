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
import Divider from "@mui/material/Divider";
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
import { Lens } from "../stateInfo/Lens";
import { Camera } from "../stateInfo/Camera";

export default function NestedList() {
  let navigate = useNavigate();
  let state = getGlobalState();
  let cameras = state.cameraList;
  let lenses = state.lensList;
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
              {state.appName}
            </ListSubheader>
          }
        >
          <Divider variant="middle" />
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
                sx={{ pl: 8 }}
                onClick={() => {
                  navigate(ROUTES.newCamera);
                }}
              >
                <ListItemIcon>
                  <AddCircleOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Add New" />
              </ListItemButton>
              {cameras.map((camera) => itemCamera(camera, state, navigate))}
            </List>
          </Collapse>
          <Divider variant="middle" />
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
                sx={{ pl: 8 }}
                onClick={() => {
                  navigate(ROUTES.newLens);
                }}
              >
                <ListItemIcon>
                  <AddCircleOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Add New" />
              </ListItemButton>
              {lenses.map((lens) => itemLens(lens, state, navigate))}
            </List>
          </Collapse>
          <Divider variant="middle" />
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
                sx={{ pl: 8 }}
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
          <Divider variant="middle" />
        </List>
      </Box>
    </>
  );

  function itemCamera(camera: Camera, state: any, navigate: any): JSX.Element {
    let prim = camera.brand + " " + camera.model;
    let second = camera.name;
    return (
      <ListItemButton
        sx={{ pl: 8 }}
        // onClick={() => {
        //   state.cameraView = camera.id;
        //   state.cameraName = camera.name;
        //   setGlobalState(state);
        //   navigate(ROUTES.photoList);
        // }}
      >
        <ListItemText primary={prim} secondary={second} />
      </ListItemButton>
    );
  }
  function itemFilmRoll(roll: Roll, state: any, navigate: any): JSX.Element {
    let prim = roll.name;
    let second = "ISO: " + roll.iso + ", Size: " + roll.size;
    return (
      <ListItemButton
        sx={{ pl: 8 }}
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
  function itemLens(lens: Lens, state: any, navigate: any): JSX.Element {
    let focalLengt =
      lens.lengthMin == lens.lengthMax
        ? lens.lengthMin + "mm"
        : lens.lengthMin + "-" + lens.lengthMax + "mm";
    let prim =
      lens.brand +
      " " +
      lens.mount +
      " " +
      focalLengt +
      "  f/" +
      lens.aperture[0];
    let second = lens.name;
    return (
      <ListItemButton
        sx={{ pl: 8 }}
        // onClick={() => {
        //   state.lensView = lens.id;
        //   state.lensName = lens.name;
        //   setGlobalState(state);
        //   navigate(ROUTES.photoList);
        // }}
      >
        <ListItemText primary={prim} secondary={second} />
      </ListItemButton>
    );
  }
}
