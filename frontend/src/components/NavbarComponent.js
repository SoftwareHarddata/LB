import React from "react";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AppleIcon from '@material-ui/icons/Apple';

const drawerWidth =240;
const useStyles = makeStyles(theme => ({
    //offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    title:{
        flexGrow:1 // take all the free place
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
}))

export default function NavbarComponent (props){
    const classes = useStyles()
    return (
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        onClick={()=> props.handleDrawerToggle()}
                        color='inherit'
                        aria-label="menu"
                        className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <IconButton
                        color='action'
                        aria-label="logo"
                        className={classes.menuButton}>
                        <AppleIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Hallo User
                    </Typography>
                    <Button variant='text' color='inherit'>
                        Login
                    </Button>

                </Toolbar>
            </AppBar>
    )
}