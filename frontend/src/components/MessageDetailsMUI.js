import React, {useEffect} from "react";
import {Button, Hidden, makeStyles} from "@material-ui/core";
import ReactDOM from 'react-dom'
import Slider from 'react-styled-carousel';
import NavbarComponent from "./NavbarComponent";
import MyDrawer from "../pages/MyDrawer";
import MUI_Card from "./MUI_Card";

import Carousel from 'react-material-ui-carousel'
import styled from "styled-components/macro";

const responsive = [
    { breakPoint: 1280, cardsToShow: 2 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
    { breakPoint: 760, cardsToShow: 1 },
];

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
export default function MessageDetailsMUI ({messages}){

    const classes = myStyles()
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    useEffect(() => {
        // logic, filter, ...
    }, [messages])

    return (
        <>
            <NavbarComponent handleDrawerToggle={handleDrawerToggle}/>
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

            <div>
                <div className={classes.toolbar}></div>
                <Carousel >
                    <AppContainer>
                    {messages?.map((watchListItem) => (
                        <MUI_Card messages={messages} randomItem={watchListItem}/>
                ))}
                    </AppContainer>
                </Carousel>
            </div>

        </>
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