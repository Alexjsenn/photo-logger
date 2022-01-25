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

function NewLens(): JSX.Element {
  let navigate = useNavigate();

  const [brand, setBrand] = useState("");
  const [mount, setMount] = useState("");
  const [lengthMin, setLengthMin] = useState(null);
  const [lengthMax, setLengthMax] = useState(null);
  const [aperture, setAperture] = useState([]);
  const [name, setName] = useState("");

  const [validBrand, setValidBrand] = useState(false);
  const [validMount, setValidMount] = useState(false);
  const [validLengthMin, setValidLengthMin] = useState(null);
  const [validLengthMax, setValidLengthMax] = useState(null);
  const [validAperture, setValidAperture] = useState(false);

  useEffect(() => {
    if (brand == "") setValidBrand(false);
    else setValidBrand(true);
  }, [brand]);

  useEffect(() => {
    if (mount == "") setValidMount(false);
    else setValidMount(true);
  }, [mount]);

  useEffect(() => {
    if (typeof lengthMin != "number") setValidLengthMin(false);
    else setValidLengthMin(true);
  }, [lengthMin]);

  useEffect(() => {
    if (typeof lengthMax != "number" || lengthMax < lengthMin)
      setValidLengthMax(false);
    else setValidLengthMax(true);
  }, [lengthMax]);

  useEffect(() => {
    if (aperture.length == 0) setValidAperture(false);
    else setValidAperture(true);
  }, [aperture]);

  return (
    <Box sx={{ alignContent: "center" }} tw="w-screen">
      <Grid
        sx={{ px: 4, py: 4 }}
        container
        direction="column"
        justifyContent="left"
        alignItems="left"
      >
        <h1>Fill in the fields below to create a new lens</h1>
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
              id="mount-input"
              label="Mount"
              variant="standard"
              onChange={(event) => {
                setMount(event.target.value);
              }}
              fullWidth
              required
            />
          </div>
          <div tw="mt-5 mb-5">
            <TextField
              id="min-length-input"
              label="Focal Length (min)"
              type="number"
              variant="standard"
              onChange={(event) => {
                if (event.target.value == "") setLengthMin(null);
                else setLengthMin(+event.target.value);
              }}
              fullWidth
              required
            />
          </div>
          <div>
            <TextField
              id="max-length-input"
              label="Focal Length (max)"
              type="number"
              variant="standard"
              onChange={(event) => {
                if (event.target.value == "") setLengthMax(null);
                else setLengthMax(+event.target.value);
              }}
              fullWidth
              required
            />
          </div>
          <div tw="mt-5 mb-5">
            <Autocomplete
              multiple
              freeSolo
              id="aperture-input"
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
                <TextField {...params} variant="standard" label="Apertures*" />
              )}
              onChange={(event, value) => setAperture(value)}
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
            {validBrand && validMount && validLengthMin && validAperture ? (
              <Button
                variant="contained"
                onClick={() => {
                  let state = getGlobalState();
                  // brand;mount;lengthMin;lengthMax;aperture;name;
                  //state.newRoll(brand, 0, aperture);
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

export default NewLens;
