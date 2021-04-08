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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar({loggedUser}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>*/}


                    <Button color="inherit"> <NavLink to={`/${loggedUser.username}`} activeClassName="active">
                        welcome
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <ImportContactsIcon />
                        </IconButton>
                    </NavLink> </Button>

                    <Button color="inherit"> <Link to="/user/home">
                        Home
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <HomeIcon />
                        </IconButton>
                    </Link> </Button>

                    <Button color="inherit"> <Link to="/user/home">
                        Favoriten
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <HomeIcon />
                        </IconButton>
                    </Link> </Button>


                </Toolbar>
            </AppBar>
        </div>
    );
}
