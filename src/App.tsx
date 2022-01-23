import React from "react";
import tw from "twin.macro";
import "styled-components/macro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTES from "./config/routes";
import Home from "./pages/Home";
import Shoot from "./pages/Shoot";
import RollList from "./pages/RollList";
import NewRoll from "./pages/NewRoll";
import BottomNav from "./components/BottomNav";
import AppView from "./pages/AppView";
import { Settings } from "./pages/Settings";
import PhotoList from "./pages/PhotoList";
import { getGlobalState } from "./stateInfo/globalState";
import PhotoView from "./pages/PhotoView";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.home}
          element={<AppView page={<Home />} title="Home" />}
        />
        <Route
          path={ROUTES.shoot}
          element={<AppView page={<Shoot />} title="Current Picture" />}
        />
        <Route
          path={ROUTES.rollList}
          element={<AppView page={<RollList />} title="Your Photo Rolls" />}
        />
        <Route
          path={ROUTES.newRoll}
          element={<AppView page={<NewRoll />} title="New Roll" />}
        />
        <Route
          path={ROUTES.settings}
          element={<AppView page={<Settings />} title="Settings" />}
        />
        <Route
          path={ROUTES.photoList}
          element={<AppView page={<PhotoList />} title="Photos" />}
        />
        <Route
          path={ROUTES.photoView}
          element={<AppView page={<PhotoView />} title="Photo" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
