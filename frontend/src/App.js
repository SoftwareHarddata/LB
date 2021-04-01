import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, {useEffect, useState} from 'react'
import SingUpPage from "./pages/SingUpPage";
import Userdetails from "./pages/Userdetails";
import Home from "./pages/Home";
import theme from "./themeConfig";
import {ThemeProvider} from "@material-ui/core/styles";
import Welcome from "./components/Welcome";

import * as messageApi from './services/messageService'
import MessageDetails from "./components/MessageDetails";
import Login from "./pages/Login";
import MessageDetailsMUI from "./components/MessageDetailsMUI";



function App() {

    const [messages, setMessages] = useState([])



    useEffect(() => {
        messageApi.getMessages().then((loadedMessages) => setMessages(loadedMessages))
    }, [])



  return (
      <ThemeProvider theme={theme}>
      <Router>

        <Switch>
            <Route exact path="/user/singup">
                <SingUpPage/>
            </Route>
            <Route exact path="/user/login">
                <Login/>
            </Route>
            <Route exact path="/">
                <Welcome/>
            </Route>
            <Route exact path="/home">
                <Home messages={messages} />
            </Route>
            <Route exact path="/user/details">
                <Userdetails/>
            </Route>

            <Route exact path="/message">
                <MessageDetails messages={messages}/>
            </Route>
        </Switch>
    </Router>
      </ThemeProvider>
  );
}

export default App;

