import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../utils/theme.config";
import SimpleRouterApp from "./SimpleRouterApp";
import MainView from "../components/LayaoutTemplate/MainView";
import "./App.css";
import { PopupProvider } from "../hooks/UsePopUp";
import Popup from "../components/Main/PopUp";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PopupProvider>
          <MainView>
            <SimpleRouterApp />
          </MainView>
          <Popup />
        </PopupProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
