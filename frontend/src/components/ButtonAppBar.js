import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import {Link, NavLink} from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Hidden} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(9),
        display:'flex',
    },
    menuButton: {
        //marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

    myBotton: {
        padding: 0,
    },

    appBar: {
        background: '#365A80',
        top: 'auto',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
    },
}));

export default function ButtonAppBar({loggedUser}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>

                    {/*
                    <AppBar position="static" top: 'auto',>

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>*/}


                    <Button className={classes.myBotton} color="inherit"> <NavLink to={`/${loggedUser?.username}`} activeClassName="active">
                          <Hidden xsDown>Welcome</Hidden>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <ImportContactsIcon />
                        </IconButton>
                    </NavLink> </Button>

                    <Button className={classes.myBotton} color="inherit"> <Link to="/user/home">
                         <Hidden xsDown>Home</Hidden>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <HomeIcon />
                        </IconButton>
                    </Link> </Button>

                    <Button className={classes.myBotton} color="inherit"> <Link to={`/user/favoriten/${loggedUser?.idUserSingUp}/watchlist`}>
                        <Hidden xsDown>Favoriten</Hidden>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <FavoriteIcon />
                        </IconButton>
                    </Link> </Button>

                    <Button className={classes.myBotton} color="inherit"> <Link to="/user/suchen">
                        <Hidden xsDown>Suchen</Hidden>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <SearchIcon />
                        </IconButton>
                    </Link> </Button>

                    <Button className={classes.myBotton} color="inherit"> <Link to="/user/profil">
                        <Hidden xsDown>Profil</Hidden>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <AccountCircleIcon />
                        </IconButton>
                    </Link> </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
