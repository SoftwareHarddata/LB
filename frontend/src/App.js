import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, {useEffect, useState} from 'react'
import SingUpPage from "./pages/SingUpPage";
import Userdetails from "./pages/Userdetails";
import Home from "./pages/Home";
import theme from "./themeConfig";
import {ThemeProvider} from "@material-ui/core/styles";
import ContainerComponent from "./components/ContainerComponent";

import * as messageApi from './services/messageService'
import MessageDetails from "./components/MessageDetails";



function App() {

    const [messages, setMessages] = useState([])



    useEffect(() => {
        messageApi.getMessages().then((loadedMessages) => setMessages(loadedMessages))
    }, [])



  return (
      <ThemeProvider theme={theme}>
      <Router>

        <Switch>
            <Route exact path="/user/login">
                <SingUpPage/>
            </Route>
            <Route exact path="/">
                <ContainerComponent/>
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

