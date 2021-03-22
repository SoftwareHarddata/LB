import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, {useState} from 'react'
import SingUpPage from "./pages/SingUpPage";
import Userdetails from "./pages/Userdetails";
import Home from "./pages/Home";
import theme from "./themeConfig";
import {ThemeProvider} from "@material-ui/core/styles";
import ContainerComponent from "./components/ContainerComponent";


function App() {
  return (
      <ThemeProvider theme={theme}>
      <Router>

        <Switch>
            <Route exact path="/login">
                <SingUpPage/>
            </Route>
            <Route exact path="/">
                <ContainerComponent theme={theme}/>
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

