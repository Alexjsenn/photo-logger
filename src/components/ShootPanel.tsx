import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import "styled-components/macro";
import { styled } from "@mui/material/styles";
// import { NavLink } from "react-router-dom";
// import ROUTES from "../config/routes";
import {
  Box,
  Paper,
  Grid,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Slider,
} from "@mui/material";
import MuiInput from "@mui/material/Input";
import { getGlobalState } from "../stateInfo/globalState";

// #, desc, ev, sp, ap, iso, lens, length, geo,
export default function ShootPanel(): JSX.Element {
  let state = getGlobalState();
  let activeCamera = 0;
  let activeLens = 0;
  let activeRoll = 0;

  const [photoDescription, setPhotoDescription] = useState("");

  const [photoEV, setPhotoEV] = React.useState<number | null>(0);
  const EVItems = [-3, -2, -1, 0, 1, 2, 3].map((number) => (
    <ToggleButton value={number}>{number}</ToggleButton>
  ));
  const handlePhotoEV = (
    event: React.MouseEvent<HTMLElement>,
    newPhotoEV: number | null
  ) => {
    if (newPhotoEV !== null) {
      setPhotoEV(newPhotoEV);
    }
  };

  const [photoSpeed, setPhotoSpeed] = React.useState<string | null>("0");
  const speedItems = state.cameraList[activeCamera].speed.map((number) => (
    <ToggleButton value={number}>{number}</ToggleButton>
  ));
  const handlePhotoSpeed = (
    event: React.MouseEvent<HTMLElement>,
    newPhotoSpeed: string | null
  ) => {
    if (newPhotoSpeed !== null) {
      setPhotoSpeed(newPhotoSpeed);
    }
  };

  const [photoAperture, setPhotoAperture] = React.useState<string | null>("0");
  const apertureItems = state.lensList[activeLens].aperture.map((number) => (
    <ToggleButton value={number}>{number}</ToggleButton>
  ));
  const handlePhotoAperture = (
    event: React.MouseEvent<HTMLElement>,
    newPhotoAperture: string | null
  ) => {
    if (newPhotoAperture !== null) {
      setPhotoAperture(newPhotoAperture);
    }
  };

  const Input = styled(MuiInput)`
    width: 42px;
  `;
  const [photoLength, setPhotoLength] = React.useState<
    number | string | Array<number | string>
  >(30);
  const handlePhotoLengthSliderChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setPhotoLength(newValue);
  };
  const handlePhotoLengthInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhotoLength(event.target.value === "" ? "" : Number(event.target.value));
  };
  const handleBlur = () => {
    if (photoLength < state.lensList[activeLens].lengthMin) {
      setPhotoLength(state.lensList[activeLens].lengthMin);
    } else if (photoLength > state.lensList[activeLens].lengthMax) {
      setPhotoLength(state.lensList[activeLens].lengthMax);
    }
  };

  return (
    <Box>
      <TextField
        id="name-input"
        label="Name"
        variant="outlined"
        onChange={(event) => {
          setPhotoDescription(event.target.value);
        }}
        fullWidth
        required
      />
      <Divider variant="middle" />
      EV
      <ToggleButtonGroup value={photoEV} exclusive onChange={handlePhotoEV}>
        {EVItems}
      </ToggleButtonGroup>
      <Divider variant="middle" />
      Speed
      <ToggleButtonGroup
        value={photoSpeed}
        exclusive
        onChange={handlePhotoSpeed}
      >
        {speedItems}
      </ToggleButtonGroup>
      <Divider variant="middle" />
      Aperture
      <ToggleButtonGroup
        value={photoAperture}
        exclusive
        onChange={handlePhotoAperture}
      >
        {apertureItems}
      </ToggleButtonGroup>
      <Grid container spacing={2} alignItems="center">
        <Grid item>Length</Grid>
        <Grid item xs>
          <Slider
            value={
              typeof photoLength === "number"
                ? photoLength
                : state.lensList[activeLens].lengthMin
            }
            onChange={handlePhotoLengthSliderChange}
            min={state.lensList[activeLens].lengthMin}
            max={state.lensList[activeLens].lengthMax}
            step={5}
          />
        </Grid>
        <Grid item>
          <Input
            value={photoLength}
            size="small"
            onChange={handlePhotoLengthInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 5,
              min: state.lensList[activeLens].lengthMin,
              max: state.lensList[activeLens].lengthMax,
              type: "number",
            }}
          />
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Divider variant="middle" />
      {photoDescription}
      <Divider variant="middle" />
      {photoEV}
      <Divider variant="middle" />
      {photoSpeed}
      <Divider variant="middle" />
      f/{photoAperture}
      {}
    </Box>
  );
}
