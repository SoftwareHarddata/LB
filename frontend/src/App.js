import './App.css';
import styled from 'styled-components/macro'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, {useState} from 'react'
import SingUpPage from "./pages/SingUpPage";
import Userdetails from "./pages/Userdetails";
import Button_MUI from "./components/Button_MUI";
import Home from "./pages/Home";
import theme from "./themeConfig";
import {ThemeProvider} from "@material-ui/core/styles";
import Navbar from "./components/Navbar";


function App() {
  return (
      <ThemeProvider theme={theme}>
      <Router>
      <Navbar/>
        <Switch>
            <Route exact path="/login">
                <SingUpPage/>
            </Route>
            <Route exact path="/">
                <Home/>
                <Button_MUI/>
            </Route>
            <Route exact path="/details">
                <Userdetails/>
            </Route>
        </Switch>
    </Router>
      </ThemeProvider>
  );
}

export default App;

