import './App.css';
import styled from 'styled-components/macro'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {useState} from 'react'
import SingUpPage from "./pages/SingUpPage";

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path="/login">
                <SingUpPage/>
            </Route>
            <Route exact path="/">
                <h1>Home</h1>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;

