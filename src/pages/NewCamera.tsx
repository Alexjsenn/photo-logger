import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import "styled-components/macro";
import {
  Box,
  Button,
  Grid,
  TextField,
  Chip,
  Autocomplete,
} from "@mui/material";
import {
  getGlobalState,
  globalState,
  setGlobalState,
} from "../stateInfo/globalState";
import { useNavigate } from "react-router-dom";
import ROUTES from "../config/routes";

function NewCamera(): JSX.Element {
  let navigate = useNavigate();

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [mount, setMount] = useState([]);
  const [speed, setSpeed] = useState([]);
  const [name, setName] = useState("");

  const [validBrand, setValidBrand] = useState(false);
  const [validModel, setValidModel] = useState(false);
  const [validMount, setValidMount] = useState(false);
  const [validSpeed, setValidSpeed] = useState(null);

  useEffect(() => {
    if (brand == "") setValidBrand(false);
    else setValidBrand(true);
  }, [brand]);

  useEffect(() => {
    if (model == "") setValidModel(false);
    else setValidModel(true);
  }, [model]);

  useEffect(() => {
    if (mount.length == 0) setValidMount(false);
    else setValidMount(true);
  }, [mount]);

  useEffect(() => {
    if (speed.length == 0) setValidSpeed(false);
    else setValidSpeed(true);
  }, [speed]);

  return (
    <Box sx={{ alignContent: "center" }} tw="w-screen">
      <Grid
        sx={{ px: 4, py: 4 }}
        container
        direction="column"
        justifyContent="left"
        alignItems="left"
      >
        <h1 style={{ fontFamily: "Arial" }}>
          Fill in the fields below to create a new camera
        </h1>
        <Box component="form">
          <div tw="mt-5 mb-5">
            <TextField
              id="brand-input"
              label="Brand"
              variant="standard"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
              fullWidth
              required
            />
          </div>
          <div tw="mt-5 mb-5">
            <TextField
              id="model-input"
              label="Model"
              variant="standard"
              onChange={(event) => {
                setModel(event.target.value);
              }}
              fullWidth
              required
            />
          </div>
          <div tw="mt-5 mb-5">
            <Autocomplete
              multiple
              freeSolo
              id="mount-input"
              options={[]}
              renderTags={(value: readonly string[], getTagProps) =>
                value.map((option: string, index: number) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Mounts*" />
              )}
              onChange={(event, value) => setMount(value)}
              fullWidth
            />
          </div>
          <div tw="mt-5 mb-5">
            <Autocomplete
              multiple
              freeSolo
              id="speed-input"
              options={[]}
              renderTags={(value: readonly string[], getTagProps) =>
                value.map((option: string, index: number) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Shutter Speeds*"
                />
              )}
              onChange={(event, value) => setSpeed(value)}
            />
          </div>
          <div tw="mt-5 mb-5">
            <TextField
              id="name-input"
              label="Name"
              variant="standard"
              onChange={(event) => {
                setName(event.target.value);
              }}
              fullWidth
            />
          </div>
          <div tw="mt-10">
            {validBrand && validModel && validMount && validSpeed ? (
              <Button
                variant="contained"
                onClick={() => {
                  let state = getGlobalState();
                  // brand;model;mount;speed;name;
                  //state.newCamera(brand, model, mount, speed, name);
                  setGlobalState(state);
                  navigate(-1);
                }}
              >
                Create
              </Button>
            ) : (
              <Button variant="contained" disabled>
                Create
              </Button>
            )}
          </div>
        </Box>
      </Grid>
    </Box>
  );
}

export default NewCamera;
