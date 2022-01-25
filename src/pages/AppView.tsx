import React from "react";
import tw from "twin.macro";
import "styled-components/macro";
import { Box, Grid, IconButton } from "@mui/material";
import BottomNav from "../components/BottomNav";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import ROUTES from "../config/routes";
import { getGlobalState } from "../stateInfo/globalState";

interface appViewProps {
  page: JSX.Element;
  title: string;
}

export default function AppView({ page, title }: appViewProps): JSX.Element {
  const navigate = useNavigate();
  if (title == "Photos") {
    title = getGlobalState().rollName;
  } else if (title == "Photo") {
    title = "Photo #" + (getGlobalState().photoView + 1);
  }
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      tw="h-full"
      sx={{ bgcolor: "background.default", color: "text.primary" }}
    >
      <Grid item height={64}>
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          tw="h-16 fixed top-0 left-0 right-0 bg-primary"
        >
          <Grid container direction="row" justifyContent="center">
            <Grid item>
              <IconButton
                onClick={() => {
                  navigate(-1);
                }}
              >
                <ArrowBackIosIcon sx={{ color: grey[100] }} />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={9}
              alignItems="center"
              justifyContent="center"
              display="flex"
            >
              <h1 tw="text-2xl text-white font-sans">{title}</h1>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => {
                  navigate(ROUTES.settings);
                }}
              >
                <SettingsIcon sx={{ color: grey[100] }} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Grid item>{page}</Grid>

      <Grid item>
        <BottomNav />
      </Grid>
    </Grid>
  );
}
