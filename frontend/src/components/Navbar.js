import React from "react";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title:{
        flexGrow:1 // take all the free place
    }
}))

export default function Navbar (){
    const classes = useStyles()
    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton color='inherit'
                                aria-label="menu"
                                className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Hallo User
                    </Typography>
                    <Button variant='text' color='inherit'>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </>
    )
}