import React, {useEffect, useState} from "react";
import {Hidden, makeStyles, Typography} from "@material-ui/core";
import MyDrawer from "../pages/MyDrawer";
import NavbarComponent from "./NavbarComponent";
import HiddenComponent from "./HiddenComponent";
import {Link, NavLink, useParams} from "react-router-dom";
import styled from "styled-components/macro";
import * as userApi from "../services/userService";
import {getLoggedUser} from "../services/userService";

const drawerWidth =240;

const myStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar : theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.paper,
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

        </div>


            <ButtonsNavigation>
                <button> <Link to="/user/home">Home</Link> </button>

                <button> <NavLink to="/user/details" activeClassName="active"> profil </NavLink> </button>

                {/*
            <form method="post" action="/logout">
                <a href="#" onClick={this.parentNode.submit()}>Logout</a>
            </form>
            //or a button from type submit
            */}
        </ButtonsNavigation>




        </>
    )
}

const ButtonsNavigation = styled.div`
  padding: 0.5em;
  background: seashell;
  border: none;
  display: flex;
  justify-content: space-around;
`;