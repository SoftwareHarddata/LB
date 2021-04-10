import React, {useEffect} from "react";
import {Button, Hidden, makeStyles, Typography} from "@material-ui/core";
import styled from "styled-components/macro";
import NavbarComponent from "../components/NavbarComponent";
import MyDrawer from "./MyDrawer";
import MUI_Card from "../components/MUI_Card";
import Header from "../components/Header";


const myStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar : theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
}))
export default function Home ({messages, loggedUser, token, setToken}){

    const classes = myStyles()
    const [randomItem, setRandomItem] = React.useState([]);

    useEffect(() => {
        //const gesundheitList = messages.filter((message) => message.category=== 'Gesundheit')
        const randomOne = messages[Math.floor(Math.random()*messages.length)];
        setRandomItem(randomOne)
    }, [messages, loggedUser, token])



    return (
        <AppContainer>
            <Header loggedUser={loggedUser} setToken={setToken} />

            <Test>
                <div className={classes.toolbar}></div>
                <Content className={classes.content}>
                    <MUI_Card messages={messages} randomItem={randomItem} loggedUser={loggedUser}/>
                </Content>
            </Test>
        </AppContainer>
    )
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //background: #A8AAB5;
  background: #F1F1F1;
  
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Test = styled.div`
  display: flex;
  overflow-y: scroll;
  justify-content: center;
`