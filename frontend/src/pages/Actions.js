import React, {useEffect} from "react";
import {Button, Hidden, makeStyles, Typography} from "@material-ui/core";
import styled from "styled-components/macro";
import NavbarComponent from "../components/NavbarComponent";
import MyDrawer from "./MyDrawer";
import MUI_Card from "../components/MUI_Card";
import {useParams} from "react-router-dom";
import * as messageApi from "../services/messageService";
import {getActionsFromUser} from "../services/actionsService";
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
export default function Actions ({messages, loggedUser, token, setToken}){

    const classes = myStyles()
    const [favorite, setFavorite] = React.useState([]);
    const [filteredList, setFilteredList] = React.useState([]);




    let { idUserSingUp, action} = useParams();
    const urlParam = "berufundprivate";


    useEffect(() => {
        // ...
        console.log('urlParams '+idUserSingUp+' '+ action)
        //checkCategory(category)
        console.log('id '+idUserSingUp)

        getActionsFromUser(idUserSingUp, action).then((loadedMessages) => setFavorite(loadedMessages))
        console.log('favorite... '+favorite)

        //const filteredList = messages?.filter((message) => message?.id_message === favorite.id_message)
        //console.log('filteredList... '+filteredList)

        //setFilteredList(filteredList)

    }, [messages, loggedUser, token, idUserSingUp])



    return (

        <AppContainer>
            <Header loggedUser={loggedUser} setToken={setToken} />

            <Test>
                <div className={classes.toolbar}></div>
                <Content>
                    {favorite.map((itemMessage) => (
                        <li>
                            <MUI_Card randomItem={itemMessage} loggedUser={loggedUser}/>
                        </li>
                    ))}
                </Content>
            </Test>
        </AppContainer>
    )
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  //align-items: center;
  //justify-content: center;
  //background: #A8AAB5;
  background: #F1F1F1;
  overflow-y: scroll;
`

const Content = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  margin-bottom: 20px;
  gap: 10px;

  li {
    margin: 10px;
  };
  li+li {
    margin: 10px;
  }
`

/*const Test = styled.div`
  //overflow-y: scroll;
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 5px
`*/
const Test = styled.div`
  //padding: 0 16px;
  display: flex;
  padding-top: 40px;
`