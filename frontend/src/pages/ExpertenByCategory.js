import React, {useEffect} from "react";
import {Button, Hidden, makeStyles, Typography} from "@material-ui/core";
import styled from "styled-components/macro";
import NavbarComponent from "../components/NavbarComponent";
import MyDrawer from "./MyDrawer";
import MUI_Card from "../components/MUI_Card";
import {useParams} from "react-router-dom";
import Header from "../components/Header";
import * as messageApi from "../services/messageService";
import {getExpertenByCategory} from "../services/expertenService";
import DataTable from "../components/DataTable";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
        flexGrow:'1',
        backgroundColor: '#A8AAB5',
        color: '#1D253B'
    },
    toolbar : theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: '#D0CCC5',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
    },
}));

export default function ExpertenByCategory ({messages, loggedUser, token, setToken}){

    const classes = useStyles()
    const [experten, setExperten] = React.useState([]);




    let {category} = useParams();

    useEffect(() => {
        getExpertenByCategory(category, token).then((loadedExperten) => setExperten(loadedExperten))

        console.log('experten '+experten)
        console.log('category '+category)

    }, [messages, loggedUser, token, setToken, category])

    return (

        <AppContainer>
            <Header loggedUser={loggedUser} setToken={setToken} />

            {/*<div className={classes.toolbar}></div>*/}
            <Titel>Experten</Titel>

            <Wrapper>
                <div className={classes.toolbar}></div>
                <Content >
                    {experten?.map((expertItem) => (
                        <li key={expertItem.idExpertenDetails}>
                            <DataTable experten={expertItem}
                                       messages={messages} loggedUser={loggedUser}
                                       setToken={setToken} token={token} />
                        </li>
                    ))}
                </Content>
            </Wrapper>



        </AppContainer>
    )
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //align-items: center;
  //justify-content: center;
  background: #F1F1F1; // E5E7F4 A8AAB5
  overflow-y: scroll;

`

const Titel = styled.p`
  //padding: 0 16px;
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
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
/*li+li {
  margin: 10px;
}*/
`

const Wrapper = styled.div`
  //padding: 0 16px;
  display: flex;
  padding-top: 40px;
  justify-content: center;
`