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
import * as userApi from "./services/userService";



function App() {

    const [messages, setMessages] = useState([])
    const [token, setToken] = useState(undefined);
    //const [loggedUserData, setLoggedUserData] = useState([])
    const [loggedUser, setLoggedUser] = useState([])


    useEffect(() => {
        messageApi.getMessages(token).then((loadedMessages) => setMessages(loadedMessages))
    }, [])


    /*
        useEffect(() => {
            userApi.loggedUser(token).then((loadedUser) => setLoggedUserData(loadedUser))
         [])

        /*

         */



  return (
      <ThemeProvider theme={theme}>
      <Router>

        <Switch>
            <Route exact path="/user/singup">
                <SingUpPage/>
            </Route>
            <Route exact path="/user/login">
                <Login setToken={setToken} token={token} />
            </Route>
            <Route exact path="/:username">
                <Welcome setLoggedUser={setLoggedUser} loggedUser={loggedUser} token={token}/>
            </Route>
            <Route exact path="/user/details">
                <Userdetails token={token} loggedUser={loggedUser}/>
            </Route>

            <Route exact path="/user/home">
                <Home messages={messages} token={token} loggedUser={loggedUser}/>
            </Route>
            <Route exact path="/user/messages">
                <MessageDetails messages={messages} token={token} loggedUser={loggedUser}/>
            </Route>
            {/*todo: category, favoriten, experten, suchfunktion, details*/}
            <Route exact path="category/:category">
                <Home messages={messages} token={token} loggedUser={loggedUser}/>
            </Route>
        </Switch>
    </Router>
      </ThemeProvider>
  );
}

export default App;

