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
  const [aperture, setAperture] = useState(null);
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
    if (typeof aperture != "number") setValidAperture(false);
    else setValidAperture(true);
  }, [aperture]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box component="form">
        <div tw="mt-5 mb-5">
          <TextField
            id="brand-input"
            label="Brand"
            variant="standard"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
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
            required
          />
        </div>
        <div tw="mt-5 mb-5">
          <TextField
            id="aperture-input"
            label="Aperture"
            type="number"
            variant="standard"
            onChange={(event) => {
              if (event.target.value == "") setAperture(null);
              else setAperture(+event.target.value);
            }}
            required
          />
        </div>
        <div>
          <Autocomplete
            multiple
            freeSolo
            id="aperture2-input"
            options={[]}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField {...params} variant="standard" label="Aperture*" />
            )}
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
          />
        </div>
        <div tw="mt-10">
          {validBrand && validMount && validLengthMin && validAperture ? (
            <Button
              variant="contained"
              onClick={() => {
                let state = getGlobalState();
                state.newRoll(brand, 0, aperture);
                setGlobalState(state);
                navigate(ROUTES.rollList);
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
  );
}

export default NewLens;
