import React from "react";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AppleIcon from '@material-ui/icons/Apple';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {NavLink} from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';

const drawerWidth =240;
const useStyles = makeStyles(theme => ({
    //offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('xl')]: {
            display: 'none',
        },
    },
    title:{
        flexGrow:1 // take all the free place
    },
    appBar: {
        [theme.breakpoints.up('xl')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            //marginLeft: drawerWidth,
            marginRight:drawerWidth,
        },
    },
}))

// todo: logout Funktionalitaet
export default function NavbarComponent (props){
    const classes = useStyles()
    return (
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color='action'
                        aria-label="logo"
                        className={classes.menuButton}>
                        <AppleIcon />
                    </IconButton>
                    <Typography variant='subtitle1' className={classes.title}>
                        Hallo {props.loggedUser?.username}
                    </Typography>

                    <Tooltip title="logout">
                    <Button variant='text' color='inherit' onClick={()=> props.setToken(undefined)}>
                        <NavLink to="/user/login" activeClassName="active">
                            logout
                            <IconButton
                                color='action'
                                aria-label="logo"
                                className={classes.menuButton}>
                                <ExitToAppIcon />
                            </IconButton>
                        </NavLink>
                    </Button>
                    </Tooltip>

                    <IconButton
                        onClick={()=> props.handleDrawerToggle()}
                        color='inherit'
                        aria-label="menu"
                        className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
    )
}