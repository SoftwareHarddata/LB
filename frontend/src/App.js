import './App.css';
import styled from 'styled-components/macro'
import SingInSingUp from "./pages/SignInSingUp";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {useState} from 'react'
import SingUp from "./pages/SingUp";

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path="/login">
                <SingUp/>
            </Route>
            <Route exact path="/">
                <h1>Home</h1>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;

