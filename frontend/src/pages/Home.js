import React, {useEffect} from "react";
import {Button, Hidden, makeStyles, Typography} from "@material-ui/core";
import styled from "styled-components/macro";
import NavbarComponent from "../components/NavbarComponent";
import MyDrawer from "./MyDrawer";
import MUI_Card from "../components/MUI_Card";


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
export default function Home ({messages, loggedUser, token}){

    const classes = myStyles()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [randomItem, setRandomItem] = React.useState([]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    useEffect(() => {
        //const gesundheitList = messages.filter((message) => message.category=== 'Gesundheit')
        const randomOne = messages[Math.floor(Math.random()*messages.length)];
        setRandomItem(randomOne)
    }, [messages, loggedUser, token])



    return (
        <AppContainer>
            <NavbarComponent handleDrawerToggle={handleDrawerToggle}
                             loggedUser={loggedUser} />
            <Hidden lgDown>
                <MyDrawer
                    variant='permanent'
                    open ={true}
                />
            </Hidden>
            <Hidden xlUp>
                <MyDrawer
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                />
            </Hidden>

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
  background: #d6cbbc;
  
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Test = styled.div`
  display: flex;
  overflow-y: scroll;
`