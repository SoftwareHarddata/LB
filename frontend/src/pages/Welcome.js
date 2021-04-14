import React, {useEffect, useState} from "react";
import {Hidden, makeStyles, Typography} from "@material-ui/core";
import MyDrawer from "./MyDrawer";
import NavbarComponent from "../components/NavbarComponent";
import HiddenComponent from "../components/HiddenComponent";
import {Link, NavLink, useParams} from "react-router-dom";
import styled from "styled-components/macro";
import * as userApi from "../services/userService";
import {getLoggedUser} from "../services/userService";

const myStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    toolbar : theme.mixins.toolbar,
    content: {
        display: 'flex',
        //flexWrap: 'wrap',
        flexGrow: 1,
        paddingTop: theme.spacing(11),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),

        //background: 'linear-gradient(to bottom, #99b7d8, #99b7d8, #aac4e2, #bad2ed, #cbe0f8)', // F1F1F1
        backgroundColor: '#A8AAB5',
        color: "#1D253B"
    },

}))

export default function Welcome ({token, setLoggedUser, loggedUser, setToken}){

    const { username } = useParams();

    const [loggedUserData, setLoggedUserData] = React.useState([]);


    useEffect(() => {
        getLoggedUser(username, token).then((loadedUser) => {
            setLoggedUser(loadedUser)
            setLoggedUserData(loadedUser)
            console.log(loggedUserData)
            console.log("..........")
            console.log(loggedUser)
        })

        //setLoggedUserData(loggedUser)
    },  [token])





    const classes = myStyles()
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const [BackgroundColor, setBackgroundColor] = React.useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    return (
        <>
        <div className={classes.root}>
            <NavbarComponent handleDrawerToggle={handleDrawerToggle} setToken={setToken}
                             loggedUserData={loggedUserData} loggedUser={loggedUser}
                             />
            <div className={classes.content}>
            <div className={classes.toolbar}></div>

                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis...
                </Typography>
            </div>

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

            <ButtonsNavigation>
                <AButton> <NavLink to="/user/details" activeClassName="active"> profil </NavLink> </AButton>

                {/*
            <form method="post" action="/logout">
                <a href="#" onClick={this.parentNode.submit()}>Logout</a>
            </form>
            //or a button from type submit
            */}
            </ButtonsNavigation>
        </div>

            <Test className='app'>

            </Test>

        </>
    )
}

const ButtonsNavigation = styled.div`
  padding: 0.5em;
  background: #A8AAB5;
  border: none;
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
`;

const AButton = styled.button`
  background: #1D253B;
  border-radius: 10px;
  border: 0;
  margin: 10px;
  text-align: center;

  color: white;
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)';
  padding: 5px;

`;

const Test = styled.button`
  .Black{
    background-color: black;
    color: white;
  }

  .White{
    background-color: white;
    color: black;
  }

  .nothing{
    display: none;
  }

`;

