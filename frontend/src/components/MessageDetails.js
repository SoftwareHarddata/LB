import React, {useEffect} from "react";
import {Button, Hidden, makeStyles} from "@material-ui/core";
import ReactDOM from 'react-dom'
import Slider from 'react-styled-carousel';
import NavbarComponent from "./NavbarComponent";
import MyDrawer from "../pages/MyDrawer";
import MUI_Card from "./MUI_Card";
import styled from "styled-components/macro";

const responsive = [
    { breakPoint: 1280, cardsToShow: 2 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
    { breakPoint: 660, cardsToShow: 2 },
    { breakPoint: 0, cardsToShow: 1 },
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
export default function MessageDetails ({messages, loggedUser, token, setToken}){

    const classes = myStyles()
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    return (
        <>
            <NavbarComponent handleDrawerToggle={handleDrawerToggle}
                             loggedUser={loggedUser} setToken={setToken} />
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
            <MySlider className="myCard">
                <div className={classes.toolbar}></div>
                <Slider responsive={responsive} autoSlide={false} showArrows={true}>
                            {messages?.map((watchListItem) => (
                                <MUI_Card messages={messages} randomItem={watchListItem}/>
                            ))}
                </Slider>

            </MySlider>

        </>
    )
}

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d6cbbc;
  
`

const MyCard = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1161ee;
`

const MySlider = styled.div`
  margin-top: 20px;
`