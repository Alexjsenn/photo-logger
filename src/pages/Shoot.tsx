import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import "styled-components/macro";
import {
  globalState,
  getGlobalState,
  setGlobalState,
} from "../stateInfo/globalState";
import { useNavigate } from "react-router-dom";
import ShootPanel from "../components/ShootPanel";
import { Box, Button } from "@mui/material";

function Shoot(): JSX.Element {
  let navigate = useNavigate();
  let state = getGlobalState();
  const [validCamera, setValidCamera] = useState(false);
  const [validLens, setValidLens] = useState(false);
  const [validRoll, setValidRoll] = useState(false);

  useEffect(() => {
    if (state.cameraList.length == 0) setValidCamera(false);
    else setValidCamera(true);
  }, [validCamera]);

  useEffect(() => {
    if (state.lensList.length == 0) setValidLens(false);
    else setValidLens(true);
  }, [validLens]);

  useEffect(() => {
    if (state.rollList.length == 0) setValidRoll(false);
    else setValidRoll(true);
  }, [validRoll]);

  if (validCamera && validLens && validRoll)
    return (
      <Box tw="w-screen content-center mt-4 ml-4">
        <ShootPanel />
      </Box>
    );
  else
    return (
      <Box tw="w-screen content-center mt-4 ml-4">
        {validCamera ? null : <p>There are no cameras set</p>}
        {validLens ? null : <p>There are no lenses set</p>}
        {validRoll ? null : <p>There are no film rolls set</p>}
        <Button
          variant="contained"
          color="error"
          sx={{ m: 4 }}
          onClick={() => {
            navigate(-1);
          }}
        >
          Add presets
        </Button>
      </Box>
    );
  // return (
  //   <Box tw="w-screen content-center mt-4 ml-4">
  //     <p> Show current photo info</p>

  //   </Box>
  // );
}

export default Shoot;
